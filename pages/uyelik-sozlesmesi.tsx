// pages/uyelik-sozlesmesi.tsx
import React from "react";

export default function UyelikSozlesmesi() {
  return (
    <main className="min-h-screen p-8 bg-white">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Üyelik Sözleşmesi</h1>

      <p className="text-gray-700 mb-4">
        Bu üyelik sözleşmesi, CanlıDestek platformuna üye olan kullanıcılar ile siteyi yöneten kurum arasında düzenlenmiştir.
      </p>

      <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1. Taraflar</h2>
      <p className="text-gray-700 mb-4">
        İşbu sözleşme, platforma üye olan kişi ile siteyi yöneten CanliDestek arasında kurulmuştur.
      </p>

      <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2. Hizmetin Kapsamı</h2>
      <p className="text-gray-700 mb-4">
        CanlıDestek, kullanıcıların uzman psikologlarla çevrimiçi görüşme yapabilmesini sağlar.
        Hizmetin detayları ve kapsamı platform tarafından belirlenir.
      </p>

      <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">3. Üyelik Koşulları</h2>
      <p className="text-gray-700 mb-4">
        Üye, verdiği bilgilerin doğru olduğunu ve hizmeti yalnızca kişisel kullanım amacıyla kullandığını kabul eder.
      </p>

      <p className="text-gray-700 mt-8">
        Üyelik sözleşmesi kabul edildiğinde kullanıcı, belirtilen koşulları okuduğunu ve kabul ettiğini beyan eder.
      </p>
    </main>
  );
}