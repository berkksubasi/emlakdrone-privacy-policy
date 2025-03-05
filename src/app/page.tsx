export default function Home() {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold text-center mt-8 mb-6">
          Emlak Drone Gizlilik Politikası
        </h1>
        
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Uygulama İzinleri</h2>
            <p>
              Emlak Drone uygulaması, sadece işlevsellik için gerekli olan minimum izinleri talep etmektedir. 
              Kişisel bilgileriniz sadece işlevsellik için toplanmakta olup yasal süreçler haricinde 3.taraflarla paylaşılmamaktadır.
            </p>
            <p className="mt-2">Uygulamamızın kullandığı izinler:</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Galeri: Oluşturulan videoları kaydetmek, profesyonel içerik oluşturmanız adına fotoğraflarınızı kullanmanız için gereklidir</li>
              <li>Depolama: Oluşturulan içerikleri cihazınıza kaydetmenizi sağlar</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Veri Kullanımı</h2>
            <p>
              Uygulamayı kullanırken oluşturduğunuz tüm içerikler (fotoğraflar, videolar) sunucularımızda sadece 7(yedi) gün saklanır. 
              Hiçbir veri 3. taraflarla paylaşılmaz veya yasal süreçler haricinde kullanılmaz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. İletişim</h2>
            <p>
              Bu gizlilik politikası hakkında sorularınız için aşağıdaki kanallardan bize ulaşabilirsiniz:
            </p>
            <div className="mt-2">
              <p>E-posta: destek@aparthus.com</p>
              <p>Telefon: +90 543 306 70 89</p>
            </div>
          </section>
        </div>

        <footer className="text-center text-sm text-gray-500 mt-12 mb-8">
          <p>Son güncelleme: {new Date().toLocaleDateString('tr-TR')}</p>
        </footer>
      </main>
    </div>
  );
}
