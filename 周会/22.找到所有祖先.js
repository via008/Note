/**
 * 《找到所有祖先》
 *
 * eg1
 * input: test，1, 'name'
 * output: [ 'a' ]
 *
 * input: test, 10, 'name',
 * output: [ 'a', 'b', 'e', 'j' ]
 *
 * input: test, 7, 'id'
 * output: [1, 4, 7]

 */
 const test = {
  id: 1,
  name: 'a',
  children: [
    {
      id: 2,
      name: 'b',
      children: [
        {
          id: 5,
          name: 'e',
          children: [
            { id: 8, name: 'h' },
            { id: 9, name: 'i' },
            { id: 10, name: 'j', children: [{ id: 11, name: 'k', children: [{ id: 12, name: 'l' }] }] },
          ],
        },
      ],
    },
    { id: 3, name: 'c' },
    { id: 4, name: 'd', children: [{ id: 6, name: 'f'},{ id: 7, name: 'g' }] },
  ],
};

function solution(tree, nodeId, prop) {
  function getParent(list, id, prop) {
    for (let i in list) {
      if (list[i].id === id) {
        return [list[i][prop]];
      }
      if (list[i].children) {
        let node = getParent(list[i].children, id, prop);
        if (node) {
          return [list[i][prop]].concat(node);
        }
      }
    }
  }
  return getParent([tree], nodeId, prop);
}

console.log(solution(test, 7 , 'id'))
