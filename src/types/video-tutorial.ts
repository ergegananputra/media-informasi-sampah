export interface VideoTutorial {
    id: string
    title: string
    description: string
    videoId: string
    category: string
    thumbnail?: string
    duration?: string
    published?: string
}

export interface VideoTutorialData {
    videos: VideoTutorial[]
    lastUpdated: string
}
