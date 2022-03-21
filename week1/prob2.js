const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function fibo(n) {
    var f_memo = [0, 1]
    if (n === 0 | n === 1) { return n }
    else {
        for (var i = 2; i < n + 1; i++) { f_memo[i] = f_memo[i - 1] + f_memo[i - 2] }
    }
    return f_memo[n];
}


var count;
rl.on("line", function (line) {
    console.log(`print input string ${line}`);
    count = Number(line);
    rl.close();
});

rl.on('close', () => {
    for (var i = 0; i < count + 1; i++) {
        console.log(fibo(i));
    }
    process.exit();
})
