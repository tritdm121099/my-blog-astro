```sql
pg.query(
    "INSERT INTO testtable (id, name) SELECT * FROM UNNEST ($1::int[], $2::text[])",
    [
        [1, 2, 3],
        ["Jack", "John", "Jill"],
    ]
)
```
