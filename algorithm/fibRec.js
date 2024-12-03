let n = 8;

const fibonacci = (n) => {
    //base case
    if (n <= 1) {
        return n;
    }
    //recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
}

for (let i = 0; i < n; i++) {
    console.log(fibonacci(i));
};