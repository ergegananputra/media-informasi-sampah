import { Trash2, Leaf, Cpu, Palette, BookOpen } from "lucide-react"
import { Header } from "@/components/header"
import { WasteCard } from "@/components/waste-card"
import { QRCodeInfo } from "@/components/qr-code-info"
import { WasteSchedule } from "@/components/waste-schedule"
import { WasteStats } from "@/components/waste-stats"
import { VideoTutorialSection } from "@/components/video-tutorial-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  const wasteTypes = [
    {
      title: "Sampah Organik",
      description: "Sampah yang dapat terurai secara alami",
      color: "border-green-500 bg-green-50",
      examples: [
        "Sisa makanan dan sayuran",
        "Kulit buah-buahan",
        "Daun dan ranting kering",
        "Ampas kopi dan teh",
        "Tulang ikan dan ayam"
      ],
      icon: <Leaf className="w-12 h-12 text-green-600" />
    },
    {
      title: "Sampah Anorganik",
      description: "Sampah yang tidak dapat terurai secara alami",
      color: "border-blue-500 bg-blue-50",
      examples: [
        "Botol plastik dan kaca",
        "Kaleng minuman",
        "Kardus dan kertas",
        "Kantong plastik",
        "Kemasan makanan"
      ],
      icon: <Trash2 className="w-12 h-12 text-blue-600" />
    },
    {
      title: "Sampah B3",
      description: "Bahan Berbahaya dan Beracun",
      color: "border-red-500 bg-red-50",
      examples: [
        "Baterai bekas",
        "Lampu neon",
        "Obat-obatan kadaluwarsa",
        "Cat dan thinner",
        "Pestisida"
      ],
      icon: <Cpu className="w-12 h-12 text-red-600" />
    },
    {
      title: "Sampah Residu",
      description: "Sampah yang tidak dapat didaur ulang",
      color: "border-gray-500 bg-gray-50",
      examples: [
        "Popok sekali pakai",
        "Puntung rokok",
        "Kertas tisu kotor",
        "Kaca pecah",
        "Styrofoam kotor"
      ],
      icon: <Palette className="w-12 h-12 text-gray-600" />
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* QR Code Info */}
        <section className="mb-12">
          <QRCodeInfo />
        </section>

        {/* Jenis-jenis Sampah */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Jenis-jenis Sampah
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kenali berbagai jenis sampah untuk memilahnya dengan benar sesuai kategorinya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {wasteTypes.map((waste, index) => (
              <WasteCard
                key={index}
                title={waste.title}
                description={waste.description}
                color={waste.color}
                examples={waste.examples}
                icon={waste.icon}
              />
            ))}
          </div>
        </section>

        {/* Fakta Tentang Sampah */}
        <WasteStats />

        {/* Tips Pemilahan */}
        <section className="mb-12">
          <Card className="border-2 border-emerald-200 bg-emerald-50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-emerald-800 flex items-center justify-center gap-2">
                <BookOpen className="w-6 h-6" />
                Tips Pemilahan Sampah
              </CardTitle>
              <CardDescription className="text-emerald-700">
                Panduan praktis untuk memilah sampah dengan benar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-emerald-800">Sebelum Membuang:</h4>
                  <ul className="space-y-2 text-sm text-emerald-700">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                      Bersihkan sisa makanan dari kemasan
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                      Pisahkan tutup dari botol plastik
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                      Lipat kardus agar menghemat ruang
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                      Keringkan sampah basah sebelum dibuang
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-emerald-800">Prinsip 3R:</h4>
                  <div className="space-y-3">
                    <Badge variant="outline" className="w-full justify-start text-emerald-700 border-emerald-300">
                      <strong className="mr-2">Reduce:</strong> Kurangi penggunaan
                    </Badge>
                    <Badge variant="outline" className="w-full justify-start text-emerald-700 border-emerald-300">
                      <strong className="mr-2">Reuse:</strong> Gunakan kembali
                    </Badge>
                    <Badge variant="outline" className="w-full justify-start text-emerald-700 border-emerald-300">
                      <strong className="mr-2">Recycle:</strong> Daur ulang
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Jadwal Pengambilan Sampah */}
        <section className="mb-12">
          <WasteSchedule />
        </section>

        {/* Video Tutorial */}
        <VideoTutorialSection
          githubUsername={process.env.NEXT_PUBLIC_GITHUB_USERNAME || "your-username"}
          repositoryName={process.env.NEXT_PUBLIC_GITHUB_REPOSITORY || "your-repository"}
          filePath={process.env.NEXT_PUBLIC_VIDEO_TUTORIAL_PATH || "video_tutorial_data.json"}
          branch={process.env.NEXT_PUBLIC_GITHUB_BRANCH || "main"}
        />

        {/* Informasi Kontak */}
        <section>
          <Card className="border-2 border-blue-200 bg-blue-50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-blue-800">
                Informasi Tambahan
              </CardTitle>
              <CardDescription className="text-blue-700">
                Hubungi kami untuk informasi lebih lanjut tentang program persampahan
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-2 text-blue-700">
                <p className="font-semibold">Desa Sendari, Mlati, Sleman, Daerah Istimewa Yogyakarta</p>
                <p className="text-sm">Untuk melaporkan masalah persampahan atau saran, silakan hubungi perangkat desa setempat atau paguyuban pengelola sampah.</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm">
            © 2025 Media Informasi Persampahan Sendari, Mlati, Sleman, Daerah Istimewa Yogyakarta
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Program KKN PPM Universitas Gadjah Mada 2025
          </p>
        </div>
      </footer>
    </div>
  );
}
