# TypeScript Type Guard Bug: Handling undefined with null

This repository demonstrates a subtle issue in TypeScript's type system related to type guards and the handling of `undefined` when a function explicitly allows `null`.  While a type guard correctly handles `null`, it surprisingly fails to handle `undefined` even when it would logically seem to be a compatible value.

## The Bug

The `greet` function is designed to accept either a string or `null`.  If `null` is provided, it returns a default greeting.  However, passing `undefined` results in a TypeScript compilation error, even though `undefined` could reasonably be considered to behave similarly to `null` in this context.

## Solution

To fix this, explicitly include `undefined` in the function's parameter type:
```typescript
function greet(name: string | null | undefined): string { ... }
```
This change allows the function to accept `undefined` without error.