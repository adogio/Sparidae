import generator from './generator';
import svgPopper from './svgPopper';
import nameParser from './nameParser';
import location from './pointLocation';
import colorParser from './colorParser';
import chaetodon, { WEATHERS } from 'chaetodon';

export default function (username: string) {
    const gen = new generator(username);
    const nam = new nameParser(username);
    const svg = new svgPopper(nam.getTwoDigitResult());
    const loc = new location();
    const col = new colorParser(chaetodon(WEATHERS.NUM(gen.getMedium(27, 30))));

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
        rect(point1, point2, point3, col.rgba.loop()).
        rect(point4, point5, point6, col.rgba.loop()).
        rect(point7, point8, point9, col.rgba.loop()).
        rect(innterPoint1, innterPoint2, innterPoint3, col.rgba.loop()).
        rect(innterPoint4, innterPoint5, innterPoint6, col.rgba.loop()).
        rect(innterPoint7, innterPoint8, innterPoint9, col.rgba.loop()).
        flush();
}