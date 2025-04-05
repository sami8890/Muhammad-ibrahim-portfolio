"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Calendar, ExternalLink } from "lucide-react"

interface CalendlyEmbedProps {
    url: string
}

export function CalendlyEmbed({ url }: CalendlyEmbedProps) {
    const handleBookingClick = () => {
        // Open Calendly in a new tab
        window.open(url, "_blank")
    }

    return (
        <section id="booking" className="bg-gradient-to-r from-black to-[#1a0302] text-white py-20 lg:py-28">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <Badge className="bg-[#b01108] text-white px-4 py-1.5 text-sm rounded-full font-medium">
                            Let&apos;s Connect
                        </Badge>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Book a Free Strategy Call</h2>
                        <p className="text-gray-300 text-lg">
                            Schedule a 30-minute consultation to discuss your LinkedIn goals and how I can help you achieve them.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Personalized LinkedIn strategy",
                                "Profile optimization tips",
                                "Content ideas for your industry",
                                "Growth tactics for your specific goals",
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <CheckCircle className="h-6 w-6 text-[#b01108] shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Button
                        
                            className="bg-[#b01108] hover:bg-[#8a0d06] text-white rounded-full px-8 py-6 flex items-center gap-2 shadow-lg shadow-red-900/20 transition-all hover:scale-105 mt-4"
                            
                            onClick={handleBookingClick}
                            
                        >
                            <Calendar className="h-5 w-5 mr-2" />
                            Schedule Now
                        </Button>
                    </div>

                    <div className="bg-[#0e0e0e] rounded-2xl shadow-2xl overflow-hidden p-8 flex flex-col items-center justify-center h-[600px] text-center">
                        <Calendar className="h-20 w-20 text-[#b01108] mb-6" />
                        <h3 className="text-2xl font-bold mb-4">Ready When You Are</h3>
                        <p className="text-gray-300 mb-8 max-w-md">
                            Click the button below to open my Calendly scheduling page and find a time that works for you.
                        </p>
                        <Button
                            className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 flex items-center gap-2 transition-all hover:scale-105"
                            onClick={handleBookingClick}
                        >
                            Open Scheduling Page
                            <ExternalLink className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

