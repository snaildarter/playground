import { parse } from "recast";

const code1 = `a.b.c.d`;
const code2 = `a['b']['c']['d']`;

console.log(parse(code1));

console.log(parse(code2));
