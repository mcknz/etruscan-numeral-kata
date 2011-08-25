Number.prototype.toRomanNumeral = r;
function r() {
    var rn = '';
    var subTotal = this.valueOf();
    while (subTotal >= 1000) {
        rn += 'M';
        subTotal -= 1000;
    }
    return doPhase(subTotal, rn, 2);
}

function doPhase(n, rn, multiplier) {
    if (multiplier < 0) {
        multiplier = 0;
    }
    var numbers = [9, 5, 4, 1];
    var symbols = [
        ['IX', 'V', 'IV', 'I'],
        ['XC','L', 'XL', 'X'],
        ['CM', 'D', 'CD', 'C']
    ];
    var count = 0;
    var p = Math.pow(10, multiplier);
    var nMulti;
    while (n >= numbers[3] * p) {
        nMulti = (numbers[count] * p);
        if (n >= nMulti) {
            rn += symbols[multiplier][count];
            n -= nMulti;
        } else {
            count++;
        }
    }
    return n == 0 ? rn : doPhase(n, rn, --multiplier);
}