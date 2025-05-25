Function.prototype.myApply = function(thisArg, argsArr) {
    thisArg = thisArg ?? globalThis;

    const fn = this;
    const fnSymbol = Symbol();

    thisArg[fnSymbol] = fn;
    const res = thisArg[fnSymbol](...(argsArr || []));

    delete thisArg[fnSymbol];

    return res;
}