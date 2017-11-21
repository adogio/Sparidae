import { expect } from 'chai';
import jsonPopper from '../src/jsonPopper';

describe('json popper construct test', () => {

    let textContent: jsonPopper;

    beforeEach(() => {
        textContent = new jsonPopper("test");
    });

    it('should return a empty compoenent json with flush', () => {
        expect(textContent.flush()).to.be.deep.equal({
            components: [],
            display: "test",
            aspect: false,
            border: true,
            fontSize: 32,
            height: 100,
            type: "svg",
            heightUnit: "px",
            widthUnit: "px",
            width: 100
        });
    });

    it('should return a corrent svg with rect in json styleing', () => {
        expect(textContent.rect({ x: 10, y: 15 }, { x: 25, y: 60 }, { x: 0, y: 69 }, "red").flush()).to.be.deep.equal({
            components: [{
                fill: "red",
                type: "polygon",
                points: [{ x: 10, y: 15 }, { x: 25, y: 60 }, { x: 0, y: 69 }]
            }],
            border: true,
            fontSize: 32,
            heightUnit: "px",
            widthUnit: "px",
            aspect: false,
            display: "test",
            height: 100,
            type: "svg",
            width: 100
        });
    });

});