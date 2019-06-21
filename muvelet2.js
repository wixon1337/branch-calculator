
const mult = (int, int2) => {
  return int * int2;
};

const div = (int, int2) => {
  if (int2 === 0) {
    console.log('Nulllával nem osztunk bástya.');
  } else {
    return int / int2;
  }
};

const rem = (int, int2) => {
  return int % int2;
};

module.exports = {
  mult,
  div,
  rem
};
