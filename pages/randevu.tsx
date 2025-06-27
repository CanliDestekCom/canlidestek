// pages/randevu.tsx
import React, { useState } from "react";
import TakvimGrid from "../components/TakvimGrid";

export default function Randevu() {
  const [secilenSaat, setSecilenSaat] = useState<string | null>(null);

  const saatler = [
    { saat: "10:00", dolu: false },
    { saat: "11:00", dolu: true },
    { saat: "12:00", dolu: false },
    { saat: "14:00", dolu: false },
    { saat: "15:00", dolu: true },
    { saat: "16:00", dolu: false },
  ];

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Randevu Al</h1>

      <TakvimGrid
        baslik="Uygun Saatler"
        slotlar={saatler}
        onSec={(saat) => setSecilenSaat(saat)}
      />

      {secilenSaat && (
        <div className="mt-6 bg-white p-4 rounded shadow border">
          <p className="text-gray-700 mb-2">Seçilen saat: <strong>{secilenSaat}</strong></p>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            Randevuyu Onayla
          </button>
        </div>
      )}
    </main>
  );
}