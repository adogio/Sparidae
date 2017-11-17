interface returningList {
    loop: Function;
}

class colorParser {

    private colorList: Array<string>;
    private loopStatus: number;
    private options: any;

    public constructor(colorList: Array<string>, options?: any) {
        this.colorList = colorList;
        this.loopStatus = 0;
        this.options = options || {};
    }

    public rgb: returningList = {
        loop: (): string => {
            if (!Boolean(this.colorList[this.loopStatus])) this.loopStatus = 0;
            return this.parseHEXtoRGBA(this.loopStatus++);
        }
    }

    public rgba: returningList = {
        loop: (): string => {
            if (!Boolean(this.colorList[this.loopStatus])) this.loopStatus = 0;
            return this.parseHEXtoRGBA(this.loopStatus++);
        }
    }

    private parseHEXtoRGBA(location: number): string {
        let color: string = this.colorList[location];
        if (color.substring(0, 1) === "#") color = color.substring(1, color.length);
        if (color.length !== 6) throw new Error("color length > 6");
        let result: string = "rgba(";

        for (let i: number = 0; i < color.length; i += 2) {
            result += parseInt(color.substring(i, i + 2), 16).toString();
            result += ", ";
        }
        result += this.optionExistOrEmpty("alpha", "0.3") + ")";
        return result;
    }

    private optionExistOrEmpty(which: string, empty?: string): string {
        if (Boolean(this.options)) {
            if (Boolean(this.options[which])) {
                return this.options[which];
            }
        }
        return empty || "";
    }

}

export default colorParser;