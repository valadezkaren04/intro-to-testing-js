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