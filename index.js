let code1;
code1 = 7 + 3;

const code2 = (82 - 2) / 2;

const code3 = 9 * 4 + (15 % 4);

const message = "The vault has been secured. The combination is: ";

const codeA = code1 + "-" + code2 + "-" + code3;

const codeB = `${code1 + "-" + code2 + "-" + code3}`;
//or
//const codeB = `${codeA}`;
console.log(message + codeA + " " + codeB);
