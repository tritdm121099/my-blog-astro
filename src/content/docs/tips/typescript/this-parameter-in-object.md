---
title: This parameter in Object
description: fast convert array to union type and use it like Enum
sidebar:
  order: 3
---

## Solution

```typescript
function pow(this: { value: number }, exponent: number) {
  return Math.pow(this.value, exponent);
}

const value = {
  value: 2,
  pow,
};

console.log(value.pow(2)); // > 4
console.log(value.pow(3)); 
console.log(value.pow(4));
```
