
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  let total = fromN;
  if (fromN < toN) {
    total += sum(fromN + 1, toN);
  }
  return total;
}

module.exports = sum;
