function toRN(n) {
    var rn, symbols, numbers, subTotal, count;
    rn = '';
    symbols = ['D', 'CD', 'C', 'XC','L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    numbers = [500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    subTotal = n;
    count = 0;

    while (0 < subTotal) {
        if (subTotal >= numbers[count]) {
            rn += symbols[count];
            subTotal -= numbers[count];
        } else {
            count++;
        }
    }

    return rn;
}