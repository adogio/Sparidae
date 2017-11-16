import { expect } from 'chai';
import generator from '../src/generator';

describe('generator construct test', () => {

    let generatorR;

    beforeEach(() => {
        generatorR = new generator("test");
    })

    it('getMD5 shall return md5 result of test', () => {
        expect(generatorR.getMD5()).to.be.equal("098f6bcd4621d373cade4e832627b4f6");
    });

    it('getMedium shall return dec result of test', () => {
        expect(generatorR.getMedium(0, 7)).to.be.equal(10024636);
    });

});