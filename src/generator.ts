import * as md5 from "blueimp-md5";

interface options {
    accuracy: number;
}

class generator {
    private raw: string;
    private medium: string;
    private decMedium: number;

    public constructor(username: string, userOptions?: options) {
        const options = userOptions || {};
        this.raw = username;
        this.medium = md5(username);
        this.decMedium = parseInt(this.medium.substring(0, options.accuracy || 7), 16);
    }

    public getMD5(): number {
        return this.decMedium;
    }
}

export default generator;