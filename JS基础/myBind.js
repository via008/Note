/**
 * 实现 bind：
 * 1. 支持 this 绑定
 * 2. 支持参数柯里化（预设参数）
 * 3. 支持通过 new 调用（构造函数调用）
 * 4. 保留原函数原型链（原型继承）
 * 5. 设置返回函数的 .length（剩余未绑定参数的数量）
 * 6. 设置返回函数的 .name 属性
 */

Function.prototype.myBind = function(thisArg, ...args) {
    const fn = this;
    function boundFn(...restArgs) {
        const isNew = this instanceof boundFn;
        const context = isNew ? this : thisArg;

        return fn.apply(context, [...args, ...restArgs]);
    }

    const len = Math.max(0, fn.length - args.length);
    Object.defineProperty(boundFn, 'length', {
        value: len,
    });

    const name = fn.name;
    Object.defineProperty(boundFn, 'name', {
        value: name,
    });

    return boundFn;
}

this.m = 'M';
function greeting(a, b) {
    console.log(this.m, a, b);
}

const obj = {
    m: 'mn',
}

const anotherGreet = greeting.myBind(obj, 'p1')
greeting('q1', 'q2');
anotherGreet('p2');

const greet = new anotherGreet('p3');
console.log(greet);

