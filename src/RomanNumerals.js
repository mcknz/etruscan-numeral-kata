function r(d){var b='',m=1e3;function i(n,d,e){
y=[9,5,4,1],z=[['IX','V','IV','I'],['XC','L','XL','X'],['CM','D','CD','C']],c=0,p=Math.pow(10,e);
        e=e<0?0:e;
        while(n>=y[3]*p) {
            x=(y[c]*p);
            f=n>=x;
            d=f?d+z[e][c]:d;
            n=f?n-x:n;
            c=f?c:c+1;
        }
        return n==0?d:i(n,d,--e);
    }
    while(d>=m){b+='M';d-=m};
    return i(d,b,2)
}