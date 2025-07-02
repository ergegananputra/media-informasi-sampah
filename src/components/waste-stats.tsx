import { TrendingUp, Users, Leaf, Recycle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function WasteStats() {
    const stats = [
        {
            icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
            title: "70%",
            description: "Sampah rumah tangga dapat didaur ulang",
            color: "border-blue-200 bg-blue-50"
        },
        {
            icon: <Users className="w-8 h-8 text-green-600" />,
            title: "1 Keluarga",
            description: "Menghasilkan 2-3 kg sampah per hari",
            color: "border-green-200 bg-green-50"
        },
        {
            icon: <Leaf className="w-8 h-8 text-emerald-600" />,
            title: "40%",
            description: "Sampah organik untuk kompos",
            color: "border-emerald-200 bg-emerald-50"
        },
        {
            icon: <Recycle className="w-8 h-8 text-purple-600" />,
            title: "500 Tahun",
            description: "Waktu plastik terurai di alam",
            color: "border-purple-200 bg-purple-50"
        }
    ]

    return (
        <section className="mb-12">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Fakta Tentang Sampah
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Mengenal lebih dalam tentang dampak sampah terhadap lingkungan
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <Card key={index} className={`border-2 ${stat.color} text-center hover:shadow-lg transition-shadow duration-300`}>
                        <CardHeader className="pb-2">
                            <div className="flex justify-center mb-2">
                                {stat.icon}
                            </div>
                            <CardTitle className="text-2xl font-bold text-gray-800">
                                {stat.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-600">
                                {stat.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
