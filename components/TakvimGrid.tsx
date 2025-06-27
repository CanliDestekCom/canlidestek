// components/TakvimGrid.tsx
import React from "react";

type Slot = {
  saat: string;
  dolu: boolean;
};

type Props = {
  baslik?: string;
  slotlar: Slot[];
  onSec: (saat: string) => void;
};

export default function TakvimGrid({ baslik, slotlar, onSec }: Props) {
  return (
    <div className="p-4 bg-white rounded-xl shadow border">
      {baslik && <h2 className="text-lg font-semibold mb-3">{baslik}</h2>}
      <div className="grid grid-cols-2 gap-3">
        {slotlar.map((slot, index) => (
          <button
            key={index}
            disabled={slot.dolu}
            onClick={() => onSec(slot.saat)}
            className={`py-2 px-3 rounded text-sm border text-center ${
              slot.dolu
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-100 hover:bg-blue-200 text-blue-700"
            }`}
          >
            {slot.saat}
          </button>
        ))}
      </div>
    </div>
  );
}