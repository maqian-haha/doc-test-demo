import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'testPay',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  base: '/doc-test-demo',
  publicPath: '/doc-test-demo/',
  hash: true,  //加hash配置，清除缓存
  targets: {  // 浏览器兼容性，手机系统兼容性
    ie: 9,
    ios: 8,
  },
});
