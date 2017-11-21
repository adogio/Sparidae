import generator from './generator';
import svgPopper from './svgPopper';
import jsonPopper from './jsonPopper';
import canvasPopper from './canvasPopper';
import nameParser from './nameParser';
import location from './pointLocation';
import colorParser from './colorParser';
import point from './point.interface';
import popper from './popper.interface';
import chaetodon, { WEATHERS } from 'chaetodon';

interface UserOption {
    long?: boolean;
    force?: boolean;
    empty?: boolean;
    popper?: string;
    raw?: boolean;
    border?: boolean;
    width?: number;
    height?: number;
    size?: number;
    aspect?: boolean;
}

function generateIcon(username: string, userOption?: UserOption) {
    const options: UserOption = userOption || {};
    const gen: generator = new generator(username);
    const display: string = getNameParseResult(username, options);
    let popper: popper;
    if (options.popper === 'json') {
        popper = new jsonPopper(display);
    } else if (options.popper === 'canvas') {
        popper = new canvasPopper(display);
    } else {
        popper = new svgPopper(display, options.border || false, options.size);
    }
    const loc: location = new location();
    const col: colorParser = new colorParser(chaetodon(WEATHERS.NUM(gen.getMedium(27, 30))));

    const point1: point = loc.getPoint(gen.getMedium(0, 6));
    const point2: point = loc.getPoint(gen.getMedium(6, 12));
    const point3: point = loc.getPoint(gen.getMedium(12, 18));

    const point4: point = loc.getPoint(gen.getMedium(18, 24));
    const point5: point = loc.getPoint(gen.getMedium(21, 27));
    const point6: point = loc.getPoint(gen.getMedium(24, 30));

    const point7: point = loc.getPoint(gen.getMedium(5, 12));
    const point8: point = loc.getPoint(gen.getMedium(15, 21));
    const point9: point = loc.getPoint(gen.getMedium(23, 28));

    const innterPoint1: point = loc.getMediumPoint(point1, point4, gen.getMedium(18, 21));
    const innterPoint2: point = loc.getMediumPoint(point2, point5, gen.getMedium(21, 24));
    const innterPoint3: point = loc.getMediumPoint(point3, point6, gen.getMedium(24, 27));

    const innterPoint4: point = loc.getMediumPoint(point4, point7, gen.getMedium(18, 21));
    const innterPoint5: point = loc.getMediumPoint(point5, point8, gen.getMedium(21, 24));
    const innterPoint6: point = loc.getMediumPoint(point6, point9, gen.getMedium(24, 27));

    const innterPoint7: point = loc.getMediumPoint(point7, point1, gen.getMedium(18, 21));
    const innterPoint8: point = loc.getMediumPoint(point8, point2, gen.getMedium(21, 24));
    const innterPoint9: point = loc.getMediumPoint(point9, point3, gen.getMedium(24, 27));

    popper.
        setSize(options.width || 100, options.height || 100).
        setAspect(options.aspect || false).
        reset().
        rect(point1, point2, point3, col.rgba.loop()).
        rect(point4, point5, point6, col.rgba.loop()).
        rect(point7, point8, point9, col.rgba.loop()).
        rect(innterPoint1, innterPoint2, innterPoint3, col.rgba.loop()).
        rect(innterPoint4, innterPoint5, innterPoint6, col.rgba.loop()).
        rect(innterPoint7, innterPoint8, innterPoint9, col.rgba.loop());

    return options.raw ? popper.flush() : popper.flushString();

}

function checkOption(options: UserOption) {
    if (options.long && options.force && options.empty) throw new Error("can only set one of name parseing option");
}

function getNameParseResult(username: string, options: UserOption) {
    checkOption(options);
    const nam: nameParser = new nameParser(username);
    if (options.force) return username;
    if (options.empty) return "";
    if (options.long) return nam.getThreeDigitResult();
    return nam.getTwoDigitResult();
}

export default generateIcon;