import point from './point';

const EDGELENGTH: number = 480;
const EDGELENGTHTOTAL: number = EDGELENGTH * 4;

class location {

    private queue: Array<number>;
    private outer: Array<point>;
    private inner: Array<point>;

    public constructor() {
        this.queue = [];
        this.outer = [];
        this.inner = [];
    }

    public getPoint(key: number): point {
        if (key <= EDGELENGTHTOTAL) throw new Error("key size too small");
        let temp: number = key % EDGELENGTHTOTAL;
        let whichEdge: number = Math.floor(temp / EDGELENGTH);
        let lengthLeft: number = Math.floor(temp % EDGELENGTH);
        let resultPoint: point;
        let loop: number = 0;
        while (this.checkQueue(whichEdge)) {
            if (loop >= 5) break;
            if (whichEdge >= 3 || whichEdge <= 0) {
                whichEdge = 2;
            } else {
                (key + whichEdge) % 2 >= 1 ? whichEdge++ : whichEdge--;
            }
            loop++;
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
        this.outer.push(resultPoint);
        return resultPoint;
    }

    public getMediumPoint(point1: point, point2: point, key: number): point {
        const AvaiableShift = Math.floor(EDGELENGTH * 0.1);
        let x: number = Math.floor((point1.x + point2.x) / 2) + this.getKeyShift(key, AvaiableShift);
        let y: number = Math.floor((point1.y + point2.y) / 2) + this.getKeyShift(key, AvaiableShift);
        // let x: number = Math.floor((point1.x + point2.x) / 2);
        // let y: number = Math.floor((point1.y + point2.y) / 2);
        let resultPoint = { x: x, y: y };
        this.inner.push(resultPoint);
        return resultPoint;
    }

    public getKeyShift(key: number, limit: number): number {
        let shift = (key % limit);
        return Math.floor(shift - shift / 2);
    }

    public getRandom(limit: number): number {
        let ran: number = Math.floor(Math.random() * 1000);
        return Math.floor((ran % limit) - limit / 2);
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