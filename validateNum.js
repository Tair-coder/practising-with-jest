function validateNum(val) {
  if (val < 0 || val > 100) {
    return false;
  }
  return true;
}

module.exports = validateNum;
