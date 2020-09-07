console.log = function () { };
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('routes/index.js', 'utf8');

describe('', function () {
    it('', function () {
        let structure = function () {
            router.get('/', (req, res) => {
                res.send('')
            });
        };

        let structure2 = function () {
            router.get('/', (req, res) => {
                res.send()
            });
        };

        let isMatch = Structured.match(code, structure);
        isMatch = isMatch || Structured.match(code, structure2);
        let failureMessage = "Did you add `res.send('')` to the server response?";
        assert.isOk(isMatch, failureMessage);
    });
});