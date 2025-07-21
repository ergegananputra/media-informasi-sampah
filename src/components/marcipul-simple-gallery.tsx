'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera } from "lucide-react"
import Image from "next/image"

// Daftar semua foto yang ada di folder marcipul
const imageFiles = [
    'Edited-5645.JPG',
    'Edited-5665.JPG',
    'Edited-5689.JPG',
    'Edited-5691.JPG',
    'Edited-5692.JPG',
    'Edited-5695.JPG',
    'Edited-5696.JPG',
    'Edited-5701.JPG'
]

export function MarcipulSimpleGallery() {
    const [availableImages, setAvailableImages] = useState<string[]>([])

    // Function to check available images
    useEffect(() => {
        const checkImages = async () => {
            const available: string[] = []

            for (const filename of imageFiles) {
                try {
                    // Try to fetch the image to check if it exists
                    const response = await fetch(`/images/marcipul/${filename}`, { method: 'HEAD' })
                    if (response.ok) {
                        available.push(filename)
                    }
                } catch (error) {
                    // Image not found, skip
                    console.log(`Image not found: ${filename}, error:`, error)
                }
            }

            setAvailableImages(available)
        }

        checkImages()
    }, [])

    return (
        <Card className="bg-green-50 border-2 border-green-200">
            <CardHeader className="text-center">
                <CardTitle className="flex justify-center items-center gap-2 font-bold text-green-800 text-2xl">
                    <Camera className="w-6 h-6" />
                    Foto Lainnya
                </CardTitle>
            </CardHeader>
            <CardContent>
                {availableImages.length > 0 ? (
                    <div className="gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {availableImages.map((filename, index) => (
                            <div key={index} className="group relative bg-gray-100 shadow-md hover:shadow-lg rounded-lg aspect-square overflow-hidden transition-shadow duration-300">
                                <Image
                                    src={`/images/marcipul/${filename}`}
                                    alt={`Foto kegiatan Marcipul ${index + 1}`}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="py-12 text-center">
                        <Camera className="mx-auto mb-4 w-16 h-16 text-gray-400" />
                        <p className="text-gray-600">Memuat foto...</p>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
