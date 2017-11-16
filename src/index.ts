import * as fs from 'fs';
import generator from './generator';
import svgPopper from './svgPopper';
import { locationPointOne } from './pointLocation';

export default function (username: string) {
    const gen = new generator(username);
    const svg = new svgPopper();
    const point1 = locationPointOne(12200);
    const point2 = locationPointOne(71232);
    const point3 = locationPointOne(5241);
    fs.writeFileSync('test.html', svg.setSize(100, 100).rect(point1, point2, point3, "red").flush());
}