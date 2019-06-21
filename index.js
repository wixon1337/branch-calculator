const bekeres = require('./branch-calc');
const muveletek = require('./muveletek1');
const muvelet2 = require('./muvelet2');
let readLine = require('readline-sync');
let readline = bekeres.readline;

const main = () => {
  let a = bekeres.a;
  let b = bekeres.b;
  // let muv = muveletek.operation;

  const funcBeker = () => {
    let x = readline.question('Add meg a müveletet: + - * / vagy % ');
    while (x !== '+' && x !== '-' && x !== '*' && x !== '/' && x !== '%') {
      x = readline.question('Mondom müveletet: + - * / vagy % ');
    }
    return x;
  };
  let func = funcBeker();

  switch (func) {
    case '+': console.log(muveletek.operation(a, b, muveletek.add));
      break;
    case '-': console.log(muveletek.operation(a, b, muveletek.sub));
      break;
    case '*': console.log(muveletek.operation(a, b, muvelet2.mult));
      break;
    case '/': console.log(muveletek.operation(a, b, muvelet2.div));
      break;
    case '%': console.log(muveletek.operation(a, b, muvelet2.rem));
      break;
  }
};

main();
