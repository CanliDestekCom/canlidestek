// pages/gorusme.tsx
import React from "react";

export default function Gorusme() {
  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Canlı Görüşme Ekranı</h1>

      <div className="bg-white p-6 rounded shadow-md border text-gray-700">
        <p className="mb-4">
          Bu sayfa üzerinden danışan ve psikologlar canlı olarak görüşebilir.
        </p>

        <div className="w-full aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
          <span className="text-gray-500">📹 Görüntülü görüşme alanı (örnek)</span>
        </div>

        <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
          Görüşmeyi Sonlandır
        </button>
      </div>
    </main>
  );
}