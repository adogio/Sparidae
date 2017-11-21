import point from './point.interface';
import popper from './popper.interface';

interface jsonResult {
    width: number;
    widthUnit: string;
    height: number;
    heightUnit: string;
    type: string;
    border: boolean;
    fontSize: number;
    display: string;
    aspect: boolean;
    components: Array<{
        type: string;
        fill: string;
        points: Array<point>;
    }>;
}

interface UserOptions {
    border?: boolean;
    fontSize?: number;
    unit?: string;
}

class jsonPopper implements popper {

    private resultBuffer: jsonResult;

    public constructor(display: string, userOptions?: UserOptions) {
        const options: UserOptions = userOptions || {};
        this.reset();
        if (options.unit === "flex") {
            this.resultBuffer.widthUnit = "vw";
            this.resultBuffer.heightUnit = "vh";
        } else {
            this.resultBuffer.widthUnit = options.unit || "px";
            this.resultBuffer.heightUnit = options.unit || "px";
        }
        this.resultBuffer.fontSize = options.fontSize || void 0;
        this.resultBuffer.border = options.border || true;
        this.resultBuffer.display = display;
    }

    public rect(point1: point, point2: point, point3: point, fill: string): jsonPopper {
        this.resultBuffer.components.push({
            type: "polygon",
            fill: fill,
            points: [point1, point2, point3]
        });
        return this;
    }

    public setSize(width: number, height: number): jsonPopper {
        this.resultBuffer.width = width;
        this.resultBuffer.height = height;
        return this;
    }

    public setAspect(aspect: boolean): jsonPopper {
        this.resultBuffer.aspect = aspect;
        return this;
    }

    public flushString(): string {
        return JSON.stringify(this.flush());
    }

    public flush(): jsonResult {
        let temp = this.resultBuffer;
        this.reset();
        return { ...temp, ...{ fontSize: this.resultBuffer.fontSize || this.resultBuffer.width * 0.32 } };
    }

    public reset(): jsonPopper {
        this.resultBuffer = {
            width: 100,
            widthUnit: "px",
            border: true,
            height: 100,
            heightUnit: "px",
            type: 'svg',
            display: '',
            fontSize: void 0,
            aspect: false,
            components: []
        };
        return this;
    }
}

export default jsonPopper;