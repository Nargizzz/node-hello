const hello = require('../hello');

test('returns Hello, World! when no name is provided', () => {
    expect(hello()).toBe("Hello, World!");
});

test('returns Hello, Alice! when name is Alice', () => {
    expect(hello("Alice")).toBe("Hello, Alice!");
});

test('returns Hello, Bob! when name is Bob', () => {
    expect(hello("Bob")).toBe("Hello, Bob!");
});
