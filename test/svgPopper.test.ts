import { expect } from 'chai';
import svgPopper from '../src/svgPopper';

describe('svg popper construct test', () => {

    let textContent: svgPopper;

    beforeEach(() => {
        textContent = new svgPopper("test");
    });

    it('should return a empty svg with flush', () => {
        expect(textContent.flush()).to.be.equal("<div style=\"width:100px;height:100px;overflow:hidden;position:relative;border:0px;\"><svg viewBox=\"0 0 480 480\" width=\"100px\" height=\"100px\" preserveAspectRatio=\"none\" ></svg><div style=\"position:absolute;bottom:5px;right:5px;font-weight:bold;font-size:32px;user-select: none\">test</div></div>");
    });

    it('should return a corrent svg with rect', () => {
        expect(textContent.rect({ x: 10, y: 15 }, { x: 25, y: 60 }, { x: 0, y: 69 }, "red").flush()).to.be.equal("<div style=\"width:100px;height:100px;overflow:hidden;position:relative;border:0px;\"><svg viewBox=\"0 0 480 480\" width=\"100px\" height=\"100px\" preserveAspectRatio=\"none\" ><polygon points=\"10,15 25,60 0,69\" fill=\"red\" /></svg><div style=\"position:absolute;bottom:5px;right:5px;font-weight:bold;font-size:32px;user-select: none\">test</div></div>");
    });

    it('should return a corrent svg with unit', () => {
        textContent = new svgPopper("test", { unit: "flex" });
        expect(textContent.rect({ x: 10, y: 15 }, { x: 25, y: 60 }, { x: 0, y: 69 }, "red").flush()).to.be.equal("<div style=\"width:10vw;height:10vh;overflow:hidden;position:relative;border:0vw;\"><svg viewBox=\"0 0 480 480\" width=\"10vw\" height=\"10vh\" preserveAspectRatio=\"none\" ><polygon points=\"10,15 25,60 0,69\" fill=\"red\" /></svg><div style=\"position:absolute;bottom:0.5vh;right:0.5vw;font-weight:bold;font-size:3.2vw;user-select: none\">test</div></div>");
    });

});