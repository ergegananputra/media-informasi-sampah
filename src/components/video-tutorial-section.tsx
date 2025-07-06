'use client'

import { Play, Clock, Calendar, AlertCircle, Loader2 } from "lucide-react"
import { YouTubeEmbed } from "@/components/youtube-embed"
import { GitHubStatus } from "@/components/github-status"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useVideoTutorials } from "@/hooks/useVideoTutorials"
import { VideoTutorial } from "@/types/video-tutorial"

interface VideoTutorialSectionProps {
    githubUsername: string
    repositoryName: string
    filePath?: string
    branch?: string
}

export function VideoTutorialSection({
    githubUsername,
    repositoryName,
    filePath = 'video_tutorial_data.json',
    branch = 'main'
}: VideoTutorialSectionProps) {
    const { data, loading, error } = useVideoTutorials({
        githubUsername,
        repositoryName,
        filePath,
        branch
    })

    if (loading) {
        return (
            <section className="mb-12">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
                        <Play className="w-8 h-8" />
                        Video Tutorial Pemilahan Sampah
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Memuat video tutorial...
                    </p>
                </div>

                <div className="flex items-center justify-center py-12">
                    <div className="flex items-center gap-3 text-gray-600">
                        <Loader2 className="w-6 h-6 animate-spin" />
                        <span>Mengambil data video tutorial...</span>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="mb-12">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
                    <Play className="w-8 h-8" />
                    Video Tutorial Pemilahan Sampah
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Tonton video berikut untuk mempelajari cara memilah sampah dengan benar
                </p>

                <div className="flex items-center justify-center gap-4 mt-4">
                    <GitHubStatus
                        loading={loading}
                        error={error}
                        lastUpdated={data?.lastUpdated}
                    />
                    {data?.lastUpdated && (
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-500">
                                {new Date(data.lastUpdated).toLocaleDateString('id-ID')}
                            </span>
                        </div>
                    )}
                </div>
            </div>

            {error && (
                <Card className="border-2 border-amber-200 bg-amber-50 mb-6">
                    <CardContent className="pt-6">
                        <div className="flex items-center gap-3 text-amber-700">
                            <AlertCircle className="w-5 h-5" />
                            <div>
                                <p className="font-medium">Menggunakan data cadangan</p>
                                <p className="text-sm">Tidak dapat mengambil data terbaru dari GitHub: {error}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {data?.videos.map((video: VideoTutorial, index: number) => (
                    <VideoCard key={video.id || index} video={video} />
                ))}
            </div>

            {data?.videos.length === 0 && (
                <Card className="border-2 border-gray-200">
                    <CardContent className="pt-6 text-center">
                        <p className="text-gray-600">Belum ada video tutorial yang tersedia.</p>
                    </CardContent>
                </Card>
            )}
        </section>
    )
}

function VideoCard({ video }: { video: VideoTutorial }) {
    return (
        <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-gray-800 flex-1">
                    {video.title}
                </h3>
                {video.category && (
                    <Badge variant="outline" className="text-xs">
                        {video.category}
                    </Badge>
                )}
            </div>

            <YouTubeEmbed
                videoId={video.videoId}
                title={video.title}
            />

            <div className="space-y-2">
                <p className="text-sm text-gray-600">
                    {video.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-gray-500">
                    {video.duration && (
                        <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{video.duration}</span>
                        </div>
                    )}
                    {video.published && (
                        <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(video.published).toLocaleDateString('id-ID')}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
