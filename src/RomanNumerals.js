Number.prototype.toRomanNumeral =
function doPhase(n, rn, multiplier) {
    var u = "undefined";
    n = typeof n === u ? this.valueOf() : n;
    rn = typeof rn === u ? '' : rn;
    multiplier = typeof multiplier === u ? 3 : multiplier;
    
    if(multiplier == 3) {
        while (n >= 1000) {
            rn += 'M';
            n -= 1000;
        }
        multiplier--;
    } else {
        if(multiplier < 0) {
            multiplier = 0;
        }
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