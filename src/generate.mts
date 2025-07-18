// generate.mts
import { generateApi } from 'swagger-typescript-api';
import { resolve } from 'path';

await generateApi({
  fileName: 'api.ts',
  output: resolve(process.cwd(), './src/generated'),
  input: resolve(process.cwd(), './swagger.json'),
  httpClientType: 'fetch',
  // httpClientType: 'axios',
  moduleNameIndex: 0, // 使用完整路徑作為模組名稱，這會改善方法名稱的衝突問題
  cleanOutput: true,
});
