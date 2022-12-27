function solutions(matrix, target) {
  for (const arr of matrix) {
    if (arr.indexOf(target) > -1) {
      return true;
    }
  }
  return false;
}
