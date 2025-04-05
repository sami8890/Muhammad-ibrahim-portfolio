import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

interface PortfolioItemProps {
    title: string
    image: string
    category?: string
}

export function PortfolioItem({ title, image, category = "LinkedIn Content" }: PortfolioItemProps) {
    return (
        <div className="bg-[#38434F] rounded-lg overflow-hidden group cursor-pointer transition-all hover:shadow-2xl">
            <div className="relative">
                <Image
                    src={image || "/placeholder.svg?height=250&width=400"}
                    alt={title}
                    width={400}
                    height={250}
                    className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="outline" className="text-white border-white rounded-full">
                        <ExternalLink className="h-5 w-5 mr-2" />
                        View Project
                    </Button>
                </div>
            </div>
            <div className="p-4">
                <h4 className="text-white font-bold">{title}</h4>
                <p className="text-gray-300 text-sm mt-1">{category}</p>
            </div>
        </div>
    )
}

