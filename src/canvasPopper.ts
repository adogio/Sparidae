import point from './point.interface';
import popper from './popper.interface';

class canvasPopper implements popper {

    private display: string;

    public constructor(display: string) {
        this.display = display;
    }

    public rect(point1: point, point2: point, point3: point, fill: string): canvasPopper {
        return this;
    }

    public setSize(width: number, height: number): canvasPopper {
        return this;
    }

    public setAspect(aspect: boolean): canvasPopper {
        return this;
    }

    public flushString(): string {
        return this.flush();
    }

    public flush(): string {
        return "";
    }

    public reset(): canvasPopper {
        return this;
    }
}

export default canvasPopper;