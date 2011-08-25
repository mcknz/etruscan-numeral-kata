Number.prototype.toRomanNumeral = o
function o() {
    function i(n, r, e){
        if(e == 3) {
            while (n >= 1000) {
                r += 'M';
                n -= 1000;
            }
            e--;
        } else {
            if(e < 0) {
                e = 0;
            }
        }

        var numbers = [9, 5, 4, 1];
        var symbols = [
            ['IX', 'V', 'IV', 'I'],
            ['XC','L', 'XL', 'X'],
            ['CM', 'D', 'CD', 'C']
        ];
        var count = 0;
        var p = Math.pow(10, e);
        var nMulti;
        while (n >= numbers[3] * p) {
            nMulti = (numbers[count] * p);
            if (n >= nMulti) {
                r += symbols[e][count];
                n -= nMulti;
            } else {
                count++;
            }
        }
        return n == 0 ? r : i(n, r, --e);
    }
    return i(this.valueOf(),'',3);
}