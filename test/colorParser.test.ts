import { expect } from 'chai';
import colorParser from '../src/colorParser';

describe('colorParser construct test', () => {

    it('a name shall return same result every time', () => {
        let result = index("test");
        expect(index("test")).to.be.equal(result);
    });

    it('different name shall return different result every time', () => {
        let result = index("test");
        expect(index("tests")).to.be.not.equal(result);
    });

});