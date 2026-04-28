import Link from "next/link";

export default function ThankYouPage() {
  return (
    <section className="mx-auto flex min-h-dvh w-full max-w-xl flex-col items-center justify-center gap-5 text-center">
      <h1 className="text-3xl font-bold">已送出，感謝！</h1>
      <p className="text-sm text-gray-600">
        你的資料已提交到 Netlify Forms。可到 Netlify 專案後台的 Forms 區塊查看。
      </p>
      <Link
        href="/"
        className="rounded-md border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50"
      >
        回首頁再送一次
      </Link>
    </section>
  );
}
