const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const operation = (a, b, t) => {
  return t(a, b);
};

module.exports = {
  add, sub, operation
};
