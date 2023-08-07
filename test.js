/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
  let result = 0;
  let index = 0;
  for(let num of nums) {
    if (num % 3 === 0 && num % 2 === 0) {
      result += num;
      index ++;
    }
  }
  console.log(result / index)
  return index === 0 ? 0 : Math.floor(result / index);
};
averageValue([43,9,75,76,25,96,46,85,19,29,88,2,5,24,60,26,76,24,96,82,97,97,72,35,21,77,82,30,94,55,76,94,51])


/**
 * @param {any} object
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    if (obj === undefined || obj === null || classFunction === undefined || classFunction === null) {
      return false;
    }
    let proto = Object.getPrototypeOf(obj);
    while(proto) {
      if (proto === classFunction.prototype) {
        return true;
      }
      proto = Object.getPrototypeOf(proto);
    }
    return false;
};


const test1 = () => {
  let i = 0;
  while(i < 100000) {
    console.log('====', i);

    if (i === 15) {
      break;
    }
    i ++;
  }
  console.log('iii', i);
}
test1();





var TimeLimitedCache = function() {
  this.cache = {};
  this.counter = 0;
};

/** 
* @param {number} key
* @param {number} value
* @param {number} time until expiration in ms
* @return {boolean} if un-expired key already existed
*/
TimeLimitedCache.prototype.set = function(key, value, duration) {
  if (this.cache[key]) {
    this.cache[key].value = value;
    clearTimeout(this.cache[key].timer);
    this.cache[key].timer = setTimeout(() => {
        this.counter --;
        this.cache[key].expire = true;
    }, duration);
    return true;
  }
  this.counter ++;
  this.cache[key] = {};
  this.cache[key].value = value;
  this.cache[key].timer = setTimeout(() => {
      this.counter --;
      this.cache[key].expire = true;
  }, duration);
  return false;
};

/** 
* @param {number} key
* @return {number} value associated with key
*/
TimeLimitedCache.prototype.get = function(key) {
  return this.cache[key] && !this.cache[key].expire ? this.cache[key].value : -1;
};

/** 
* @return {number} count of non-expired keys
*/
TimeLimitedCache.prototype.count = function() {
  return this.counter;
};

/**
* Your TimeLimitedCache object will be instantiated and called as such:
* var obj = new TimeLimitedCache()
* obj.set(1, 42, 1000); // false
* obj.get(1) // 42
* obj.count() // 1
*/



function memoize(fn) {
  const cache = {};
  return function(...args) {
      if (cache[String(args)]) {
        return cache[String(args)];
      }
      return cache[String(args)] = fn(...args);
  }
}


Array.prototype.snail = function(rowsCount, colsCount) {
  if (this.length !== rowsCount * colsCount) {
      return;
  }
  const res = Array.from({length: rowsCount}).map(() => Array.from({length: colsCount}).fill(0));
  let rowsTemp = 0;
  let colsTemp = 0;
  for(let i = 0; i < this.length; i ++) {
    const item = this[i];

    if (colsTemp % 2 === 0 && rowsTemp < rowsCount) {
      res[rowsTemp ++][colsTemp] = item;
    }
    if (colsTemp % 2 === 1 && rowsTemp > 0) {
      res[--rowsTemp][colsTemp] = item;
    }
    if (rowsTemp === rowsCount || rowsTemp === 0) {
      colsTemp ++;
      continue;
    }

  }
  return res;
}

const arr = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
arr.snail(5, 4)



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
 var delNodes = function(root, to_delete) {
  const res = [];
  const innerDel = (root) => {
    if (to_delete.includes(root.val)) {
      innerDel(root.left);
      innerDel(root.right);
    }
  }
  innerDel(root);
};



/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
  // if (n <= 0) {
  //   return arr;
  // }
  // const res = [];
  // for(let item of arr) {
  //   res.push(...(Array.isArray(item) ? flat(item, n - 1) : [item]))
  // }
  // return res;
  while (n > 0 && arr.some(Array.isArray)) {
    arr = [].concat(...arr);
    n--;
  }
  return arr;
};

const arr1 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11, [0, 0, 0]], 12], [13, 14, 15]];
console.log(flat(arr1, 2))


function reverseStr(s) {
  return s.split(' ').reverse().filter(item => item !== '').join(' ');
}
console.log(reverseStr('  Scalable Vector Graphics'))
