import * as fs from 'fs';
import generator from './generator';
import svgPopper from './svgPopper';
import location from './pointLocation';

export default function (username: string) {
    const gen = new generator(username);
    const svg = new svgPopper();
    const loc = new location();

    const point1 = loc.getPoint(gen.getMedium(0, 6));
    const point2 = loc.getPoint(gen.getMedium(6, 12));
    const point3 = loc.getPoint(gen.getMedium(12, 18));
    fs.writeFileSync(
        'test.html',
        svg.
            setSize(100, 100).
            reset().
            rect(point1, point2, point3, "red").
            flush()
    );
}