---
title: SQL Parameters Query
description: Sql params query
sidebar:
  order: 1
---

## Problem

```sql
pg.query(
  `
    INSERT INTO testtable (id, name)
    VALUES ($1, $2), ($3, $4), ...
  `,
  [ 1, "Jack", 2, "Jill", ...]
)
```

## Resolve

```sql
pg.query(
  "INSERT INTO testtable (id, name) SELECT * FROM UNNEST ($1::int[], $2::text[])",
  [
      [1, 2, 3],
      ["Jack", "John", "Jill"],
  ]
)
```
