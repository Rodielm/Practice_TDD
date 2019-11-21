import test from 'tape';

function sum(a, b) {
    return a + b
}

test('sum should return the addition of two numbers', function (t) {
    t.equal(3, sum(1, 2)); // make this test pass by completing the add function!
    t.end();
});