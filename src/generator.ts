import * as md5 from "blueimp-md5";

interface options {
    accuracy?: number;
}

class generator {
    private raw: string;
    private medium: string;

    public constructor(username: string, userOptions?: options) {
        const options: options = userOptions || {};
        this.raw = username;
        this.medium = md5(username);
    }

    public getMD5(): string {
        return this.medium;
    }

    public getMedium(left: number, right: number): number {
        return parseInt(this.medium.substring(left, right), 16);
    }
}

export default generator;