import { expect } from 'chai';
import index from '../src/index';

describe('index construct test', () => {

    it('a name shall return same result every time', () => {
        let result: string = index("test");
        expect(index("test")).to.be.equal(result);
    });

    it('different name shall return different result every time', () => {
        let result: string = index("test");
        expect(index("tests")).to.be.not.equal(result);
    });

    it('differernet popper should return correct result', () => {
        let result: string = index("test", { popper: 'json', raw: false });
        console.log(JSON.parse(result));
        expect(result).to.be.equal("{\"width\":100,\"widthUnit\":\"px\",\"border\":true,\"height\":100,\"heightUnit\":\"px\",\"type\":\"svg\",\"display\":\"\",\"fontSize\":32,\"aspect\":false,\"components\":[{\"type\":\"polygon\",\"fill\":\"rgba(42, 77, 127, 0.3)\",\"points\":[{\"x\":480,\"y\":139},{\"x\":127,\"y\":480},{\"x\":480,\"y\":138}]},{\"type\":\"polygon\",\"fill\":\"rgba(178, 201, 191, 0.3)\",\"points\":[{\"x\":131,\"y\":0},{\"x\":190,\"y\":480},{\"x\":480,\"y\":212}]},{\"type\":\"polygon\",\"fill\":\"rgba(149, 105, 116, 0.3)\",\"points\":[{\"x\":289,\"y\":0},{\"x\":124,\"y\":480},{\"x\":480,\"y\":455}]},{\"type\":\"polygon\",\"fill\":\"rgba(246, 172, 173, 0.3)\",\"points\":[{\"x\":355,\"y\":119},{\"x\":215,\"y\":537},{\"x\":497,\"y\":192}]},{\"type\":\"polygon\",\"fill\":\"rgba(245, 213, 217, 0.3)\",\"points\":[{\"x\":260,\"y\":50},{\"x\":214,\"y\":537},{\"x\":497,\"y\":350}]},{\"type\":\"polygon\",\"fill\":\"rgba(42, 77, 127, 0.3)\",\"points\":[{\"x\":434,\"y\":119},{\"x\":182,\"y\":537},{\"x\":497,\"y\":313}]}]}");
    });

});