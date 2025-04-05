"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink, Maximize2 } from "lucide-react"

interface Banner {
    id: number
    title: string
    description: string
    image: string
    category: string
}

export function BannerShowcase() {
    const banners: Banner[] = [
        {
            id: 1,
            title: "Professional LinkedIn Banner",
            description: "Clean, professional design for corporate professionals",
            image: "/images/portfolio-1.png", // Replace with actual banner images
            category: "Corporate",
        },
        {
            id: 2,
            title: "Creative LinkedIn Banner",
            description: "Eye-catching design for creative professionals",
            image: "/images/portfolio-1.png", // Replace with actual banner images
            category: "Creative",
        },
        {
            id: 3,
            title: "Tech LinkedIn Banner",
            description: "Modern design for tech professionals",
            image: "/images/portfolio-1.png", // Replace with actual banner images
            category: "Technology",
        },
        {
            id: 4,
            title: "Minimalist LinkedIn Banner",
            description: "Clean, minimalist design for any professional",
            image: "/images/portfolio-1.png", // Replace with actual banner images
            category: "Minimalist",
        },
    ]

    const [currentBanner, setCurrentBanner] = useState<Banner>(banners[0])
    const [isFullscreen, setIsFullscreen] = useState(false)

    const nextBanner = () => {
        const currentIndex = banners.findIndex((banner) => banner.id === currentBanner.id)
        const nextIndex = (currentIndex + 1) % banners.length
        setCurrentBanner(banners[nextIndex])
    }

    const prevBanner = () => {
        const currentIndex = banners.findIndex((banner) => banner.id === currentBanner.id)
        const prevIndex = (currentIndex - 1 + banners.length) % banners.length
        setCurrentBanner(banners[prevIndex])
    }

    return (
        <section id="banners" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <Badge className="bg-[#b01108] text-white px-4 py-1.5 text-sm rounded-full font-medium mb-4">
                        LinkedIn Banners
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Custom <span className="text-[#b01108]">Banner</span> Designs
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Stand out on LinkedIn with professionally designed banners that showcase your personal brand.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="relative bg-black/5 rounded-2xl p-6 md:p-10 shadow-xl">
                        {/* Banner showcase */}
                        <div className="relative aspect-[2.7/1] w-full overflow-hidden rounded-xl mb-8">
                            <Image
                                src={currentBanner.image || "/placeholder.svg"}
                                alt={currentBanner.title}
                                width={1584}
                                height={396}
                                className="w-full h-full object-cover"
                            />

                            {/* Fullscreen button */}
                            <button
                                className="absolute top-4 right-4 bg-black/70 text-white p-2 rounded-full hover:bg-black transition-colors"
                                onClick={() => setIsFullscreen(!isFullscreen)}
                            >
                                <Maximize2 className="h-5 w-5" />
                            </button>

                            {/* Navigation buttons */}
                            <div className="absolute inset-y-0 left-0 flex items-center">
                                <button
                                    className="bg-black/70 text-white p-2 rounded-full ml-4 hover:bg-black transition-colors"
                                    onClick={prevBanner}
                                >
                                    <ChevronLeft className="h-6 w-6" />
                                </button>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center">
                                <button
                                    className="bg-black/70 text-white p-2 rounded-full mr-4 hover:bg-black transition-colors"
                                    onClick={nextBanner}
                                >
                                    <ChevronRight className="h-6 w-6" />
                                </button>
                            </div>
                        </div>

                        {/* Banner info */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div>
                                <h3 className="text-2xl font-bold">{currentBanner.title}</h3>
                                <div className="flex items-center gap-3 mt-2">
                                    <Badge className="bg-gray-800 text-white">{currentBanner.category}</Badge>
                                    <p className="text-gray-600">{currentBanner.description}</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Button className="bg-[#b01108] hover:bg-[#8a0d06] text-white rounded-lg flex items-center gap-2">
                                    <ExternalLink className="h-4 w-4" />
                                    Preview
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Banner thumbnails */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                        {banners.map((banner) => (
                            <div
                                key={banner.id}
                                className={`
                  cursor-pointer rounded-lg overflow-hidden border-2 transition-all
                  ${currentBanner.id === banner.id ? "border-[#b01108] shadow-lg scale-105" : "border-transparent hover:border-gray-300"}
                `}
                                onClick={() => setCurrentBanner(banner)}
                            >
                                <div className="aspect-[2.7/1] relative">
                                    <Image
                                        src={banner.image || "/placeholder.svg"}
                                        alt={banner.title}
                                        width={300}
                                        height={111}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Call to action */}
                    <div className="mt-16 text-center">
                        <p className="text-gray-600 mb-6">
                            Need a custom banner for your LinkedIn profile? Let&apos;s create something that represents your brand
                            perfectly.
                        </p>
                        <Button className="bg-black hover:bg-[#b01108] text-white rounded-full px-8 py-6 flex items-center gap-2 mx-auto shadow-lg transition-all hover:scale-105">
                            Request Custom Banner
                            <ExternalLink className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Fullscreen modal */}
            {isFullscreen && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setIsFullscreen(false)}
                >
                    <div className="relative max-w-7xl w-full">
                        <Image
                            src={currentBanner.image || "/placeholder.svg"}
                            alt={currentBanner.title}
                            width={1584}
                            height={396}
                            className="w-full h-auto"
                        />
                        <button
                            className="absolute top-4 right-4 bg-white/20 text-white p-2 rounded-full hover:bg-white/40 transition-colors"
                            onClick={() => setIsFullscreen(false)}
                        >
                            <Maximize2 className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            )}
        </section>
    )
}

