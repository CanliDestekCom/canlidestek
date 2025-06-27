// pages/cerez-politikasi.tsx
import React from "react";

export default function CerezPolitikasi() {
  return (
    <main className="min-h-screen p-8 bg-white">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Çerez Politikası</h1>

      <p className="text-gray-700 mb-4">
        Bu web sitesi, kullanıcı deneyimini geliştirmek amacıyla çerezler kullanır. 
        Web sitemizi kullanmaya devam ederek çerezlerin kullanımını kabul etmiş olursunuz.
      </p>

      <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Çerez Nedir?</h2>
      <p className="text-gray-700 mb-4">
        Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınıza yerleştirilen küçük metin dosyalarıdır.
        Bu dosyalar, web sitesinin sizi tanımasına ve tercihlerinizi hatırlamasına yardımcı olur.
      </p>

      <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Çerezleri Nasıl Kontrol Edebilirim?</h2>
      <p className="text-gray-700">
        Tarayıcı ayarlarınızı değiştirerek çerezleri kontrol edebilir veya silebilirsiniz. 
        Ancak çerezleri devre dışı bırakmak, web sitesinin bazı işlevlerini etkileyebilir.
      </p>
    </main>
  );
}