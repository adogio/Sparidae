import point from './point';

const EDGELENGTH: number = 480;
const EDGELENGTHTOTAL: number = EDGELENGTH * 4;

export const locationPointOne = function (key: number): point {
    if (key <= EDGELENGTHTOTAL) throw new Error("key size too small");
    let temp: number = key % EDGELENGTHTOTAL;
    let whichEdge: number = Math.floor(temp / EDGELENGTH);
    let lengthLeft: number = temp % EDGELENGTH;
    let resultPoint: point;
    console.log(whichEdge);
    switch (whichEdge) {
        case 0:
            resultPoint = { x: lengthLeft, y: 0 };
            break;
        case 1:
            resultPoint = { x: EDGELENGTH, y: lengthLeft };
            break;
        case 2:
            resultPoint = { x: EDGELENGTH - lengthLeft, y: EDGELENGTH }
            break;
        default:
            resultPoint = { x: 0, y: EDGELENGTH - lengthLeft };
    }

    return resultPoint;
}