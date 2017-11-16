import * as fs from 'fs';
import generator from './generator';
import svgPopper from './svgPopper';
import pointLocation from './pointLocation';

export default function (username: string) {
    const gen = new generator(username);
    const svg = new svgPopper();

    fs.writeFileSync('test.html', "<svg viewBox='0 0 312.26 298.6' width=\"100px\"><Path d='M131.33,61.43c-16.27-9.73-25.83-23.22-45.89-12.69C73.38,55.07,63.85,73.42,61.17,86.39c-3.15,15.26.37,37.43,12.14,49.55,10.28,10.59,61.91,12.89,62.44,16.42,1.51,11.51-35.3,14.92-31.26,25.87-32.52,0-47,22.24-74.94-7.29C5,145-3.77,100.85,1.45,65.87,11.82-3.59,81.17-16.18,128.92,27.79c25.46,23.44,41.76,53.7,26.65,79.27C156.6,107,135.78,67.21,131.33,61.43Z' /><Path d='M304.41,207.52c36.38,46.53-64.43,40.39-84.25,35.59-5.91-1.43-52.66-27.92-29.95-35.72,0,0,15.62,17.78,21.85,19.74,9.35,2.94,26.79-1.68,35.74-6.44-4.61-2.43-.52-21.35-6.69-30.76-8.61-13.12-18.68-15.25-32.53-11.12-15.24,4.54-23.76,21.17-41.77,20.61-16.74-.52-34.21-29.35-18.1-29.08-.09-4.18,5.82-18.93,11.95-17.81,0,10-12.81,25.53,3.23,31.23,9.43,3.35,19-9.1,23.38-16.2,15.82-25.81,3.65-63.65,10.55-88.32,4.78-17.07,20.88-39.31,34.12-50.65,4.73-4,58.86-28.87,56.58-12.66-2.94-.79-7.74-2.92-10.72-1.41,16.5,19.17,37.49,17.85,18.46,49.54C288.9,76.32,255,113.14,239,116.12c1.39-15.66,37.95-64.6-6.12-42-20,10.26-25.43,28.35-27.38,47.94,0,.15-3.89,58.77-16.38,55-.51-.16,20.87-19.63,25.65-21.36,13.42-4.86,18.51-2.77,31.69,2.08C270.34,166.5,288.77,188.39,304.41,207.52ZM186.41,179C184.9,179,184.6,182.25,186.41,179Zm-4.16,4.4Z' /><Path d='M33.91,298c-.48-14.91-4.74-11.61,12.86-21.12,4.66-2.52,37.83-10.32,35.9-18.82-2.1-.2-10.16,1.49-9.88-3,0-9.83,72-33.3,51.14-39.9-22.16-7-45.31,38.87-68.06,21.77.64,0,16-15.08,19.54-17.28,9.95-6.14,20.91-8.88,31.85-12.36,31.53-10.05,67.75-8.63,31.23,28.1C114.23,259.75,70.15,303.17,33.91,298Z' /></svg>")
}