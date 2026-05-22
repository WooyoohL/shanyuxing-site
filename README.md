# shanyuxing-site

山欲行（成都）网络科技有限责任公司官网 MVP。项目使用 Astro、Tailwind CSS 和 TypeScript 构建，部署目标为 GitHub Pages 项目站。

## 技术栈

- Astro
- TypeScript
- Tailwind CSS
- GitHub Pages
- GitHub Actions

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

构建产物输出到 `dist/`。

## GitHub Pages 部署

仓库推送到 `main` 分支后，`.github/workflows/deploy.yml` 会执行：

```bash
npm ci
npm run build
```

Astro 已按项目站配置：

```ts
site: 'https://WooyoohL.github.io',
base: '/shanyuxing-site/',
```

预期地址：

```txt
https://WooyoohL.github.io/shanyuxing-site/
```

## 后续替换项

- 腾讯问卷真实链接
- 企业邮箱真实地址
- 微信 / 企业微信二维码图片：`public/wechat-qr.png`
- 目标域名 `shanyuxing-ai.com` 的 GitHub Pages 配置
- 如有备案，再补充备案号
