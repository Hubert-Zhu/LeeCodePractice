function isMonotonic(array) {
  if (array.length <= 2) return true;

  let direction = array[1] - array[0];

  let i = 2;

  while (i < array.length) {
    if (direction === 0) {
      direction = array[i] - array[i - 1];
      i++;
      continue;
    }

    let newDirection = array[i] - array[i - 1];

    if (direction < 0 === newDirection < 0 || newDirection === 0) {
      i++;
    } else {
      break;
    }
  }

  if (i === array.length) {
    return true;
  } else {
    return false;
  }
}
