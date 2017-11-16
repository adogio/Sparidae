let a = require('../dist/index').default;
let fs = require('fs');

let b = a("DAOIJDOIAS");

fs.writeFileSync(
    'test.html',
    b
);