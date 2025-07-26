npx swagger-typescript-api@13.0.16 -p ./swagger.json -o ./src -n myApi.ts

npx openapi --input ./swagger.json --output ./generated

npx react-query-swagger /tanstack /input:swagger.json /output:src/api/axios-client.ts /template:Axios

```
npx tsx src/generate.mts

# 使用遠端 URL
npx tsx src/generate.mts https://api.example.com/swagger.json

npx tsx src/generate.mts https://gmft-int-bo-api.kmgamesdev.net/swagger/v1/swagger.json
```