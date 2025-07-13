/**
 * 继承方式：
 * 1. 原型链继承  Child.prototype = new Parent()
 * 2. 借用构造函数继承 Parent.call(this, name, ...)
 * 3. 组合继承 Parent.call(this, name, ...) -> Child.prototype = new Parent(); Child.prototype.constructor = Child;
 * 4. 原型式继承 Object.create(...)
 * 5. 寄生组合继承 Parent.call(this, name, ...) -> Child.prototype = Object.create(Parent.prototype); Child.prototype.contructor = Child;
 * 6. ES6 class 继承
 */


// 题目描述
// 在 JavaScript 中，实现一个复杂的原型链继承系统，模拟一个游戏角色养成系统。该系统包含以下角色和功能：

// 1. 基础角色类 Character
// 构造函数接收 name（角色名称）和 level（角色等级）两个参数。
// 包含一个 introduce 方法，用于输出角色的基本信息，格式为 我是{name}，等级为{level}。。
// 2. 战斗角色类 Warrior
// 继承自 Character 类。
// 构造函数额外接收 weapon（武器名称）参数。
// 重写 introduce 方法，输出信息格式为 我是{name}，等级为{level}，手持{weapon}战斗。。
// 新增 attack 方法，输出信息格式为 {name} 手持 {weapon} 发起了攻击！。
// 3. 魔法角色类 Mage
// 继承自 Character 类。
// 构造函数额外接收 spell（法术名称）参数。
// 重写 introduce 方法，输出信息格式为 我是{name}，等级为{level}，擅长施展{spell}魔法。。
// 新增 castSpell 方法，输出信息格式为 {name} 施展了 {spell} 魔法！。
// 4. 混合角色类 Hybrid
// 同时继承 Warrior 和 Mage 的特性。
// 构造函数接收 name、level、weapon 和 spell 四个参数。
// 调用 introduce 方法时，优先使用 Warrior 的 introduce 方法。
// 可以正常调用 attack 和 castSpell 方法。
// 要求
// 使用原型链和构造函数相结合的方式实现继承。
// 代码要清晰体现原型链的关系。
// 编写测试代码，创建不同类型的角色实例并调用相应方法，验证功能正确性。

// 实现 Character 类
function Character(name, level) {
    // 实现构造函数逻辑
    this.name = name;
    this.level = level;
}

// 实现 introduce 方法
Character.prototype.introduce = function() {
    // 实现方法逻辑
    console.log(`我是${this.name}，等级为${this.level}`);
};

// 实现 Warrior 类
function Warrior(name, level, weapon) {
    // 实现构造函数逻辑
    this.name = name;
    this.level = level;
    this.weapon = weapon;
}

Warrior.prototype = new Character();
Warrior.contructor = Character;

// Object.setPrototypeOf(Warrior, Character.prototype);

Warrior.prototype.introduce = function() {
    // 实现方法逻辑
    console.log(`我是${this.name}，等级为${this.level}，手持${this.weapon}战斗。`);
};

Warrior.prototype.attack = function() {
    // 实现方法逻辑
    console.log(`${this.name}手持${this.weapon}发起了攻击！`);
};

// 实现 Warrior 类的继承和方法
// ...

// 实现 Mage 类
function Mage(name, level, spell) {
// 实现构造函数逻辑
    this.name = name;
    this.level = level;
    this.spell = spell;
}

Mage.prototype = new Character();
Mage.prototype.contructor = Mage;


Mage.prototype.introduce = function() {
    // 实现方法逻辑
    console.log(`我是${this.name}，等级为${this.level}，擅长施展${this.spell}魔法。`);
};

Mage.prototype.castSpell = function() {
    // 实现方法逻辑
    console.log(`${this.name}施展了${this.weapon}魔法！`);
};


// 实现 Hybrid 类
function Hybrid(name, level, weapon, spell) {
    // 实现构造函数逻辑
    Warrior.call(this, name, level, weapon);
    Mage.call(this, name, level, spell);
}

// 混合继承 Warrior 的原型
Hybrid.prototype = Object.create(Warrior.prototype);
Hybrid.prototype.constructor = Hybrid;

// 添加 Mage 的方法到 Hybrid 的原型链上
Hybrid.prototype.castSpell = Mage.prototype.castSpell;

  
// 实现 Hybrid 类的继承和方法

// 测试代码
const character = new Character('普通角色', 5);
character.introduce();

const warrior = new Warrior('战士', 10, '大剑');
warrior.introduce();
warrior.attack();

const mage = new Mage('法师', 8, '火球术');
mage.introduce();
mage.castSpell();

const hybrid = new Hybrid('混合角色', 12, '法杖', '冰霜新星');
hybrid.introduce();
hybrid.attack();
hybrid.castSpell();