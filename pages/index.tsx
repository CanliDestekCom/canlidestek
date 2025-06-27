// pages/index.tsx
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Canlı Destek Platformuna Hoş Geldiniz
      </h1>

      <p className="text-gray-600 mb-6 text-center max-w-xl">
        Psikologlarla online randevu alabileceğiniz, canlı görüşme yapabileceğiniz güvenilir bir platformdur.
      </p>

      <div className="flex gap-4">
        <Link
          href="/login"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Giriş Yap
        </Link>
        <Link
          href="/register"
          className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300 transition"
        >
          Kayıt Ol
        </Link>
      </div>
    </main>
  );
}