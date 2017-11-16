let rec = require('../dist/svgPopper').default;
let fs = require('fs');
let a = new rec();
let b = a.rect({
    x: 10,
    y: 10
}, {
    x: 30,
    y: 30
}, {
    x: 20,
    y: 50
}, "red").flush();
fs.writeFileSync('test.html', b)