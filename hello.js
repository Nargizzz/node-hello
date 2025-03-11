function hello(name) {
    if (name) {
        return `Hello, ${name}!`;
    }
    return "Hello, World!";
}
console.log(hello('World'));
module.exports = hello;
