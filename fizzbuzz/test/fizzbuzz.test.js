import test from 'tape'
import FizzBuzz from '../src/fizzbuzz.js'

test('should return Fizz is the number is divisible by 3', (t) => {
    const yellow = new FizzBuzz()
    let result = yellow.convert(3)
    const expect = 'Fizz'

    t.equal(result, expect);

    result = yellow.convert(6)
    t.equal(result, expect);
    t.end()
})

test('should return Fizz is the number is divisible by 3 or has a 3 ', (t) => {
    const yellow = new FizzBuzz()
    let result = yellow.convert(23)
    const expect = 'Fizz'

    t.equal(result, expect);

    result = yellow.convert(33)
    t.equal(result, expect);
    t.end()
})

test('should return Buzz is the number is divisible by 5', (t) => {
    const yellow = new FizzBuzz()
    let result = yellow.convert(5)
    const expect = 'Buzz'

    result = yellow.convert(10)
    t.equal(result, expect);
    t.end()

})

test('should return Buzz is the number is divisible by 5 or has a 5', (t) => {
    const yellow = new FizzBuzz()
    let result = yellow.convert(55)
    const expect = 'Buzz'

    t.equal(result, expect);
    t.end()

})



test('should return FizzBuzz is the number is divisible by 3 and 5', (t) => {
    const yellow = new FizzBuzz()
    let result = yellow.convert(15)
    const expect = 'FizzBuzz'
    t.equal(result, expect);
    t.end()
})

test('should return the number is not divisible by 3 and 5', (t) => {
    const yellow = new FizzBuzz()
    let result = yellow.convert(8)
    const expected = 8
    t.equal(result, expected);
    t.end()
})


