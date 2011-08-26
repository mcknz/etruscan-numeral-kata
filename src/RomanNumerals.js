Number.prototype.toRomanNumeral = o
function o() {
    var a=this.valueOf(),b='',c=2,m=1e3;
    function i(n, r, e){
        var y=[9, 5, 4, 1],z=[['IX','V','IV','I'],['XC','L','XL','X'],['CM','D','CD','C']],c=0,p=Math.pow(10,e),x;
        e < 0 ? e = 0 : e = e;
        while (n >= y[3] * p) {
            x = (y[c] * p);
            if (n >= x) {
                r += z[e][c];
                n -= x;
            } else {
                c++;
            }
        }
        return n == 0 ? r : i(n, r, --e);
    }
    while (a >= m) { b += 'M'; a -= m; }
    return i(a,b,c);
}