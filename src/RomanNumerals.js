Number.prototype.toRomanNumeral = r;
function r () {
    var rn, symbols, numbers, subTotal, count;
    rn = '';
    symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC','L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    subTotal = this;
    count = 0;

    while (subTotal > 0) {
        if (subTotal >= numbers[count]) {
            rn += symbols[count];
            subTotal -= numbers[count];
        } else {
            count++;
        }
    }

    return rn;
}