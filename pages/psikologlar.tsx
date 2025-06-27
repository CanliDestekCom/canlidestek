// pages/psikologlar.tsx
import React, { useState } from "react";

type Psikolog = {
  id: number;
  isim: string;
  uzmanlik: string;
  sehir: string;
  puan: number;
};

const uzmanlar: Psikolog[] = [
  { id: 1, isim: "Dr. Ayşe Yılmaz", uzmanlik: "Aile Terapisi", sehir: "İstanbul", puan: 4.9 },
  { id: 2, isim: "Dr. Mehmet Demir", uzmanlik: "Kaygı ve Depresyon", sehir: "Ankara", puan: 4.7 },
  { id: 3, isim: "Dr. Elif Çelik", uzmanlik: "Çocuk Psikolojisi", sehir: "İzmir", puan: 4.8 },
  { id: 4, isim: "Dr. Can Kaya", uzmanlik: "Travma Terapisi", sehir: "Bursa", puan: 5.0 }
];

export default function Psikologlar() {
  const [filtre, setFiltre] = useState("");

  const filtrelenmis = uzmanlar.filter((u) =>
    u.uzmanlik.toLowerCase().includes(filtre.toLowerCase()) ||
    u.isim.toLowerCase().includes(filtre.toLowerCase()) ||
    u.sehir.toLowerCase().includes(filtre.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Uzman Psikologlar
        </h1>

        <input
          type="text"
          placeholder="Uzmanlık, isim veya şehir ara..."
          className="w-full border px-4 py-2 rounded mb-6 shadow-sm"
          value={filtre}
          onChange={(e) => setFiltre(e.target.value)}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtrelenmis.map((psiko) => (
            <div
              key={psiko.id}
              className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-semibold text-gray-800">
                  {psiko.isim}
                </h2>
                <span className="text-yellow-500 font-semibold">
                  ⭐ {psiko.puan}
                </span>
              </div>
              <p className="text-gray-600 mb-1">Uzmanlık: {psiko.uzmanlik}</p>
              <p className="text-gray-500 text-sm">Şehir: {psiko.sehir}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
                Randevu Al
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
