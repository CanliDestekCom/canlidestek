// pages/404.tsx
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white p-8">
      <h1 className="text-5xl font-bold text-blue-700 mb-4">404</h1>
      <p className="text-gray-600 mb-6">Aradığınız sayfa bulunamadı.</p>
      <Link href="/" className="text-blue-600 underline">
        Ana sayfaya dön
      </Link>
    </main>
  );
}