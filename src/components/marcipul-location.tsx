import { MapPin, Navigation, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function MarcipulLocation() {
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2266.0161489766433!2d110.32400920055123!3d-7.738055672182811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7af726cee72939%3A0xa0b4b1b51c7c1b42!2sSSBS%20MARCIPUL!5e1!3m2!1sid!2sid!4v1753093012964!5m2!1sid!2sid"

    const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=SSBS%20MARCIPUL&destination_place_id=ChIJOSnnzib-ei4RQhvHwbWitKA"

    return (
        <Card className="border-2 border-orange-200 bg-orange-50">
            <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-orange-800 flex items-center justify-center gap-2">
                    <MapPin className="w-8 h-8" />
                    Lokasi SS BS MARCIPUL
                </CardTitle>
                <CardDescription className="text-orange-700 text-lg">
                    Temukan lokasi kami di Sendari, Mlati, Sleman
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Google Maps Embed */}
                <div className="bg-white rounded-lg p-4 border border-orange-200">
                    <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg">
                        <iframe
                            src={mapUrl}
                            className="absolute top-0 left-0 w-full h-full border-0"
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Lokasi SS BS MARCIPUL"
                        />
                    </div>
                </div>

                {/* Informasi Alamat */}
                <div className="bg-white rounded-lg p-6 border border-orange-200">
                    <div className="flex items-start gap-4">
                        <MapPin className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-orange-800">Alamat Lengkap</h3>
                            <p className="text-orange-700">
                                SS BS MARCIPUL<br />
                                Sendari, Mlati, Sleman<br />
                                Daerah Istimewa Yogyakarta
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tombol Navigasi */}
                <div className="bg-white rounded-lg p-6 border border-orange-200">
                    <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center gap-2">
                        <Navigation className="w-5 h-5" />
                        Navigasi
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Button
                            variant="default"
                            className="bg-orange-600 hover:bg-orange-700 text-white flex items-center gap-2"
                            asChild
                        >
                            <a
                                href={directionsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Navigation className="w-4 h-4" />
                                Petunjuk Arah
                            </a>
                        </Button>
                        <Button
                            variant="outline"
                            className="text-orange-700 border-orange-300 hover:bg-orange-100 flex items-center gap-2"
                            asChild
                        >
                            <a
                                href="https://maps.google.com/?q=SSBS MARCIPUL"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Buka di Google Maps
                            </a>
                        </Button>
                    </div>
                </div>

                {/* Info Tambahan */}
                <div className="bg-white rounded-lg p-6 border border-orange-200">
                    <div className="text-center text-orange-700">
                        <p className="font-medium mb-2">💡 Tips Berkunjung</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <p className="font-semibold">Jam Operasional:</p>
                                <p>Hubungi via WhatsApp untuk konfirmasi</p>
                            </div>
                            <div>
                                <p className="font-semibold">Akses:</p>
                                <p>Dapat diakses dengan kendaraan pribadi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
