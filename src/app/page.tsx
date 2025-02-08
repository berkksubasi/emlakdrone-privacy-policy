import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold text-center mt-8 mb-6">
          Emlak Camera Gizlilik Politikası
        </h1>
        
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Uygulama İzinleri</h2>
            <p>
              Emlak Camera uygulaması, sadece işlevsellik için gerekli olan minimum izinleri talep etmektedir. 
              Kişisel bilgileriniz toplanmamakta ve saklanmamaktadır.
            </p>
            <p className="mt-2">Uygulamamızın kullandığı izinler:</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Kamera: Video oluşturmak için gereklidir</li>
              <li>Galeri: Oluşturulan videoları kaydetmek için gereklidir</li>
              <li>Konum: Haritada konumunuzu göstermek için gereklidir</li>
              <li>Depolama: Oluşturulan içerikleri cihazınıza kaydetmek için gereklidir</li>
              <li>Mikrofon: Video kaydı sırasında ses kaydı için gereklidir</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Veri Kullanımı</h2>
            <p>
              Uygulamayı kullanırken oluşturduğunuz tüm içerikler (fotoğraflar, videolar) sadece sizin cihazınızda saklanır. 
              Hiçbir veri sunucularımıza gönderilmez veya üçüncü taraflarla paylaşılmaz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Konum Verisi</h2>
            <p>
              Konum bilginiz sadece haritada konumunuzu göstermek için anlık olarak kullanılır. 
              Konum geçmişiniz kaydedilmez veya saklanmaz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. İletişim</h2>
            <p>
              Bu gizlilik politikası hakkında sorularınız için aşağıdaki kanallardan bize ulaşabilirsiniz:
            </p>
            <div className="mt-2">
              <p>E-posta: info@emlakcamera.com</p>
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
