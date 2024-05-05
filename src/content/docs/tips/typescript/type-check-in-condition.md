---
title: Type extends check
description: Typescript
sidebar:
  order: 1
---

## Problem

```typescript
type Animal = {
    name: string;
};

type Dog = Animal & {
    bark: string;
}
```

```typescript
function isDog(animal: Dog | Animal) {
    return "bark" in animal;
}

function test(animal: Dog | Animal) {
    if(isDog(animal)) {
        console.log(animal.bark); // error
    } else {
        console.log(animal.name);
    }
}
```

## Resolve

```typescript
function isDog(animal: Dog | Animal): animal is Dog {
    return "bark" in animal;
}
```
