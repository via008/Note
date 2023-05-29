function Obj(value) {
  this.value = value;
  this.next = null;
}

// Obj.prototype[Symbol.iterator] = function () {
//   let current = this;
//   function next() {
//     if (current) {
//       const value = current.value;
//       current = current.next;
//       return { done: false, value }
//     }
//     return { done: true }
//   }
//   return { next }
// }

const obj1 = new Obj(1);
const obj2 = new Obj(2);
const obj3 = new Obj(3);
const obj4 = new Obj(4);

obj1.next = obj2;
obj2.next = obj3;
obj3.next = obj4;

console.log(obj1);

// for(let i of obj1) {
//   console.log(i);
// }