import point from './point.interface';

interface popper {
    rect(point1: point, point2: point, point3: point, fill: string): popper;
    setSize(width: number, height: number): popper;
    flush(): any;
    reset(): popper;
}

export default popper;