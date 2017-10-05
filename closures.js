let outer = () => {
  let value = 10;
  return () => value;
}

console.log(outer);

