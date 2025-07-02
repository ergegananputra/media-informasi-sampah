import { QrCode, Info } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function QRCodeInfo() {
    return (
        <Card className="border-2 border-amber-200 bg-amber-50">
            <CardHeader className="text-center">
                <CardTitle className="text-xl font-bold text-amber-800 flex items-center justify-center gap-2">
                    <QrCode className="w-6 h-6" />
                    Akses Mudah via QR Code
                </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
                <div className="flex items-start gap-3 text-amber-700">
                    <Info className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div className="text-left">
                        <p className="text-sm mb-2">
                            Website ini dapat diakses melalui QR Code yang tersedia di setiap tempat sampah
                            di area Sendari, Mlati, Sleman.
                        </p>
                        <p className="text-xs text-amber-600">
                            Scan QR Code dengan kamera smartphone Anda untuk membuka panduan pemilahan sampah ini.
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
