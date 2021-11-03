const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  console.log(horizontalJoin);
  for (let l of horizontalJoin) {
    //console.log(l);
    if (l.includes(word)) return true;
  }
  return false;
};

const varticalJoint = function (matrix, word) {
  let newMatrix = [];
  for (let row = 0; row < matrix[0].length; row++) {
    let newRow = [];
    for (let col = 0; col < matrix.length; col++) {
      newRow.push(matrix[col][row]);
    }
    newMatrix.push(newRow);
  }
  //console.log(newMatrix);
  const varticalArray = newMatrix.map((ls) => ls.join(""));
  console.log(varticalArray);
  for (let l of varticalArray) {
    //console.log(l);
    if (l.includes(word)) return true;
  }
  return false;
};

console.log(varticalJoint([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'ASY'));

module.exports = wordSearch;
