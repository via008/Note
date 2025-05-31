const testArr = [9,5,1,0,8,7,2,1,3,4,5,6,7,8,9,2,3,5,3,2]
// 冒泡
function bubble(arr) {
    for(let i = arr.length - 1; i >= 0; i --) {
        for(let j = 0; j < i; j ++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// 选择排序
function selection(arr) {
    for(let i = 0; i < arr.length - 1; i ++) {
        let minIndex = i;
        for(let j = i + 1; j < arr.length; j ++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (i !== minIndex) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}

// 插入排序
function insertion(arr) {
    if (arr.length === 1) {
        return arr;
    }

    for(let i = 1; i < arr.length; i ++) {
        let j = i - 1;
        const cur = arr[i];

        while(j >= 0 && arr[j] > cur) {
            arr[j + 1] = arr[j];
            j --;
        }
        arr[j + 1] = cur;
    }

    return arr;
}

// 快速排序（找基准值）- 额外空间
function quick(arr) {
    if (arr.length === 0 || arr.length === 1) {
        return arr;
    }

    const leftArr = [];
    const rightArr = [];

    const povit = arr[0];
    for(let i = 1; i < arr.length; i ++) {
        if (arr[i] > povit) {
            rightArr.push(arr[i]);
        } else {
            leftArr.push(arr[i]);
        }
    }

    return [...quick(leftArr), povit, ...quick(rightArr)];
}

// 快速排序 - 原地
function quickInPlace(arr) {
    
}

console.log(quick(testArr));