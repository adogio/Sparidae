import point from './point';

class svgPopper {

    private resultBuffer: string;

    public constructor() {
        this.resultBuffer = "<svg>";
    }

    public rect(point1: point, point2: point, point3: point, fill: string): svgPopper {
        this.resultBuffer += "<polygon points=\""
        this.resultBuffer += this.pointBuilder(point1) + " ";
        this.resultBuffer += this.pointBuilder(point2) + " ";
        this.resultBuffer += this.pointBuilder(point3);
        this.resultBuffer += "\" fill=\"" + fill + "\" />"
        return this;
    }

    public flush(): string {
        const result = this.resultBuffer + "</svg>";
        this.resultBuffer = "<svg>";
        return result;
    }

    public pointBuilder(point: point): string {
        return point.x + "," + point.y;
    }

}