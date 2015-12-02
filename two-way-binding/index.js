var express = require('express');
var fs      = require('fs');
var parser  = require('body-parser');

var app         = express();
var jsonParser  = parser.json();

var rules = [
    { rulename: 'must be 5 characters' },
    { rulename: 'must not be used elsewhere' },
    { rulename: 'must be really cool' }
];

var rulesSize = rules.length;   // Save original size for reset

app.get('/api', function(req, res) {
    res.json(rules);
});

app.post('/api', jsonParser, function(req, res) {
    console.log(req.body);
    if(req.body.reset)
        rules = rules.slice(0, rulesSize);
    else
        rules.push({ rulename: req.body.newRule });

    // Return new rules set
    res.json(rules);
});

app.get('/:file', function(req, res) {
    fs.createReadStream(`${__dirname}/${req.params.file}`).pipe(res)
});

var port = process.env.NODE_PORT || 3100;

console.log(`Listening on port ${port}`);
app.listen(port);
