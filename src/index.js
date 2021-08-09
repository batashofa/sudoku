module.exports = function solveSudoku(matrix) {

    function ifSolved(cb) {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (matrix[i][j] === 0) {
                    return cb(i, j);
                }
            }
        }
        return matrix;
    }

    function initSolved(i, j) {
        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let k = 0; k < 9; k++) {
            let boxRow = Math.floor(i / 3) * 3 + Math.floor(k / 3);
            let boxCol = Math.floor(j / 3) * 3 + (k % 3);
            if (matrix[i][k] !== 0) {
                arr = arr.filter(e => e !== matrix[i][k]);
            }
            if (matrix[k][j] !== 0) {
                arr = arr.filter(e => e !== matrix[k][j]);
            }
            if (matrix[boxRow][boxCol] !== 0) {
                arr = arr.filter(e => e !== matrix[boxRow][boxCol]);
            }
        }
        if (arr.length === 0) {
            return false;
        }
        for (let l = 0; l < 9; l++) {
            matrix[i][j] = arr[l]
            if (ifSolved(initSolved)) return matrix
            else matrix[i][j] = 0
        }
    }
    return (ifSolved(initSolved))
}


