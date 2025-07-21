import { Camera, Package, Users, Recycle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function MarcipulGallery() {
    const galleryItems = [
        {
            id: 1,
            title: "Kegiatan Pemilahan Sampah",
            description: "Warga sedang memilah sampah bersama tim Marcipul",
            category: "Kegiatan",
            placeholder: "Foto kegiatan pemilahan sampah"
        },
        {
            id: 2,
            title: "Produk Kerajinan Sampah Anorganik",
            description: "Hasil kerajinan dari sampah plastik dan botol bekas",
            category: "Produk",
            placeholder: "Foto kerajinan dari sampah anorganik"
        },
        {
            id: 3,
            title: "Bank Sampah",
            description: "Fasilitas bank sampah untuk menampung dan menimbang sampah",
            category: "Fasilitas",
            placeholder: "Foto fasilitas bank sampah"
        },
        {
            id: 4,
            title: "Kompos Organik",
            description: "Proses pembuatan kompos dari sampah organik",
            category: "Produk",
            placeholder: "Foto kompos dari sampah organik"
        },
        {
            id: 5,
            title: "Sosialisasi Masyarakat",
            description: "Kegiatan sosialisasi program Marcipul kepada warga",
            category: "Kegiatan",
            placeholder: "Foto sosialisasi program"
        },
        {
            id: 6,
            title: "Tabungan Sampah",
            description: "Sistem tabungan dari hasil penyetoran sampah",
            category: "Layanan",
            placeholder: "Foto sistem tabungan sampah"
        }
    ]

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case "Kegiatan": return <Users className="w-4 h-4" />
            case "Produk": return <Package className="w-4 h-4" />
            case "Fasilitas": return <Recycle className="w-4 h-4" />
            case "Layanan": return <Camera className="w-4 h-4" />
            default: return <Camera className="w-4 h-4" />
        }
    }

    const getCategoryColor = (category: string) => {
        switch (category) {
            case "Kegiatan": return "bg-blue-100 text-blue-800 border-blue-200"
            case "Produk": return "bg-purple-100 text-purple-800 border-purple-200"
            case "Fasilitas": return "bg-green-100 text-green-800 border-green-200"
            case "Layanan": return "bg-orange-100 text-orange-800 border-orange-200"
            default: return "bg-gray-100 text-gray-800 border-gray-200"
        }
    }

    return (
        <Card className="border-2 border-indigo-200 bg-indigo-50">
            <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-indigo-800 flex items-center justify-center gap-2">
                    <Camera className="w-8 h-8" />
                    Gallery Marcipul
                </CardTitle>
                <CardDescription className="text-indigo-700 text-lg">
                    Dokumentasi kegiatan dan produk SS BS Marcipul
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryItems.map((item) => (
                        <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="relative aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                {/* Placeholder untuk gambar */}
                                <div className="text-center p-4">
                                    <Camera className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                                    <p className="text-sm text-gray-500 font-medium">Foto akan ditambahkan</p>
                                    <p className="text-xs text-gray-400 mt-1">{item.placeholder}</p>
                                </div>

                                {/* Future: Uncomment jika gambar sudah tersedia
                <Image
                  src={`/images/marcipul/${item.id}.jpg`}
                  alt={item.placeholder}
                  fill
                  className="object-cover"
                />
                */}
                            </div>

                            <div className="p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <Badge className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(item.category)}`}>
                                        {getCategoryIcon(item.category)}
                                        {item.category}
                                    </Badge>
                                </div>

                                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Info untuk menambahkan foto */}
                <div className="mt-8 bg-white rounded-lg p-6 border border-indigo-200">
                    <div className="text-center text-indigo-700">
                        <Camera className="w-8 h-8 mx-auto mb-2" />
                        <p className="font-medium">Gallery Foto Marcipul</p>
                        <p className="text-sm mt-2">
                            Untuk menambahkan foto, letakkan gambar di folder
                            <code className="bg-indigo-100 px-2 py-1 rounded text-xs ml-1">/public/images/marcipul/</code>
                        </p>
                        <p className="text-xs text-indigo-600 mt-2">
                            Format yang disarankan: JPG/PNG, ukuran maksimal 2MB
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
