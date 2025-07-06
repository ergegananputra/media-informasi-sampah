import { AlertCircle, CheckCircle, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface GitHubStatusProps {
    loading: boolean
    error: string | null
    lastUpdated?: string
}

export function GitHubStatus({ loading, error, lastUpdated }: GitHubStatusProps) {
    if (loading) {
        return (
            <Badge variant="outline" className="text-blue-600 border-blue-200">
                <Clock className="w-3 h-3 mr-1" />
                Memuat data... ({lastUpdated ? `Terakhir diperbarui: ${lastUpdated}` : ""})
            </Badge>
        )
    }

    if (error) {
        return (
            <Badge variant="outline" className="text-amber-600 border-amber-200">
                <AlertCircle className="w-3 h-3 mr-1" />
                Data Cadangan
            </Badge>
        )
    }

    return (
        <Badge variant="outline" className="text-green-600 border-green-200">
            <CheckCircle className="w-3 h-3 mr-1" />
            Data Terbaru
        </Badge>
    )
}
