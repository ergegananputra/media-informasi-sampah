import { MapPin, Recycle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function Header() {
    return (
        <header className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-8 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <Recycle className="w-8 h-8" />
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Media Informasi Persampahan
                    </h1>
                </div>

                <div className="flex items-center justify-center gap-2 mb-4">
                    <MapPin className="w-5 h-5" />
                    <p className="text-lg">
                        Sendari, Mlati, Sleman
                    </p>
                </div>

                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                    Panduan Pemilahan Sampah
                </Badge>

                <p className="mt-4 text-green-100 max-w-2xl mx-auto">
                    Pelajari cara memilah sampah dengan benar untuk menjaga kebersihan lingkungan
                    dan mendukung program daur ulang di desa kita.
                </p>
            </div>
        </header>
    )
}
