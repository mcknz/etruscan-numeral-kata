Number.prototype.toRomanNumeral = o
function o() {
    var a=this.valueOf(),b='',c=2,m=1e3;
    function i(n, r, e){
        var y=[9, 5, 4, 1],z=[['IX','V','IV','I'],['XC','L','XL','X'],['CM','D','CD','C']];
        e < 0 ? e = 0 : e = e;
        
        var count = 0;
        var p = Math.pow(10, e);
        var nMulti;
        while (n >= y[3] * p) {
            nMulti = (y[count] * p);
            if (n >= nMulti) {
                r += z[e][count];
                n -= nMulti;
            } else {
                count++;
            }
        }
        return n == 0 ? r : i(n, r, --e);
    }
    while (a >= m) { b += 'M'; a -= m; }
    return i(a,b,c);
}