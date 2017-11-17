let a = require('../dist/index').default;
let fs = require('fs');

let b = a("PCXPY");

fs.writeFileSync('test.html', b);