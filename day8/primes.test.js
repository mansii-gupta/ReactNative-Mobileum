const {isPrimeSync}=require('../day8/primes');
const Assert=require('assert');

describe("is Prime true test", () => {

    test('should return true if isprime(13)',()=>{

        expect(isPrimeSync(13)).toBe(true);
    });

    test('should return false if isprime(2)',()=>{
        expect(isPrimeSync(2)).toBe(true);
    });

    describe('isPrime false test', () => {
        test('should return false if isprime(20)',()=>{
            const result = isPrimeSync(20);
            Assert.deepEqual(result, false);
        });

    });
});