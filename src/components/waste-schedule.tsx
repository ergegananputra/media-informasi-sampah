import { Clock, Phone, MapPin, Users } from "lucide-react"
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
                <div className="text-center space-y-4">
                    <div className="bg-white rounded-lg p-4 border border-purple-200">
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <Users className="w-5 h-5 text-purple-600" />
                            <h3 className="font-semibold text-purple-800">Informasi Jadwal</h3>
                        </div>
                        <p className="text-purple-700 mb-4">
                            Untuk mengetahui jadwal pengambilan sampah yang berlaku di wilayah Anda, 
                            silakan hubungi:
                        </p>
                        
                        <div className="space-y-3">
                            <Badge className="bg-purple-100 text-purple-800 border-purple-300 text-base px-4 py-2">
                                Marcipul
                            </Badge>
                            
                            <div className="text-sm text-purple-700">
                                <p className="font-medium">Koordinasi Setempat:</p>
                                <p>RT/RW atau Ketua Lingkungan</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-white rounded-lg p-3 border border-purple-200">
                            <h4 className="font-semibold text-purple-800 mb-2">Jenis Sampah</h4>
                            <div className="space-y-1 text-sm">
                                <Badge variant="outline" className="text-green-700 border-green-300">Organik</Badge>
                                <Badge variant="outline" className="text-blue-700 border-blue-300">Anorganik</Badge>
                                <Badge variant="outline" className="text-red-700 border-red-300">B3</Badge>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg p-3 border border-purple-200">
                            <h4 className="font-semibold text-purple-800 mb-2">Waktu Umum</h4>
                            <p className="text-sm text-purple-700">
                                Sesuai kesepakatan lokal
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-6 pt-4 border-t border-purple-200">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-purple-700">
                        <div className="flex items-center gap-1">
                            <Phone className="w-4 h-4" />
                            <span>Hubungi: Marcipul & Koordinasi Lokal</span>
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