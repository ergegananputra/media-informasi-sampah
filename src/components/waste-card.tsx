import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface WasteCardProps {
    title: string
    description: string
    color: string
    examples: string[]
    icon: React.ReactNode
}

export function WasteCard({ title, description, color, examples, icon }: WasteCardProps) {
    return (
        <Card className={`border-2 ${color} hover:shadow-lg transition-shadow duration-300`}>
            <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-2">
                    {icon}
                </div>
                <CardTitle className="text-xl font-bold">{title}</CardTitle>
                <CardDescription className="text-sm">{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Contoh:</h4>
                    <ul className="text-sm space-y-1">
                        {examples.map((example, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-current rounded-full flex-shrink-0"></span>
                                {example}
                            </li>
                        ))}
                    </ul>
                </div>
            </CardContent>
        </Card>
    )
}
