// pages/dashboard.tsx
import React from "react";

export default function Dashboard() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Danışan Paneli</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Randevularım</h2>
        <div className="bg-white p-4 rounded shadow border">
          <p className="text-gray-600">Henüz bir randevunuz bulunmamaktadır.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Psikologlar</h2>
        <div className="bg-white p-4 rounded shadow border">
          <p className="text-gray-600">
            Uygun psikologları görmek ve randevu almak için
            <span className="text-blue-600 font-medium"> "Psikologlar" </span> sayfasına gidin.
          </p>
        </div>
      </section>
    </main>
  );
}