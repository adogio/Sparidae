class nameParser {

    private username: string;

    public constructor(username: string) {
        this.username = username;
    }

    public getOneDigitResult(): string {
        return this.username.substring(0, 1).toUpperCase();
    }

    public getTwoDigitResult(): string {
        let arr: Array<string> = this.username.split(" ");
        switch (arr.length) {
            case 0:
                return "**";
            case 1:
                return this.username.substring(0, 1).toUpperCase() + this.username.substring(this.username.length - 1, this.username.length).toLowerCase();
            case 2:
                return arr[1].substring(0, 1).toUpperCase() + arr[0].substring(0, 1).toUpperCase();
            default:
                return arr[0].substring(0, 1).toUpperCase() + arr[arr.length - 1].substring(0, 1).toUpperCase();
        }
    }

}

export default nameParser;