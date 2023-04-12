function createTable(numbers, maxCols) {
  let table = ''
  if (numbers.length < 0) return console.log('Array cannot be empty')
  if (maxCols < 1) return console.log('Column cannot be less than 1')
  const maxLength = Math.max(...numbers.map((num) => num.toString().length))
  const pad = (str, len) => '*'.repeat(len - str.length) + str + '|'
  const border = `+${'-'.repeat(maxLength + 2)}`.repeat(maxCols) + '\n'

  for (let i = 0; i < numbers.length; i += maxCols) {
    const row = numbers
      .slice(i, i + maxCols)
      .map((num) => pad(num.toString(), maxLength + 1))
      .join('')
    if (row.trim()) {
      table += border + '|' + row + '\n'
    } else {
      table += '|' + row + '\n'
    }
  }

  console.log(table)

  // return table;
}

function countCastles(heights) {
  if (!Array.isArray(heights) || heights.length < 1) {
    return 0
  }

  let castleCount = 1
  let currentCastle = 1
  let previousHeight = heights[0]

  for (let i = 1; i < heights.length; i++) {
    const currentHeight = heights[i]
    if (currentHeight === previousHeight) {
      continue
    } else if (currentHeight > previousHeight) {
      if (currentCastle === -1 || currentCastle === 0) {
        castleCount++
      }
      currentCastle = 1
    } else {
      if (currentCastle === 1 || currentCastle === 0) {
        castleCount++
      }
      currentCastle = -1
    }
    previousHeight = currentHeight
  }

  return castleCount
}

console.log(': ', countCastles([3, -1, -5, -5, 2, 4, 7, 5, 1, 1, 1, 4]))

const numbers = [1, 22222, 333333, 444444, 5555555, 6, 15]
const maxCols = 3
const tableStr = createTable(numbers, maxCols)
console.log(tableStr)
