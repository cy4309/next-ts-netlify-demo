export default function Home() {
  return (
    <section className="mx-auto flex min-h-dvh w-full max-w-2xl flex-col justify-center gap-8 py-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Netlify Form 練習場</h1>
        <p className="text-sm text-gray-600">
          這是一個 Next.js + Netlify 的最小可行範例，提交後會導向成功頁，資料可在 Netlify 後台查看。
        </p>
      </header>

      <form
        name="contact-demo"
        method="POST"
        action="/thank-you"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="space-y-4 rounded-xl border border-gray-200 p-5"
      >
        <input type="hidden" name="form-name" value="contact-demo" />
        <p className="hidden">
          <label>
            不要填這個欄位：
            <input name="bot-field" />
          </label>
        </p>

        <label className="block space-y-1">
          <span className="text-sm font-medium">姓名</span>
          <input
            name="name"
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-black"
          />
        </label>

        <label className="block space-y-1">
          <span className="text-sm font-medium">Email</span>
          <input
            name="email"
            type="email"
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-black"
          />
        </label>

        <label className="block space-y-1">
          <span className="text-sm font-medium">訊息</span>
          <textarea
            name="message"
            rows={4}
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-black"
          />
        </label>

        <button
          type="submit"
          className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
        >
          送出到 Netlify Forms
        </button>
      </form>

      <div className="rounded-xl border border-dashed border-gray-300 p-4 text-sm text-gray-700">
        <p className="font-semibold">下一步可加練：</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>成功送出後，寄一封 Netlify Notification 到你的信箱</li>
          <li>串接 reCAPTCHA / hCaptcha，降低機器人提交</li>
          <li>加一支 Netlify Function，收到表單後轉存到 Notion / Airtable</li>
          <li>在後台設定 Spam filter 與提交通知 Webhook</li>
        </ul>
      </div>
    </section>
  );
}
