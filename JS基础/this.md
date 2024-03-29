`this` 对象是当前执行上下文中的一个属性，它指向最后一次调用这个方法的对象。在 `ES6` 之前，`this` 的指向可以通过四种调用模式来判断：

- 函数调用模式，当一个函数不是一个对象的属性时，`this` 指向全局对象
- 方法调用模式，当一个函数当做一个对象的属性时，`this` 指向这个对象
- 构造器调用模式，如果一个函数用 `new` 调用时，函数执行前会新创建一个对象，`this` 指向这个新创建的对象
- `apply`, `call`, `bind` 调用模式，这三个方法可以显示指定调用函数的 `this` 指向

`ES6` 的箭头函数中的 `this` 指向始终指向全局对象。
