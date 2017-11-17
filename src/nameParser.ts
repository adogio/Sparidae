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
            case 1:
                if (arr[0].length === 0) return "**";
                return this.username.substring(0, 1).toUpperCase() + this.username.substring(this.username.length - 1, this.username.length).toLowerCase();

            case 2:
                return arr[0].substring(0, 1).toUpperCase() + arr[1].substring(0, 1).toUpperCase();

            default:
                return arr[0].substring(0, 1).toUpperCase() + arr[arr.length - 1].substring(0, 1).toUpperCase();

        }
    }

    public getThreeDigitResult(): string {
        let arr: Array<string> = this.username.split(" ");
        switch (arr.length) {
            case 1:
                if (arr[0].length === 0) return "** *";
                if (this.username.length < 3) {
                    return this.username.substring(0, 1).toUpperCase() +
                        this.username.substring(this.username.length - 1, this.username.length).toLowerCase() + " *";
                }
                return this.username.substring(0, 1).toUpperCase() +
                    this.username.substring(this.username.length - 2, this.username.length - 1).toLowerCase() + " " +
                    this.username.substring(this.username.length - 1, this.username.length).toUpperCase();

            case 2:
                if (arr[0].length < 2) {
                    if (arr[1].length < 1) {
                        return (arr[0].length === 1 ? (arr[0].toUpperCase() + "*") : "**") + " *";
                    } else if (arr[1].length < 2) {
                        return (arr[0].length === 1 ? (arr[0].toUpperCase() + "*") : arr[1].toUpperCase) + " *";
                    }
                    return arr[0].substring(0, 1).toUpperCase() +
                        arr[1].substring(0, 1).toUpperCase() + " " +
                        arr[1].substring(arr[1].length - 1, arr[1].length).toLowerCase();
                }

                return arr[0].substring(0, 1).toUpperCase() +
                    arr[0].substring(1, 2).toLowerCase() + " " +
                    arr[1].substring(0, 1).toUpperCase();

            case 3:
                return arr[0].substring(0, 1).toUpperCase() +
                    arr[1].substring(0, 1).toLowerCase() + " " +
                    arr[2].substring(0, 1).toUpperCase();

            default:
                return arr[0].substring(0, 1).toUpperCase() +
                    arr[1].substring(0, 1).toLowerCase() + " " +
                    arr[arr.length - 1].substring(0, 1).toUpperCase();
        }
    }

}

export default nameParser;