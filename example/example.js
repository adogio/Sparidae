let a = require('../dist/index').default;
let fs = require('fs');

let b = a("PCXPY", {
    long: true
});

fs.writeFileSync('test.html', b);