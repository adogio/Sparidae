import { expect } from 'chai';
import svgPopper from '../src/svgPopper';

describe('svg popper construct test', () => {

    let textContent: svgPopper;

    beforeEach(() => {
        textContent = new svgPopper("test");
    });

    it('should return a empty svg with flush', () => {
        expect(textContent.flush()).to.be.equal("<div style=\"width:undefined;height:undefined;position:relative;border:1px black solid\"><svg viewBox=\"0 0 480 480\" width=\"auto\" height=\"auto\" ></svg><div style=\"position:absolute;bottom:5;right:5;font-weight:bold;font-size:30;user-select: none\">test</div></div>");
    });

    it('should return a corrent svg with rect', () => {
        expect(textContent.rect({ x: 10, y: 15 }, { x: 25, y: 60 }, { x: 0, y: 69 }, "red").flush()).to.be.equal("<div style=\"width:undefined;height:undefined;position:relative;border:1px black solid\"><svg viewBox=\"0 0 480 480\" width=\"auto\" height=\"auto\" ><polygon points=\"10,15 25,60 0,69\" fill=\"red\" /></svg><div style=\"position:absolute;bottom:5;right:5;font-weight:bold;font-size:30;user-select: none\">test</div></div>");
    });

});