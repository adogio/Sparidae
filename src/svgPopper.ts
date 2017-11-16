import point from './point';

class svgPopper {

    private resultBuffer: string;
    private width: number;
    private height: number;
    private username: string;

    public constructor(username: string) {
        this.username = username;
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
        const result = this.resultBuffer + "</svg><div style=\"position:absolute;bottom:5;right:5;font-weight:bold;user-select: none\">" + this.username + "</div></div>";
        this.reset();
        return result;
    }

    public reset(): svgPopper {
        this.resultBuffer = "<div style=\"width:" + this.width + ";height:" + this.height + ";position:relative;border:1px black solid\"><svg viewBox=\"0 0 480 480\" ";
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