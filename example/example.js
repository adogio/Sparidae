let a = require('../dist/index').default;
let fs = require('fs');

let b = a("PCXPY", {
    long: true,
    width: 900,
    height: 500
});

fs.writeFileSync('test.html', b);