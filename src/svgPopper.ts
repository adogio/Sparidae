import point from './point.interface';
import popper from './popper.interface';

interface UserOptions {
    border?: boolean;
    fontSize?: number;
    unit?: string;
}

class svgPopper implements popper {

    private resultBuffer: string;
    private width: number;
    private height: number;
    private display: string;
    private border: string;
    private fontSize: number;
    private isAspect: boolean;
    private unit: string;

    public constructor(display: string, userOptions?: UserOptions) {
        const options: UserOptions = userOptions || {};
        this.unit = options.unit || "px";
        this.border = options.border ? "1px solid black" : "";
        this.isAspect = false;
        if (this.unit === "px") {
            this.width = 100;
            this.height = 100;
        } else {
            this.width = 10;
            this.height = 10;
        }
        this.fontSize = options.fontSize || void 0;
        this.display = display;
        this.reset();
    }

    public rect(point1: point, point2: point, point3: point, fill: string): svgPopper {
        this.resultBuffer += "<polygon points=\"";
        this.resultBuffer += this.pointBuilder(point1) + " ";
        this.resultBuffer += this.pointBuilder(point2) + " ";
        this.resultBuffer += this.pointBuilder(point3);
        this.resultBuffer += "\" fill=\"" + fill + "\" />";
        return this;
    }

    public setSize(width: number, height: number): svgPopper {
        this.width = width;
        this.height = height;
        return this;
    }

    public setAspect(aspect: boolean): svgPopper {
        this.isAspect = aspect;
        return this;
    }

    public flushString(): string {
        return this.flush();
    }

    public flush(): string {
        const result = this.resultBuffer + "</svg><div style=\"position:absolute;bottom:" + (this.width * 0.05) + this.unit + ";right:" + (this.height * 0.05) + this.unit + ";font-weight:bold;font-size:" + (this.fontSize || this.width * 0.32) + this.unit + ";user-select: none\">" + this.display + "</div></div>";
        this.reset();
        return result;
    }

    public reset(): svgPopper {
        this.resultBuffer = "<div style=\"";
        this.resultBuffer += "width:" + this.width + this.unit + ";";
        this.resultBuffer += "height:" + this.height + this.unit + ";";
        this.resultBuffer += "overflow:hidden;";
        this.resultBuffer += "position:relative;";
        this.resultBuffer += "border:" + (this.border || "0") + ";";
        this.resultBuffer += "\">";
        this.resultBuffer += "<svg viewBox=\"0 0 480 480\" ";
        this.resultBuffer += "width=\"" + (this.width + this.unit || "auto") + "\" ";
        this.resultBuffer += "height=\"" + (this.height + this.unit || "auto") + "\" ";
        this.resultBuffer += "preserveAspectRatio=\"" + (this.isAspect ? "true" : "none") + "\" ";
        this.resultBuffer += ">";
        return this;
    }

    private pointBuilder(point: point): string {
        return point.x + "," + point.y;
    }

}

export default svgPopper;