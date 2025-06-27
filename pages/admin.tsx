// pages/admin.tsx
import React from "react";

export default function AdminPaneli() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Admin Paneli</h1>
      <p className="text-gray-700">
        Hoş geldiniz! Bu alandan sistem genel yönetimini yapabilirsiniz.
      </p>

      <ul className="mt-6 space-y-2">
        <li className="p-4 bg-white shadow rounded-md border hover:bg-blue-50 transition">
          🔍 Kayıtlı psikologları görüntüle
        </li>
        <li className="p-4 bg-white shadow rounded-md border hover:bg-blue-50 transition">
          🧑‍💻 Yeni psikolog ekle / sil
        </li>
        <li className="p-4 bg-white shadow rounded-md border hover:bg-blue-50 transition">
          📅 Randevu geçmişi incele
        </li>
      </ul>
    </main>
  );
}