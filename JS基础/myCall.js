Function.prototype.myCall = function(thisArg, ...args) {
    thisArg = thisArg ?? globalThis;

    const fn = this;
    const fnSymbol = Symbol();

    thisArg[fnSymbol] = fn;
    const res = thisArg[fnSymbol](...(args || []));

    delete thisArg[fnSymbol];
    
    return res;
}