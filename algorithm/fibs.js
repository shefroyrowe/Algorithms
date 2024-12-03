//containing arr
const fibs = [0, 1];

for (let i = fibs.length; i < 8; i++) {
    fibs[i] = fibs[i-2] + fibs[i-1];
}
console.log(fibs);