---
title: Convert array to union type
description: fast convert array to union type and use it like Enum
sidebar:
  order: 2
---

## Normal define Union Type

```typescript
type Foo = "test1" | "test2"
```

## Solution

```typescript
const foos = ["test1", "test2"] as const;
type Foo = typeof foos[number];
```

![union type from array](../../../../../public/tips/typescript/union-type-from-array.png)