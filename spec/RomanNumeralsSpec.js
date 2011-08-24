describe("Jasmine Test Runner", function() {
  it("Runs", function() {
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
    expect(42).toEqual(42);
  });
});

describe("Roman Numerals", function() {
  it("number 1 returns RN I", function() {
        expect(toRN(1)).toEqual('I');
    });

    it("number 2 returns RN II", function() {
        expect(toRN(2)).toEqual('II');
    });

    it("number 3 returns RN III", function() {
        expect(toRN(3)).toEqual('III');
    });

    it("number 4 returns RN IV", function() {
        expect(toRN(4)).toEqual('IV');
    });

    it("number 5 returns RN V", function() {
        expect(toRN(5)).toEqual('V');
    });

    it("number 6 returns RN VI", function() {
        expect(toRN(6)).toEqual('VI');
    });

    it("number 9 returns RN IX", function() {
        expect(toRN(9)).toEqual('IX');
    });

    it("number 10 returns RN X", function() {
        expect(toRN(10)).toEqual('X');
    });

    it("number 12 returns RN XII", function() {
        expect(toRN(12)).toEqual('XII');
    });

    it("number 14 returns RN XIV", function() {
        expect(toRN(14)).toEqual('XIV');
    });

    it("number 16 returns RN XVI", function() {
        expect(toRN(16)).toEqual('XVI');
    });

    it("number 20 returns RN XX", function() {
        expect(toRN(20)).toEqual('XX');
    });

    it("number 40 returns RN XL", function() {
        expect(toRN(40)).toEqual('XL');
    });
});
