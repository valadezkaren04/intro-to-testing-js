// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
// function sayHello(input) {
//     if (input === "Alex") {
//         return "Hello, Alex!";
//
//     }
//     if (input === "Pat") {
//         return "Hello, Pat!";
//     } else {
//         return "Hello, Jane!";
//     }
// }
function sayHello(input) {
    if (input === true) {
        return "Hello, World!";
    }
    if (input === false) {
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
}
function isFive(input) {
   return input === 5;
}

function isEven(input) {
    return parseFloat(input) % 2 === 0;

}

// function isVowel(vowel) {
//     if (typeof vowel === "number") {
//         return false;
//     } else if (vowel === "a" || vowel === "A" || vowel === 'boolean') {
//         return true;
//     } else {
//         return false;
//     }
// }

function add(input1, input2) {
    return parseInt(input1) + parseInt(input2);
}