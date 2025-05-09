// 冒泡排序
function bubbleSort(arr) {
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
function selectionSort(arr) {
    for(let i = 0; i < arr.length; i ++) {
        const minIndex = i;
        for(let j = i + 1; j < arr.length; j ++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
}

// 插入排序
function insertionSort(arr) {
    for(let i = 1; i < arr.length; i ++) {
        const cur = arr[i];
        let j = i - 1;

        while(j >= 0 && cur > arr[j]) {
            arr[j + 1] = arr[j];
        }

        arr[j + 1] = cur;
    }

    return arr;
}
console.log(bubbleSort([8,1,2,5,6,7,0]))

// 归并排序
function mergeSort(arr) {
    const len = arr.length;
    if (len <= 1) {
        return arr;
    }

    const mid = Math.floor(len / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = [];
    let i = 0,
        j = 0;
    while(i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i ++;
        } else {
            result.push(right[j]);
            j ++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

// 快速排序
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex];
    const left = [];
    const right = [];

    for(let i = 0; i < arr.length; i ++) {
        if (i === pivotIndex) {
            continue;
        }

        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// 快速排序（原地版）
function quickSortInPlace(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const pivotIndex = findPosition(arr, left, right);
        quickSortInPlace(arr, left, pivotIndex - 1);
        quickSortInPlace(arr, pivotIndex + 1, right);
    }
    return arr;
}
function findPosition(arr, left, right) {
    // 最右边的元素为基准值
    const pivot = arr[right];
    let i = left;
    for(let j = left; j < right; j ++) {
        if (arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i ++;
        }
    }
    [arr[i], arr[right]] = [arr[right], arr[i]];
    return i;
}