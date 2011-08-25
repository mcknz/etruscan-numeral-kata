Number.prototype.toRomanNumeral = r;
function r() {
    var subTotal = this.valueOf();
    while (subTotal >= 1000) {
        rn += 'M';
        subTotal -= 1000;
    }
    return doPhase(subTotal, '', count);
}

function doPhase(n, rn, multiplier) {
    var numbers = [9, 5, 4, 1];
    var symbols = [
        ['IX', 'V', 'IV', 'I'],
        ['XC','L', 'XL', 'X'],
        ['CM', 'D', 'CD', 'C']
    ];
    var count = 0;
    var p = Math.pow(10,multiplier);
    var nMulti = (numbers[count] * p);
    while (n >= nMulti) {
        nMulti = (numbers[count] * p);
        if (n >= nMulti) {
            rn += symbols[multiplier][count];
            n -= nMulti;
        } else {
            count++;
        }
    }
    return rn;
}