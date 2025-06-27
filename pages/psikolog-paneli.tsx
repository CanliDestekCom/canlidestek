// pages/psikolog-paneli.tsx
import React from "react";

export default function PsikologPaneli() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Psikolog Paneli</h1>

      <section className="bg-white p-6 rounded shadow border mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Bugünkü Randevular</h2>
        <ul className="space-y-2">
          <li className="p-3 bg-gray-100 rounded">🕒 10:00 - Ahmet Y.</li>
          <li className="p-3 bg-gray-100 rounded">🕒 13:30 - Zeynep K.</li>
          <li className="p-3 bg-gray-100 rounded">🕒 16:00 - Burak E.</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded shadow border">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Profil Bilgilerim</h2>
        <p className="text-gray-700 mb-1">Ad: Dr. Elif Çelik</p>
        <p className="text-gray-700 mb-1">Uzmanlık: Çocuk Psikolojisi</p>
        <p className="text-gray-700">Şehir: İzmir</p>
      </section>
    </main>
  );
}