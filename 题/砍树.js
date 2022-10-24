/**
 * 《砍树》
 * 将一课树结构转换为一个二维数组，按深度分组，输入是树结构，输出是二维数组
 *
 * eg1
 * input:
 *     1
 *    / \
 *   2   3
 *        \
 *         4
 *
 * output:
 * [
 * [1],
 * [2,3],
 * [4] 
 * ]
 * rawinput:
 * {
 * val: 1,
 * children: [
 *   {
 *     val: 2,
 *     children: [],
 *   },
 *   {
 *     val: 3,
 *     children: [
 *       {
 *         val: 4,
 *         children: [],
 *       },
 *     ],
 *   },
 * ],
 * };
 *
 *
 *
 * input:
 *        4
 *      / | \
 *     3  2  8
 *        |   \
 *        7    5
 *
 *
 *  * output:
 * [
 * [4],
 * [3,2,8],
 * [7,5]
 * ]
 * 
 * input:
 *             0
 *           /   \
 *         1      2
 *        / \      \
 *       2   4      4
 *      / |   \      /
 *     3  6   5     8
 *    /            \
 *   7              6
 * output:
 * [
 * [0],
 * [1, 2],
 * [2, 4, 4],
 * [3, 6, 5, 8],
 * [7, 6],
 * ]

 */

function solution(list) {
  // write code here...
  const queue = [list];
  const result = [];

  while(queue.length) {
    let size = queue.length;
    const tempArr = [];
    while(size > 0) {
      const item = queue.shift();
      tempArr.push(item.val);
      if (item.children) {
        queue.push(...item.children);
      }
      size --;
    }
    result.push(tempArr);
  }

  return result;
}

const testData = {
  "val": 0,
  "children": [
      {
          "val": 1,
          "children": [
              {
                  "val": 2,
                  "children": [
                      {
                          "val": 3,
                          "children": [
                              {
                                  "val": 7,
                                  "children": []
                              }
                          ]
                      },
                      {
                          "val": 6,
                          "children": []
                      }
                  ]
              },
              {
                  "val": 4,
                  "children": [
                      {
                          "val": 5,
                          "children": []
                      }
                  ]
              }
          ]
      },
      {
          "val": 2,
          "children": [
              {
                  "val": 4,
                  "children": [
                      {
                          "val": 8,
                          "children": [
                              {
                                  "val": 6,
                                  "children": []
                              }
                          ]
                      }
                  ]
              }
          ]
      }
  ]
}
console.log(solution(testData))
