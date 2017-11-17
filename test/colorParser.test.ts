import { expect } from 'chai';
import colorParser from '../src/colorParser';
import chaetodon, { WEATHERS } from 'chaetodon';

describe('colorParser construct test', () => {

    let textContent: colorParser;

    beforeEach(() => {
        textContent = new colorParser(chaetodon(WEATHERS.NUM(10)));
    })

    it('each loop with same color shall return same result every time', () => {
        const test = new colorParser(chaetodon(WEATHERS.NUM(10)));
        expect(test.rgba.loop()).to.be.equal(textContent.rgba.loop());
        expect(test.rgba.loop()).to.be.equal(textContent.rgba.loop());
        expect(test.rgba.loop()).to.be.equal(textContent.rgba.loop());
        expect(test.rgba.loop()).to.be.equal(textContent.rgba.loop());
        expect(test.rgba.loop()).to.be.equal(textContent.rgba.loop());
        expect(test.rgba.loop()).to.be.equal(textContent.rgba.loop());
    });

});