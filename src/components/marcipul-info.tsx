import { Leaf, Users, Coins, Heart, MessageCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function MarcipulInfo() {
    return (
        <Card className="border-2 border-green-200 bg-green-50">
            <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-green-800 mb-2">
                    SS BS MARCIPUL
                </CardTitle>
                <CardDescription className="text-lg text-green-700 font-medium">
                    Sedekah Sampah dan Bank Sampah Mari Kita Kumpul Melestarikan Alam
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Deskripsi */}
                <div className="text-center">
                    <p className="text-green-700 text-base leading-relaxed">
                        Berinovasi dalam mengolah sampah menjadi barang-barang bermanfaat,
                        menambah produktivitas warga dalam meningkatkan ekonomi sirkuler.
                    </p>
                </div>

                {/* Keuntungan */}
                <div className="bg-white rounded-lg p-6 border border-green-200">
                    <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                        <Heart className="w-5 h-5" />
                        Keuntungan Ikut SS BS Marcipul
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <Coins className="w-5 h-5 text-green-600 mt-0.5" />
                            <p className="text-green-700">Mendapat tabungan dari hasil setor sampah</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <Leaf className="w-5 h-5 text-green-600 mt-0.5" />
                            <p className="text-green-700">Lingkungan lebih bersih dan sehat untuk anak dan masyarakat pada umumnya</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <Users className="w-5 h-5 text-green-600 mt-0.5" />
                            <p className="text-green-700">Menambahkan income masyarakat</p>
                        </div>
                    </div>
                </div>

                {/* Kegiatan */}
                <div className="bg-white rounded-lg p-6 border border-green-200">
                    <h3 className="text-xl font-bold text-green-800 mb-4">Kegiatan Marcipul</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Badge variant="outline" className="justify-center text-green-700 border-green-300 p-3 text-center">
                            Menampung dan memilah sampah
                        </Badge>
                        <Badge variant="outline" className="justify-center text-green-700 border-green-300 p-3 text-center">
                            Membuat kerajinan dari sampah anorganik
                        </Badge>
                        <Badge variant="outline" className="justify-center text-green-700 border-green-300 p-3 text-center">
                            Membuat kompos
                        </Badge>
                    </div>
                </div>

                {/* Kontak */}
                <div className="bg-white rounded-lg p-6 border border-green-200">
                    <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                        <MessageCircle className="w-5 h-5" />
                        Hubungi Marcipul via WhatsApp
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Button
                            variant="default"
                            className="bg-green-600 hover:bg-green-700 text-white flex flex-col items-center gap-2 p-4 h-auto"
                            asChild
                        >
                            <a href="https://wa.me/6287735501701?text=Halo%20Marcipul,%20saya%20ingin%20bergabung%20dengan%20SS%20BS%20Marcipul">
                                <MessageCircle className="w-5 h-5" />
                                <div className="text-center">
                                    <div className="font-semibold">Herwulan</div>
                                    <div className="text-sm opacity-90">+62 877 3550 1701</div>
                                </div>
                            </a>
                        </Button>
                        <Button
                            variant="default"
                            className="bg-green-600 hover:bg-green-700 text-white flex flex-col items-center gap-2 p-4 h-auto"
                            asChild
                        >
                            <a href="https://wa.me/6281227034424?text=Halo%20Marcipul,%20saya%20ingin%20bergabung%20dengan%20SS%20BS%20Marcipul">
                                <MessageCircle className="w-5 h-5" />
                                <div className="text-center">
                                    <div className="font-semibold">Yuni Lestari</div>
                                    <div className="text-sm opacity-90">+62 812 2703 4424</div>
                                </div>
                            </a>
                        </Button>
                    </div>
                    <div className="mt-3 text-center">
                        <p className="text-sm text-green-600">
                            Klik salah satu tombol di atas untuk langsung chat WhatsApp
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
