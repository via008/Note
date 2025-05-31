// 给定一个大小为 n 的整数数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。
function majorEle(nums) {
    let cand1 = nums[0], count1 = 0;
    let cand2 = nums[0], count2 = 0;

    for(let num of nums) {
        if (cand1 === num) {
            count1 ++;
            continue;
        }

        if (cand2 === num) {
            count2 ++;
            continue;
        }

        if (count1 === 0) {
            cand1 = num;
            count1 ++;
            continue;
        }

        if (count2 === 0) {
            cand2 = num;
            count2 ++;
            continue;
        }
    }

    count1 = 0;
    count2 = 0;
    for(let num of nums) {
        if (num === cand1) {
            count1 ++;
        } else if (num === cand2) {
            count2 ++;
        }
    }

    const res = [];
    const countTarget = Math.floor(nums.length / 3);
    if (count1 > countTarget) {
        res.push(cand1);
    }
    if (count2 > countTarget) {
        res.push(cand2);
    }

    return res;
}