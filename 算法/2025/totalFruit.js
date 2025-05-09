/**
 * @param {number[]} fruits
 * @return {number}
 */
/* 
题意：求出长度最长的子数组
子数组满足的要求：只能出现两种不同的数字
*/
var totalFruit = function(fruits) {
    // 保存结果
    let max = 0;

    const map = new Map();
    let slow = 0;

    for(let fast = 0; fast < fruits.length; fast ++) {
        const fruit = fruits[fast];
        map.set(fruit, (map.get(fruit) || 0) + 1);

        while(map.size > 2) {
            const preFruit = fruits[slow];
            map.set(preFruit, map.get(preFruit) - 1);

            if (map.get(preFruit) === 0) {
                map.delete(preFruit);
            }

            slow ++;
        }

        max = Math.max(max, fast - slow + 1);
    }

    return max;
};

console.log(totalFruit([3,3,3,1,2,1,1,2,3,3,4]))
