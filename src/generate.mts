// generate.mts
import { generateApi } from 'swagger-typescript-api';
import { resolve } from 'path';
import { writeFileSync, existsSync } from 'fs';
import { execSync } from 'child_process';

// 取得命令列參數
const args = process.argv.slice(2);
const url = args[0];

if (!url) {
  console.log('使用預設的 swagger.json 檔案');
  console.log('用法: npx tsx src/generate.mts <swagger-url>');
}

let input: string;

if (url && url.startsWith('http')) {
  // 如果是 URL，先下載到暫存檔案
  console.log(`下載 Swagger 檔案從: ${url}`);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const swaggerContent = await response.text();
    const tempFile = resolve(process.cwd(), './temp-swagger.json');
    writeFileSync(tempFile, swaggerContent);
    input = tempFile;
    console.log(`Swagger 檔案已下載到: ${tempFile}`);
  } catch (error) {
    console.error('下載 Swagger 檔案失敗:', error);
    process.exit(1);
  }
} else {
  input = url || resolve(process.cwd(), './swagger.json');
}

console.log(`使用輸入來源: ${input}`);

await generateApi({
  fileName: 'api.ts',
  output: resolve(process.cwd(), './src/generated'),
  input,
  // httpClientType: 'fetch',
  // httpClientType: 'axios',
  // moduleNameIndex: 1,
  cleanOutput: true,
  generateClient: false,
  // extractRequestParams: true,
});

// 清理暫存檔案
if (url && url.startsWith('http')) {
  const tempFile = resolve(process.cwd(), './temp-swagger.json');
  if (existsSync(tempFile)) {
    // 根據作業系統選擇適當的刪除命令
    const isWindows = process.platform === 'win32';
    const deleteCommand = isWindows ? `del "${tempFile}"` : `rm "${tempFile}"`;
    execSync(deleteCommand);
    console.log('暫存檔案已清理');
  }
}

console.log(`API 檔案已產生到: ${resolve(process.cwd(), './src/generated/api.ts')}`);
