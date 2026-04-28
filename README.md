# Next.js + Netlify Form 練習專案

這個專案用來練習：

- 在 Netlify 部署 Next.js App Router
- 使用 Netlify Forms 接收表單資料
- 設定基本 anti-spam（honeypot）
- 建立可驗證的成功提交流程

## 本地開發

```bash
npm install
npm run dev
```

## 已完成的練習內容

- 首頁提供 `contact-demo` 表單（`POST` + `data-netlify="true"`）
- 送出後導向 `/thank-you` 成功頁
- 已加 `bot-field` honeypot 欄位
- 已加 `netlify.toml` 並啟用 `@netlify/plugin-nextjs`

## 部署到 Netlify（重點）

1. 把專案推到 GitHub
2. 在 Netlify 建立新 Site 並連接該 repo
3. Build command: `npm run build`
4. Publish directory：留空（由 Next.js Netlify plugin 處理）
5. 部署完成後打開網站首頁，提交一次表單
6. 到 Netlify 後台 `Forms` 應可看到 `contact-demo` 與提交紀錄

## 建議加練（下一步）

- 開啟 Form notification（Email / Slack / Webhook）
- 加 reCAPTCHA 或 hCaptcha
- 建 Netlify Function 把表單資料寫入 Notion / Airtable
- 設定環境變數與分支部署（Production / Preview）
- 練習 `_redirects`、`_headers` 與快取策略
