function toRN(n) {
    var rn, symbols, numbers, subTotal, count;
    rn = '';
    symbols = ['XL', 'X', 'IX', 'V', 'IV', 'I'];
    numbers = [40, 10, 9, 5, 4, 1];
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