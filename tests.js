// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe("function");
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return "Hello, Alex!" when executed', function() {
       expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return "Hello, World!" when executed', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when executed', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    //edge cases
    // it('should return empty str when executed', function () {
    //     expect(sayHello("")).toBe("");
    // });
});

describe('isFive', function() {
   it('should be a defined function', function() {
       expect(typeof isFive).toBe("function");
   });
    it('should return a boolean no matter the input', function() {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return boolean true when passed the argument of 5', function() {
        expect(isFive(5)).toBe(true);
    });
    it('should return boolean true when argument "5" is passed', function () {
        expect(typeof sayHello()).toBe('string');
    });
});

describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe("function");
    });
    it('should return a boolean no matter the input', function() {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when executed with the argument of 2', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when executed with the argument of -4', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when executed with the argument of 3', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when called with the argument of "banana" ', function() {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when called with the argument of "8" ', function() {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when called with the argument of Infinity', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when called with boolean', function() {
        expect(isEven('boolean')).toBe(false);
    });
    it('should return false when called without an argument', function() {
        expect(isEven()).toBe(false);
    });
});

describe('isVowel', function() {
    // it('should be a defined function', function() {
    //     expect(typeof isVowel).toBe("function");
    // });
    it('should return a boolean no matter the input', function() {
        expect(typeof isVowel()).toBe('boolean');
    });

});