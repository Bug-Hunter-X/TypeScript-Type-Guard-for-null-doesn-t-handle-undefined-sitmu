function greet(name: string | null): string {
  if (name === null) {
    return "Hello, world!";
  }
  return `Hello, ${name}!`;
}

greet(null); // Works fine
greet(undefined); // Error: Argument of type 'undefined' is not assignable to parameter of type 'string | null'.