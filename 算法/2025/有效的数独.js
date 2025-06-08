/**
 * 请你判断一个 9 x 9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。
 * 1. 数字 1-9 在每一行只能出现一次。
 * 2. 数字 1-9 在每一列只能出现一次。
 * 3. 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
 * 注意：
 * 一个有效的数独（部分已被填充）不一定是可解的。
 * 只需要根据以上规则，验证已经填入的数字是否有效即可。
 * 空白格用 '.' 表示。
 * 链接：https://leetcode.cn/problems/valid-sudoku/description/?envType=problem-list-v2&envId=array
 */

const getTowArr = (row, col) => {
    return new Array(row).fill(0).map(() => new Array(col).fill(0));
}

function isValidSudoku(board) {
    const row = getTowArr(9, 10);
    const col = getTowArr(9, 10);
    const box = getTowArr(9, 10);

    for(let i = 0; i < 9; i ++) {
        for(let j = 0; j < 9; j ++) {
            const cur = board[i][j];
            if (cur === '.') {
                continue;
            }

            const curNum = Number(cur);
            if (row[i][curNum]) {
                return false;
            }
            if (col[j][curNum]) {
                return false;
            }
            if (box[Math.floor(j / 3) + Math.floor(i / 3) * 3][curNum]) {
                return false;
            }

            row[i][curNum] = 1;
            col[j][curNum] = 1;
            box[Math.floor(j / 3) + Math.floor(i / 3) * 3][curNum] = 1;
        }
    }
    return true;
}