import { expect } from 'chai';
import nameParser from '../src/nameParser'

describe('nameparser test', () => {

    let testContent;

    it('should return first while use single digit parser', () => {
        testContent = new nameParser("Sjo")
        expect(testContent.getOneDigitResult()).to.be.equal("S");
        testContent = new nameParser("sjo")
        expect(testContent.getOneDigitResult()).to.be.equal("S");
    });

    it('should return first and last while use double digit parser', () => {
        testContent = new nameParser("Sjo")
        expect(testContent.getTwoDigitResult()).to.be.equal("So");
        testContent = new nameParser("sjo")
        expect(testContent.getTwoDigitResult()).to.be.equal("So");
    });

    it('should return first of each name while use double digit parser to parse name', () => {
        testContent = new nameParser("Joshua Liu")
        expect(testContent.getTwoDigitResult()).to.be.equal("JL");
        testContent = new nameParser("T Bag")
        expect(testContent.getTwoDigitResult()).to.be.equal("TB");
        testContent = new nameParser("T bag")
        expect(testContent.getTwoDigitResult()).to.be.equal("TB");
        testContent = new nameParser("")
        expect(testContent.getTwoDigitResult()).to.be.equal("**");
    });

    it('should return first of fisrt and last name while use double digit parser to parse mutiple word', () => {
        testContent = new nameParser("Joshua Liu T")
        expect(testContent.getTwoDigitResult()).to.be.equal("JT");
        testContent = new nameParser("T Bag C")
        expect(testContent.getTwoDigitResult()).to.be.equal("TC");
        testContent = new nameParser("T bag cc")
        expect(testContent.getTwoDigitResult()).to.be.equal("TC");
        testContent = new nameParser("s")
        expect(testContent.getTwoDigitResult()).to.be.equal("Ss");
    });

    it('three digits testing', () => {
        testContent = new nameParser("Joshua Liu T")
        expect(testContent.getThreeDigitResult()).to.be.equal("Jl T");
        testContent = new nameParser("sdd")
        expect(testContent.getThreeDigitResult()).to.be.equal("Sd D");
        testContent = new nameParser("T bag cc")
        expect(testContent.getThreeDigitResult()).to.be.equal("Tb C");
        testContent = new nameParser("S DJS SD s")
        expect(testContent.getThreeDigitResult()).to.be.equal("Sd S");
        testContent = new nameParser("a")
        expect(testContent.getThreeDigitResult()).to.be.equal("Aa *");
        testContent = new nameParser("as")
        expect(testContent.getThreeDigitResult()).to.be.equal("As *");
        testContent = new nameParser("")
        expect(testContent.getThreeDigitResult()).to.be.equal("** *");
    });

});