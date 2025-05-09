/**
 * 功能：
 * 1. 将对象序列化成字符串
 * 2. 如果值是 undefined、函数、Symbol 则忽略
 * 3. 对于循环引用会报错
 * 4. 如果传入的值是 undefined，返回 undefined
 */

/**
 * 实现一个简化版的 JSON.stringify
 * @param {any} value - 要转换为 JSON 字符串的值
 * @param {Function|Array|null} replacer - 替换函数或属性数组
 * @param {number|string|null} space - 缩进空格数或字符串
 * @returns {string} - JSON 字符串
 */
function myStringify(value, replacer, space) {
    // 处理 space 参数
    let indent = '';
    if (typeof space === 'number') {
      indent = ' '.repeat(Math.min(10, space));
    } else if (typeof space === 'string') {
      indent = space.slice(0, 10);
    }
  
    // 处理 replacer 参数
    let selectedProperties;
    if (Array.isArray(replacer)) {
      selectedProperties = replacer;
    }
  
    // 用于检测循环引用
    const seen = new WeakSet();
  
    // 主要序列化函数
    function serialize(key, value, depth = 0) {
      // 如果有 replacer 函数，应用它
      if (typeof replacer === 'function') {
        value = replacer(key, value);
      }
  
      // 处理 null
      if (value === null) {
        return 'null';
      }
  
      // 处理基本类型
      if (typeof value === 'string') {
        return `"${escapeString(value)}"`;
      }
  
      if (typeof value === 'number') {
        // 处理 NaN 和 Infinity
        return isFinite(value) ? String(value) : 'null';
      }
  
      if (typeof value === 'boolean') {
        return String(value);
      }
  
      // 处理 undefined, 函数和 Symbol
      if (typeof value === 'undefined' || typeof value === 'function' || typeof value === 'symbol') {
        return undefined;
      }
  
      // 处理日期对象
      if (value instanceof Date) {
        return `"${value.toISOString()}"`;
      }
  
      // 处理数组
      if (Array.isArray(value)) {
        // 检测循环引用
        if (seen.has(value)) {
          throw new TypeError('Converting circular structure to JSON');
        }
        seen.add(value);
  
        const indentation = indent ? '\n' + indent.repeat(depth + 1) : '';
        const closingIndentation = indent ? '\n' + indent.repeat(depth) : '';
  
        const result = value.map((item, index) => {
          const serialized = serialize(String(index), item, depth + 1);
          // 数组中的 undefined, 函数和 Symbol 转为 null
          return serialized === undefined ? 'null' : serialized;
        }).join(indent ? ',\n' + indent.repeat(depth + 1) : ',');
  
        return `[${indentation}${result}${closingIndentation}]`;
      }
  
      // 处理对象
      if (typeof value === 'object') {
        // 检测循环引用
        if (seen.has(value)) {
          throw new TypeError('Converting circular structure to JSON');
        }
        seen.add(value);
  
        const indentation = indent ? '\n' + indent.repeat(depth + 1) : '';
        const closingIndentation = indent ? '\n' + indent.repeat(depth) : '';
  
        // 获取对象的所有可枚举属性
        let keys = Object.keys(value);
        
        // 如果有 selectedProperties，只保留这些属性
        if (selectedProperties) {
          keys = keys.filter(key => selectedProperties.includes(key));
        }
  
        const result = keys.map(objKey => {
          const propertyValue = value[objKey];
          const serialized = serialize(objKey, propertyValue, depth + 1);
          
          // 跳过 undefined, 函数和 Symbol
          if (serialized === undefined) {
            return undefined;
          }
          
          return `"${escapeString(objKey)}"${indent ? ': ' : ':'}${serialized}`;
        }).filter(item => item !== undefined).join(indent ? ',\n' + indent.repeat(depth + 1) : ',');
  
        return `{${indentation}${result}${closingIndentation}}`;
      }
  
      return undefined;
    }
  
    // 转义字符串中的特殊字符
    function escapeString(str) {
      return str.replace(/[\\"\u0000-\u001F\u2028\u2029]/g, match => {
        const escapeMap = {
          '"': '\\"',
          '\\': '\\\\',
          '\b': '\\b',
          '\f': '\\f',
          '\n': '\\n',
          '\r': '\\r',
          '\t': '\\t'
        };
  
        if (escapeMap[match]) {
          return escapeMap[match];
        }
  
        // 处理其他控制字符
        return '\\u' + ('0000' + match.charCodeAt(0).toString(16)).slice(-4);
      });
    }
  
    // 开始序列化
    try {
      const result = serialize('', value);
      // 如果结果是 undefined，返回 undefined（不是字符串 "undefined"）
      return result === undefined ? undefined : result;
    } catch (error) {
      throw error;
    }
  }
  
  // 测试示例
  const testObj = {
    name: "张三",
    age: 30,
    isStudent: false,
    hobbies: ["读书", "游泳", null, undefined],
    address: {
      city: "北京",
      zipCode: 100000
    },
    sayHello: function() { console.log("Hello"); },
    birthday: new Date("1990-01-01"),
    symbol: Symbol("test"),
    undefinedProp: undefined,
    nullProp: null,
    nanProp: NaN,
    infinityProp: Infinity
  };
  
  console.log(myStringify(testObj));
  console.log(myStringify(testObj, null, 2));
  console.log(myStringify(testObj, ["name", "age"]));
  console.log(myStringify(testObj, (key, value) => {
    if (key === "age") return value + 1;
    return value;
  }));