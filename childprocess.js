let cp = require("child_process");

// cp.execSync("code");
// cp.execSync("calc");
// cp.execSync("start chrome");
// let op = cp.execSync('node os.js');
// console.log(op);
// console.log("user info"+op);
// let ans = cp.execSync('git --version')
// console.log("ok" +ans)

cp.execSync('git add .')
cp.execSync('git commit -m "child process"')
cp.execSync('git push -u origin main')