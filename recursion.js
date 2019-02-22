const getDuration = (func, param) => {
  const start = Date.now();
  func(param);
  const end = Date.now();
  return end - start;
};

// Proper tail call optimization is in the standard
// but not implemented on major platforms.
// Higher values will produce call stack overflow.
const finished = x => x === 10000;

// iterative
const iterative = x => {
  while (!finished(x)) {
    x += 1;
  }
  return true;
};

// recursive
const recursive = x => {
  return finished(x) && recursive(x + 1);
};

const iterativeDuration = getDuration(iterative, 0);
const recursiveDuration = getDuration(recursive, 0);

console.log("iterativeDuration", iterativeDuration);
console.log("recursiveDuration", recursiveDuration);
