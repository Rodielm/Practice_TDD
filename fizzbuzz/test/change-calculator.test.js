import test from 'tape';
import calculateChange from '../src/change-calculator.js';

test('calculateChange(215,300) should return [50,20,10,5]', (t) => {

    const result = calculateChange(215, 300);
    const expected = [50, 20, 10, 5];

    t.deepEqual(result, expected);
    t.end();

})


test(
    'calculateChange(12,400) should return [200,100,50,20,10,5,2,1]', (t) => {
        const result = calculateChange(12, 400);
        const expected = [200, 100, 50, 20, 10, 5, 2, 1];
        t.deepEqual(result, expected)
        t.end()
    }
)

test(
    'calculateChange(1487,10000) should equal [5000, 2000, 1000, 500, 10, 2, 1 ]', (t) => {
        const result = calculateChange(1487, 10000);
        const expected = [5000, 2000, 1000, 500, 10, 2, 1];
        t.deepEqual(result, expected);
        t.end();
    });