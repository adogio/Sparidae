import point from './point.interface';
import popper from './popper.interface';

interface jsonResult {
    width: number;
    height: number;
    type: string;
    display: string;
    aspect: boolean;
    components: Array<{
        type: string;
        fill: string;
        points: Array<point>;
    }>;
}

class jsonPopper implements popper {

    private resultBuffer: jsonResult;

    public constructor(display: string) {
        this.reset();
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
        return temp;
    }

    public reset(): jsonPopper {
        this.resultBuffer = {
            width: 100,
            height: 100,
            type: 'svg',
            display: '',
            aspect: false,
            components: []
        };
        return this;
    }
}

export default jsonPopper;