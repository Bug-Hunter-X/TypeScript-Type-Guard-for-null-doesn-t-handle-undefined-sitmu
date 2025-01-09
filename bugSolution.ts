function greet(name: string | null | undefined): string {
  if (name === null || name === undefined) {
    return "Hello, world!";
  }
  return `Hello, ${name}!`;
}

greet(null); // Works fine
greet(undefined); // Works fine
greet("Alice"); // Works fine