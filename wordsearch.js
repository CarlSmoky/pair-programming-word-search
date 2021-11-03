const wordSearch = (letters, word) => {
  let result = false;
  if (letters.length === 0) {
    return result;
  }
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (let l of horizontalJoin) {
    if (l.includes(word)) result = true;
  }
  return result;
};

const varticalJoint = function(letters, word) {
  let newLetters = [];
  for (let row = 0; row < letters[0].length; row++) {
    let newRow = [];
    for (let col = 0; col < letters.length; col++) {
      newRow.push(letters[col][row]);
    }
    newLetters.push(newRow);
  }

  const varticalArray = newLetters.map((ls) => ls.join(""));
  for (let l of varticalArray) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = {wordSearch, varticalJoint};
