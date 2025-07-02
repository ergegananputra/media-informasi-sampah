import { Clock, Phone, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function WasteSchedule() {
    return (
        <Card className="border-2 border-purple-200 bg-purple-50">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-purple-800 flex items-center justify-center gap-2">
                    <Clock className="w-6 h-6" />
                    Jadwal Pengambilan Sampah
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center space-y-2">
                        <Badge className="bg-green-100 text-green-800 border-green-300">
                            Sampah Organik
                        </Badge>
                        <p className="text-sm text-purple-700">
                            <strong>Senin, Rabu, Jumat</strong><br />
                            Pukul 07:00 - 09:00
                        </p>
                    </div>

                    <div className="text-center space-y-2">
                        <Badge className="bg-blue-100 text-blue-800 border-blue-300">
                            Sampah Anorganik
                        </Badge>
                        <p className="text-sm text-purple-700">
                            <strong>Selasa, Kamis</strong><br />
                            Pukul 07:00 - 09:00
                        </p>
                    </div>

                    <div className="text-center space-y-2">
                        <Badge className="bg-red-100 text-red-800 border-red-300">
                            Sampah B3
                        </Badge>
                        <p className="text-sm text-purple-700">
                            <strong>Sabtu (2x/bulan)</strong><br />
                            Pukul 08:00 - 10:00
                        </p>
                    </div>
                </div>

                <div className="mt-6 pt-4 border-t border-purple-200">
                    <div className="flex items-center justify-center gap-4 text-sm text-purple-700">
                        <div className="flex items-center gap-1">
                            <Phone className="w-4 h-4" />
                            <span>Kontak: Perangkat Desa</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>Sendari, Mlati, Sleman</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
