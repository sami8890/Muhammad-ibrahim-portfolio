"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import type { ReactNode } from "react"

interface ServiceCardProps {
    icon: ReactNode
    title: string
    description: string
    colorClass: string
}

export function ServiceCard({ icon, title, description, colorClass }: ServiceCardProps) {
    return (
        <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#b01108]/10 to-black/5 rounded-2xl transform group-hover:scale-105 transition-all duration-300 blur-xl opacity-70"></div>
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:translate-y-[-8px] relative z-10 border border-gray-100 h-full flex flex-col">
                <div
                    className={`bg-gradient-to-br ${colorClass} p-5 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform`}
                >
                    <div className="text-[#b01108] group-hover:text-black transition-colors">{icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-gray-600 mb-6">{description}</p>
                <div className="mt-auto">
                    <Button
                        className="bg-black hover:bg-[#b01108] text-white rounded-lg py-2 px-4 flex items-center gap-2 group-hover:bg-[#b01108] transition-colors"
                        onClick={() => {
                            const bookingSection = document.getElementById("booking")
                            if (bookingSection) {
                                bookingSection.scrollIntoView({ behavior: "smooth" })
                            }
                        }}
                    >
                        Learn more
                        <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

