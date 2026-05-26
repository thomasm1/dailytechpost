

```sh
curl -X POST http://localhost:8082/api/news/bulk/csv \
  -H "Authorization: Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJ0aG9tYXMxQGdtYWlsLmNvbSIsImlhdCI6MTc3OTc1ODM5OCwiZXhwIjoxNzgwMzYzMTk4fQ.G7rzqmOye1Yl4zmkikF0Sn7pjezpPDsw6s-OmP0S2FUFkVX0OcPxMkzLkHRUxriS" \
  -F "file=@src/main/resources/data/newslink-sociology-category-seed.csv"
```