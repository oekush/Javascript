// class NQueen {
//   constructor (size) {
//     this.board = new Array(size).fill('.').map(() => new Array(size).fill('.'))
//     this.size = size
//   }

//   isValid ([row, col]) {
//     // function to check if the placement of the queen in the given location is valid

//     // checking the left of the current row
//     for (let i = 0; i < col; i++) {
//       if (this.board[row][i] === 'Q') return false
//     }

//     // checking the upper left diagonal
//     for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
//       if (this.board[i][j] === 'Q') return false
//     }

//     // checking the lower left diagonal
//     for (let i = row, j = col; j >= 0 && i < this.size; i++, j--) {
//       if (this.board[i][j] === 'Q') return false
//     }

//     return true
//   }

//   solve (col = 0) {
//     // function to solve the board
//     if (col >= this.size) { return true }

//     for (let i = 0; i < this.size; i++) {
//       if (this.isValid([i, col])) {
//         this.board[i][col] = 'Q'

//         if (this.solve(col + 1)) { return true }

//         // backtracking
//         this.board[i][col] = '.'
//       }
//     }

//     return false
//   }

//   printBoard () {
//     // utility function to display the board
//     for (const row of this.board) {
//       console.log(...row)
//     }
//   }
// }

// function main () {
//   const board = new NQueen(8)

//   board.printBoard()
//   console.log('\n')

//   board.solve()

//   board.printBoard()
// }

// main()




function solveNQueen(n) {
  let result = [];
  dfs(new Array(n), 0, result);
  return result;
}

function dfs(queens, row, result) {
  let n = queens.length;
  
  if (row === n) {
      result.push(buildResult(queens));
      return;
  }
  
  for (let i = 0; i < n; i++) {
      if (isValid(queens, row, i)) {
          queens[row] = i;
          dfs(queens, row + 1, result);
          queens[row] = null;
      }
  }
}

function isValid(queens, row, col) {
  for (let i = 0; i < row; i++) {
      if (queens[i] === col || queens[i] - i === col - row || queens[i] + i === col + row) {
          return false;
      }
  }
  return true;
}

function buildResult(queens) {
  let result = [];
  let n = queens.length;
  
  for (let i = 0; i < n; i++) {
      let str = '';
      for (let j = 0; j < n; j++) {
          if (queens[i] === j) {
              str += 'Q ';
          } else {
              str += '. ';
          }
      }
      result.push(str);
  }
  return result;
}
