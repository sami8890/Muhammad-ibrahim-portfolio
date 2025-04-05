"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

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
            image: "/banner/first.png",
            category: "Corporate",
        },
        {
            id: 2,
            title: "Creative LinkedIn Banner",
            description: "Eye-catching design for creative professionals",
            image: "/banner/second.png",
            category: "Creative",
        },
        {
            id: 3,
            title: "Tech LinkedIn Banner",
            description: "Modern design for tech professionals",
            image: "/banner/third.png",
            category: "Technology",
        },
        {
            id: 4,
            title: "Minimalist LinkedIn Banner",
            description: "Clean, minimalist design for any professional",
            image: "/banner/forth.png",
            category: "Minimalist",
        },
        {
            id: 5,
            title: "Elegant LinkedIn Banner",
            description: "Sophisticated design for business professionals",
            image: "/banner/fifth.png",
            category: "Elegant",
        },
        {
            id: 6,
            title: "Modern LinkedIn Banner",
            description: "Contemporary design for forward-thinking professionals",
            image: "/banner/sixth.png",
            category: "Modern",
        },
        {
            id: 7,
            title: "Bold LinkedIn Banner",
            description: "Strong visual impact for standout professionals",
            image: "/banner/seventh.png",
            category: "Bold",
        },
        {
            id: 8,
            title: "Artistic LinkedIn Banner",
            description: "Creative design for artistic professionals",
            image: "/banner/eight.png",
            category: "Artistic",
        },
        {
            id: 9,
            title: "Professional LinkedIn Banner",
            description: "Polished design for established professionals",
            image: "/banner/nine.png",
            category: "Professional",
        },
    ]

    const [currentBanner, setCurrentBanner] = useState<Banner>(banners[0])
    const [isLoading, setIsLoading] = useState(true)
    const [direction, setDirection] = useState(0) // -1 for left, 1 for right

    // Handle image load complete
    const handleImageLoad = () => {
        setIsLoading(false)
    }

    // Preload images
    useEffect(() => {
        banners.forEach((banner) => {
            const img = new window.Image()
            img.src = banner.image
        })
    }, [])

    const nextBanner = () => {
        setDirection(1)
        const currentIndex = banners.findIndex((banner) => banner.id === currentBanner.id)
        const nextIndex = (currentIndex + 1) % banners.length
        setCurrentBanner(banners[nextIndex])
    }

    const prevBanner = () => {
        setDirection(-1)
        const currentIndex = banners.findIndex((banner) => banner.id === currentBanner.id)
        const prevIndex = (currentIndex - 1 + banners.length) % banners.length
        setCurrentBanner(banners[prevIndex])
    }

    return (
        <section id="banners" className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-12">
                    <Badge className="bg-[#b01108] text-white px-4 py-1.5 text-sm rounded-full font-medium mb-4">
                        LinkedIn Banners
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Custom <span className="text-[#b01108]">Banner</span> Designs
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Stand out on LinkedIn with professionally designed banners that showcase your personal brand.
                    </p>
                </div>

                {/* Main banner showcase with fixed display */}
                <div className="mb-16">
                    <div className="relative bg-gray-50 rounded-xl overflow-hidden shadow-sm">
                        {/* Loading indicator */}
                        {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
                                <div className="w-8 h-8 border-3 border-[#b01108] border-t-transparent rounded-full animate-spin"></div>
                            </div>
                        )}

                        {/* Banner image with animation - fixed to show full image */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentBanner.id}
                                initial={{ opacity: 0, x: direction * 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: direction * -30 }}
                                transition={{ duration: 0.3 }}
                                className="w-full"
                            >
                                {/* Fixed aspect ratio to match LinkedIn banner (1584x396) */}
                                <div className="w-full h-[200px] md:h-[250px] lg:h-[300px] relative">
                                    <Image
                                        src={currentBanner.image || "/placeholder.svg"}
                                        alt={currentBanner.title}
                                        fill
                                        className="object-contain" // Changed to contain to show full image
                                        onLoad={handleImageLoad}
                                        priority
                                    />
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation buttons - simplified and more subtle */}
                        <div className="absolute inset-y-0 left-0 flex items-center z-10">
                            <button
                                className="bg-white/80 text-gray-800 p-2 rounded-full ml-3 hover:bg-white transition-colors"
                                onClick={prevBanner}
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center z-10">
                            <button
                                className="bg-white/80 text-gray-800 p-2 rounded-full mr-3 hover:bg-white transition-colors"
                                onClick={nextBanner}
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    {/* Banner info - clean and minimal */}
                    <div className="mt-4 text-center">
                        <h3 className="text-xl font-medium text-gray-900">{currentBanner.title}</h3>
                        <p className="text-gray-600 mt-1">{currentBanner.description}</p>
                    </div>
                </div>

                {/* Banner thumbnails - clean grid with fixed display */}
                <div className="mb-16">
                    <h3 className="text-xl font-medium mb-6 text-center">Browse All Designs</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        {banners.map((banner) => (
                            <div
                                key={banner.id}
                                className={`
                                    cursor-pointer rounded-lg overflow-hidden transition-all duration-300
                                    ${currentBanner.id === banner.id ? "ring-2 ring-[#b01108]" : "hover:shadow-md"}
                                `}
                                onClick={() => setCurrentBanner(banner)}
                            >
                                {/* Fixed height for thumbnails */}
                                <div className="relative h-[80px] md:h-[100px]">
                                    <Image
                                        src={banner.image || "/placeholder.svg"}
                                        alt={banner.title}
                                        fill
                                        className="object-contain" // Changed to contain to show full image
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to action - clean and focused */}
                <div className="bg-gray-50 p-8 rounded-xl text-center">
                    <h3 className="text-xl font-medium mb-3">Ready for Your Custom Banner?</h3>
                    <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                        Let&apos;s create something that represents your brand perfectly and makes you stand out on LinkedIn.
                    </p>
                    <Button className="bg-[#b01108] hover:bg-[#8a0d06] text-white px-6 py-2 rounded-full">
                        Request Custom Banner
                        <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                </div>
            </div>
        </section>
    )
}

