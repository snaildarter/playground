let sum = 0;
process.argv.forEach((item, i) => {if (i > 1) sum += +item});
console.log(sum);
