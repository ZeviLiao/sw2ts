// generate.mts
import { generateApi } from 'swagger-typescript-api';
import { resolve } from 'path';

await generateApi({
  fileName: 'api.ts',
  output: resolve(process.cwd(), './src/generated'),
  input: resolve(process.cwd(), './swagger.json'),
  httpClientType: 'fetch',
  // httpClientType: 'axios',
  moduleNameIndex: 1,
  cleanOutput: true,
});
