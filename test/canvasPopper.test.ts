import { expect } from 'chai';
import canvasPopper from '../src/canvasPopper';

describe('canvas popper construct test', () => {

    let textContent: canvasPopper;

    beforeEach(() => {
        textContent = new canvasPopper("test");
    });

    it('should return a empty canvas with flush', () => {
        expect(textContent.flush()).to.be.equal("");
    });

    it('should return a corrent canvas with rect', () => {
        expect(textContent.rect({ x: 10, y: 15 }, { x: 25, y: 60 }, { x: 0, y: 69 }, "red").flush()).to.be.equal("");
    });

});