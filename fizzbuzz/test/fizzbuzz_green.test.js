import test from 'tape'
import FizzBuzz from '../src/green_belt/fizzbuzz.js'

test('should return Fizz is the 9th element is divisible by 3', (t) => {
    const array = new FizzBuzz().generateNumbers()
    let result = array[8]
    const expect = 'Fizz'

    t.equal(result, expect);

    result = array[11]
    t.equal(result, expect);
    t.end()
})

test('should return Fizz is 23th element is divisible by 3 or has a 3 ', (t) => {
    const array = new FizzBuzz().generateNumbers()
    let result = array[22]
    const expect = 'Fizz'

    t.equal(result, expect);

    result = array[32]
    t.equal(result, expect);
    t.end()
})

test('should return Buzz is the  5th element is divisible by 5', (t) => {
    const array = new FizzBuzz().generateNumbers()
    let result = array[4]
    const expect = 'Buzz'

    t.equal(result, expect);

    result = array[9]
    t.equal(result, expect);

    t.end()

})

test('should return Buzz is the 55th element is divisible by 5 or has a 5', (t) => {
    const array = new FizzBuzz().generateNumbers()
    let result = array[54]
    const expect = 'Buzz'

    t.equal(result, expect);
    t.end()

})



test('should return FizzBuzz is the 14th element is divisible by 3 and 5', (t) => {
    const array = new FizzBuzz().generateNumbers()
    let result = array[14]
    const expect = 'FizzBuzz'
    t.equal(result, expect);
    t.end()
})

test('should return the 8th element is not divisible by 3 and 5', (t) => {
    const array = new FizzBuzz().generateNumbers()
    let result = array[7]
    const expected = 8
    t.equal(result, expected);
    t.end()
})


