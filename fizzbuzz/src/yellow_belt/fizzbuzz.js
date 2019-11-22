
class FizzBuzz {

    convert(num) {
        if (this.divisibleBy3(num) && this.divisibleBy5(num)) {
            return 'FizzBuzz'
        }
        else if (this.divisibleBy3(num)) {
            return 'Fizz';
        } else if (this.divisibleBy5(num)) {
            return 'Buzz'
        } else {
            return num
        }
    }

    generateNumbers() {
        return Array.from(Array(100), (num, index) => this.convert(index + 1));
    }

    divisibleBy(num, divisible) {
        return 0 == num % divisible;
    }

    divisibleBy3(num) {
        return this.divisibleBy(num, 3);
    }

    divisibleBy5(num) {
        return this.divisibleBy(num, 5);
    }

    containsNumber(num, included) {
        return num.toString().includes(included)
    }

}


export default FizzBuzz
