import { parse } from "recast";

const code1 = `a.b`;
const code2 = `a['b']`;

console.log(parse(code1));

console.log(parse(code2));
