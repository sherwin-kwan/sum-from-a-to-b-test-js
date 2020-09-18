
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if (fromN > toN) {
    const swap = toN;
    toN = fromN;
    fromN = swap;
  }; // Ensures the two values are in the right order
  if (fromN === toN) {
    return toN;
  } else {
    return toN + sum(fromN, toN - 1);
  }
}

module.exports = sum;
