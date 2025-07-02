'use client'

import { useState, useEffect } from 'react'
import { VideoTutorialData } from '@/types/video-tutorial'

interface UseVideoTutorialsOptions {
    githubUsername: string
    repositoryName: string
    filePath?: string
    branch?: string
}

export function useVideoTutorials({
    githubUsername,
    repositoryName,
    filePath = 'video_tutorial_data.json',
    branch = 'main'
}: UseVideoTutorialsOptions) {
    const [data, setData] = useState<VideoTutorialData | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchVideoData = async () => {
            try {
                setLoading(true)
                setError(null)

                // Construct GitHub raw content URL
                const url = `https://raw.githubusercontent.com/${githubUsername}/${repositoryName}/${branch}/${filePath}`

                const response = await fetch(url, {
                    cache: 'no-store', // Always fetch fresh data
                    headers: {
                        'Accept': 'application/json',
                    }
                })

                if (!response.ok) {
                    throw new Error(`Failed to fetch video data: ${response.status} ${response.statusText}`)
                }

                const jsonData: VideoTutorialData = await response.json()

                // Validate data structure
                if (!jsonData.videos || !Array.isArray(jsonData.videos)) {
                    throw new Error('Invalid data format: videos array is missing')
                }

                setData(jsonData)
            } catch (err) {
                console.error('Error fetching video tutorials:', err)
                setError(err instanceof Error ? err.message : 'Unknown error occurred')

                // Fallback data in case of error
                setData({
                    videos: [
                        {
                            id: 'fallback-1',
                            title: 'Cara Memilah Sampah Organik dan Anorganik',
                            description: 'Video ini menjelaskan perbedaan sampah organik dan anorganik serta cara memilahnya dengan benar.',
                            videoId: 'nrANKUUHBf0',
                            category: 'pemilahan'
                        },
                        {
                            id: 'fallback-2',
                            title: 'Pengolahan Sampah di Rumah',
                            description: 'Pelajari cara mengolah sampah organik menjadi kompos dan cara mendaur ulang sampah anorganik.',
                            videoId: 'B4fKi53KZAE',
                            category: 'pengolahan'
                        }
                    ],
                    lastUpdated: new Date().toISOString()
                })
            } finally {
                setLoading(false)
            }
        }

        fetchVideoData()
    }, [githubUsername, repositoryName, filePath, branch])

    return { data, loading, error }
}
