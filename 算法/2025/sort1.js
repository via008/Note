const arr = [4,2,6,6,7,1,2,34]

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

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i ++) {
        
    }
}

console.log(bubbleSort(arr));

