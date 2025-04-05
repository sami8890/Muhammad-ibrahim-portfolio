"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Award, Linkedin, Star, TrendingUp, Users } from "lucide-react"

export function HeroSection() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <section className="container mx-auto px-4 py-16 md:py-24 lg:py-28 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-br from-red-50 to-red-100 rounded-3xl opacity-80"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-br from-red-200/30 to-red-300/30 blur-xl"></div>
            <div className="absolute bottom-12 left-12 w-32 h-32 rounded-full bg-gradient-to-br from-red-200/20 to-red-300/20 blur-lg hidden md:block"></div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 left-1/3 w-6 h-6 rounded-full bg-red-500/10 hidden md:block"></div>
            <div className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-full bg-red-500/10 hidden md:block"></div>
            <div className="absolute top-1/2 right-1/3 w-8 h-8 rounded-full border-2 border-red-200 hidden md:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                <div
                    className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                    <div className="flex flex-wrap gap-3">
                        <Badge className="bg-gradient-to-r from-[#b01108] to-[#d42920] text-white px-5 py-2.5 text-sm rounded-full font-medium shadow-md transform transition-transform hover:scale-105 hover:shadow-lg">
                            #1 LinkedIn Expert
                        </Badge>
                        <Badge className="bg-black text-white px-5 py-2.5 text-sm rounded-full font-medium shadow-md transform transition-transform hover:scale-105 hover:shadow-lg">
                            <Star className="h-4 w-4 mr-1.5 fill-[#b01108] text-[#b01108]" />
                            Top 5% in Pakistan
                        </Badge>
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                            Build your
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#b01108] to-[#e63e36] my-1">
                                personal brand
                            </span>
                            on LinkedIn
                        </h1>
                    </div>

                    <div className="text-gray-600 text-lg md:text-xl max-w-xl leading-relaxed">
                        Transform your LinkedIn presence with expert profile optimization, content strategy, and growth tactics that
                        attract opportunities and establish your authority.
                    </div>

                    <div className="flex flex-wrap gap-5 pt-4">
                        <Button
                            className="bg-gradient-to-r from-[#b01108] to-[#d42920] hover:from-[#8a0d06] hover:to-[#b01108] text-white rounded-full px-8 py-7 flex items-center gap-3 shadow-lg shadow-red-200/50 text-lg transition-all hover:scale-105 hover:shadow-xl"
                            onClick={() => {
                                window.open("https://www.linkedin.com/in/muhammad-ibrahim-seo-content-writer/", "_blank")
                            }}
                        >
                            Revamp My Profile
                            <ArrowRight className="h-5 w-5 animate-pulse" />
                        </Button>
                        <Button
                            variant="outline"
                            className="border-2 border-black text-black hover:bg-gray-100 rounded-full px-8 py-7 text-lg transition-all hover:scale-105 hover:shadow-md"
                            onClick={() => {
                                const element = document.getElementById("services")
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth" })
                                }
                            }}
                        >
                            View Services
                        </Button>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 mt-8">
                        <div className="flex items-center gap-2 bg-gradient-to-r from-black to-gray-800 text-white px-5 py-3 rounded-xl shadow-md transition-transform hover:scale-105">
                            <Linkedin className="h-5 w-5 text-[#b01108]" />
                            <span className="font-medium"># 154</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-xl shadow-md transition-transform hover:scale-105">
                            <TrendingUp className="h-5 w-5 text-[#b01108]" />
                            <span className="font-medium">50+ Profiles Optimized</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-xl shadow-md transition-transform hover:scale-105">
                            <Users className="h-5 w-5 text-[#b01108]" />
                            <span className="font-medium">98% Success Rate</span>
                        </div>
                    </div>
                </div>

                <div
                    className={`relative flex justify-center md:justify-end transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                    <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] rounded-full overflow-hidden border-4 border-[#b01108] shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(176,17,8,0.3)]">
                        {/* Animated gradient border */}
                        <div
                            className="absolute inset-0 rounded-full bg-gradient-to-r from-[#b01108] to-[#e63e36] animate-spin-slow opacity-70 -z-10"
                            style={{ padding: "6px", margin: "-6px" }}
                        ></div>

                        <Image
                            src="/main.png"
                            alt="Muhammad Ibrahim"
                            width={500}
                            height={500}
                            className="object-cover"
                            priority
                            onError={(e) => {
                                e.currentTarget.src = "/placeholder.svg?height=500&width=500"
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>

                    <div className="absolute -bottom-4 right-1/4 md:right-4 bg-gradient-to-r from-black to-gray-800 text-white px-6 py-3.5 rounded-full flex items-center gap-2 shadow-xl transition-transform hover:scale-105 animate-bounce-slow">
                        <Award className="h-6 w-6 text-[#b01108]" />
                        <span className="font-medium">LinkedIn Pakistan</span>
                    </div>

                    <div className="absolute top-10 left-0 md:-left-4 bg-white text-black px-4 py-2.5 rounded-full flex items-center gap-2 shadow-lg transition-transform hover:scale-105 animate-pulse-slow">
                        <Star className="h-5 w-5 text-[#b01108] fill-[#b01108]" />
                        <span className="font-medium">Top Rated</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

