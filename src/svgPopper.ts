import point from './point';

class svgPopper {

    private resultBuffer: string;
    private width: number;
    private height: number;

    public constructor() {
        this.reset();
    }

    public rect(point1: point, point2: point, point3: point, fill: string): svgPopper {
        this.resultBuffer += "<polygon points=\""
        this.resultBuffer += this.pointBuilder(point1) + " ";
        this.resultBuffer += this.pointBuilder(point2) + " ";
        this.resultBuffer += this.pointBuilder(point3);
        this.resultBuffer += "\" fill=\"" + fill + "\" />"
        return this;
    }

    public setSize(width: number, height: number): svgPopper {
        this.width = width;
        this.height = height;
        return this;
    }

    public flush(): string {
        const result = this.resultBuffer + "</svg>";
        this.reset();
        return result;
    }

    public reset(): svgPopper {
        this.resultBuffer = "<svg viewBox=\"0 0 480 480\" ";
        this.resultBuffer += "width=\"" + (this.width || "auto") + "\" ";
        this.resultBuffer += "height=\"" + (this.height || "auto") + "\" ";
        this.resultBuffer += ">"
        return this;
    }

    private pointBuilder(point: point): string {
        return point.x + "," + point.y;
    }

}

export default svgPopper;