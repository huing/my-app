function f1(...arg) {
  return arg;
}

function f2(...arg) {
  return arg;
}

function f3(...arg) {
  return arg;
}
const componse = (...funcs) => {
  if (funcs.length === 0) {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(
    (acc, cur) =>
      (...args) =>
        acc(cur(...args))
  );
};
componse(f1, f2, f3);

export default componse;
