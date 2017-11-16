import point from './point';

const EDGELENGTH: number = 480;
const EDGELENGTHTOTAL: number = EDGELENGTH * 4;

class location {

    private queue: Array<number>;

    public constructor() {
        this.queue = [];
    }

    public getPoint(key: number): point {
        if (key <= EDGELENGTHTOTAL) throw new Error("key size too small");
        let temp: number = key % EDGELENGTHTOTAL;
        let whichEdge: number = Math.floor(temp / EDGELENGTH);
        let lengthLeft: number = temp % EDGELENGTH;
        let resultPoint: point;
        while (this.checkQueue(whichEdge)) {
            if (whichEdge >= 3) {
                whichEdge = 0;
            } else {
                whichEdge++;
            }
        }
        switch (whichEdge) {
            case 0:
                resultPoint = { x: lengthLeft, y: 0 };
                break;
            case 1:
                resultPoint = { x: EDGELENGTH, y: lengthLeft };
                break;
            case 2:
                resultPoint = { x: EDGELENGTH - lengthLeft, y: EDGELENGTH };
                break;
            case 3:
                resultPoint = { x: 0, y: EDGELENGTH - lengthLeft };
                break;
            default:
                throw new Error("Edge out of bound");
        }
        this.pushQueue(whichEdge).touchQueue();
        return resultPoint;
    }

    public checkQueue(edge: number): boolean {
        for (let i: number = 0; i < this.queue.length; i++) {
            if (this.queue[i] == edge) return true;
        }
        return false;
    }

    public pushQueue(medium: number): location {
        this.queue.push(medium);
        return this;
    }

    public touchQueue(): location {
        if (this.queue.length >= 4) this.clear();
        return this;
    }

    public clear(): location {
        this.queue = [];
        return this;
    }

}

export default location;