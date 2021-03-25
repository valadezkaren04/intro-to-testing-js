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
        expect(typeof isFive(true)).toBe(5);
    });
});