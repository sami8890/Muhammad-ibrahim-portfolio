"use client"

import { Badge } from "@/components/ui/badge"
import { CheckCircle, FileText, MessageSquare, Settings, UserCheck } from "lucide-react"

export function ProcessSection() {
    const steps = [
        {
            icon: <MessageSquare className="h-8 w-8" />,
            title: "Discovery Call",
            description: "We start with a free consultation to understand your goals, challenges, and LinkedIn aspirations.",
            color: "bg-gradient-to-br from-red-50 to-red-100",
            iconColor: "text-[#b01108]",
            number: "01",
        },
        {
            icon: <FileText className="h-8 w-8" />,
            title: "Strategy Development",
            description: "I create a customized LinkedIn strategy tailored to your industry, goals, and target audience.",
            color: "bg-gradient-to-br from-gray-50 to-gray-100",
            iconColor: "text-gray-800",
            number: "02",
        },
        {
            icon: <Settings className="h-8 w-8" />,
            title: "Profile Optimization",
            description: "Your profile gets a complete makeover with optimized content, keywords, and visual elements.",
            color: "bg-gradient-to-br from-red-50 to-red-100",
            iconColor: "text-[#b01108]",
            number: "03",
        },
        {
            icon: <UserCheck className="h-8 w-8" />,
            title: "Implementation & Review",
            description: "We implement the changes, review the results, and make adjustments to maximize your impact.",
            color: "bg-gradient-to-br from-gray-50 to-gray-100",
            iconColor: "text-gray-800",
            number: "04",
        },
    ]

    return (
        <section id="process" className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <Badge className="bg-[#b01108] text-white px-4 py-1.5 text-sm rounded-full font-medium mb-4">
                        How I Work
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        My <span className="text-[#b01108]">Process</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        A streamlined approach to transforming your LinkedIn presence and building your personal brand.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative group">
                                <div
                                    className={`${step.color} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full`}
                                >
                                    <div className="absolute -top-4 -right-4 bg-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl border-2 border-[#b01108] text-[#b01108]">
                                        {step.number}
                                    </div>

                                    <div className="mb-6">
                                        <div className={`p-4 rounded-full w-fit ${step.iconColor}`}>{step.icon}</div>
                                    </div>

                                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>

                                    {index < steps.length - 1 && (
                                        <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                                            <div className="w-8 h-2 bg-[#b01108]"></div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-gray-50 p-8 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <CheckCircle className="h-6 w-6 text-[#b01108]" />
                            The Ibrahim Advantage
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow">
                                <h4 className="font-bold text-lg mb-2">Personalized Approach</h4>
                                <p className="text-gray-600">Every strategy is tailored to your specific industry and career goals.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow">
                                <h4 className="font-bold text-lg mb-2">Data-Driven Results</h4>
                                <p className="text-gray-600">
                                    Strategies based on LinkedIn algorithm insights and industry best practices.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow">
                                <h4 className="font-bold text-lg mb-2">Ongoing Support</h4>
                                <p className="text-gray-600">
                                    Continuous guidance to help you maintain and grow your LinkedIn presence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

