import * as fs from 'fs';
import generator from './generator';
import svgPopper from './svgPopper';
import nameParser from './nameParser';
import location from './pointLocation';

export default function (username: string) {
    const gen = new generator(username);
    const nam = new nameParser(username);
    const svg = new svgPopper(nam.getTwoDigitResult());
    const loc = new location();

    const point1 = loc.getPoint(gen.getMedium(0, 6));
    const point2 = loc.getPoint(gen.getMedium(6, 12));
    const point3 = loc.getPoint(gen.getMedium(12, 18));

    const point4 = loc.getPoint(gen.getMedium(18, 24));
    const point5 = loc.getPoint(gen.getMedium(21, 27));
    const point6 = loc.getPoint(gen.getMedium(24, 30));

    const point7 = loc.getPoint(gen.getMedium(5, 12));
    const point8 = loc.getPoint(gen.getMedium(15, 21));
    const point9 = loc.getPoint(gen.getMedium(23, 28));

    const innterPoint1 = loc.getMediumPoint(point1, point4, gen.getMedium(18, 21));
    const innterPoint2 = loc.getMediumPoint(point2, point5, gen.getMedium(21, 24));
    const innterPoint3 = loc.getMediumPoint(point3, point6, gen.getMedium(24, 27));

    const innterPoint4 = loc.getMediumPoint(point4, point7, gen.getMedium(18, 21));
    const innterPoint5 = loc.getMediumPoint(point5, point8, gen.getMedium(21, 24));
    const innterPoint6 = loc.getMediumPoint(point6, point9, gen.getMedium(24, 27));

    const innterPoint7 = loc.getMediumPoint(point7, point1, gen.getMedium(18, 21));
    const innterPoint8 = loc.getMediumPoint(point8, point2, gen.getMedium(21, 24));
    const innterPoint9 = loc.getMediumPoint(point9, point3, gen.getMedium(24, 27));

    return svg.
        setSize(100, 100).
        reset().
        rect(point1, point2, point3, "rgba(104, 237, 104, 0.3)").
        rect(point4, point5, point6, "rgba(237, 170, 104, 0.3)").
        rect(point7, point8, point9, "rgba(104, 237, 237, 0.3)").
        rect(innterPoint1, innterPoint2, innterPoint3, "rgba(104, 104, 237, 0.2)").
        rect(innterPoint4, innterPoint5, innterPoint6, "rgba(170, 237, 104, 0.2)").
        rect(innterPoint7, innterPoint8, innterPoint9, "rgba(237, 170, 104, 0.2)").
        flush();
}