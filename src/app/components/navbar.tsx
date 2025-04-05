"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Award, Menu, X } from "lucide-react"

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/95 py-3 shadow-lg" : "bg-black py-4"}`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between sticky top-0">
                <div className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-[#b01108]" />
                    <span className="font-bold text-xl text-white">Ibrahim</span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <a
                        href="#"
                        className="text-white hover:text-[#b01108] transition-colors font-medium"
                        onClick={(e) => {
                            e.preventDefault()
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }}
                    >
                        Home
                    </a>
                    <a
                        href="#services"
                        className="text-white hover:text-[#b01108] transition-colors font-medium"
                        onClick={(e) => {
                            e.preventDefault()
                            const element = document.getElementById("services")
                            if (element) {
                                element.scrollIntoView({ behavior: "smooth" })
                            }
                        }}
                    >
                        Services
                    </a>
                    <a
                        href="#portfolio"
                        className="text-white hover:text-[#b01108] transition-colors font-medium"
                        onClick={(e) => {
                            e.preventDefault()
                            const element = document.getElementById("portfolio")
                            if (element) {
                                element.scrollIntoView({ behavior: "smooth" })
                            }
                        }}
                    >
                        Portfolio
                    </a>
                    <a
                        href="#banners"
                        className="text-white hover:text-[#b01108] transition-colors font-medium"
                        onClick={(e) => {
                            e.preventDefault()
                            const element = document.getElementById("banners")
                            if (element) {
                                element.scrollIntoView({ behavior: "smooth" })
                            }
                        }}
                    >
                        Banners
                    </a>
                    <a
                        href="#faq"
                        className="text-white hover:text-[#b01108] transition-colors font-medium"
                        onClick={(e) => {
                            e.preventDefault()
                            const element = document.getElementById("faq")
                            if (element) {
                                element.scrollIntoView({ behavior: "smooth" })
                            }
                        }}
                    >
                        FAQ
                    </a>
                    <a
                        href="#booking"
                        className="text-white hover:text-[#b01108] transition-colors font-medium"
                        onClick={(e) => {
                            e.preventDefault()
                            const element = document.getElementById("booking")
                            if (element) {
                                element.scrollIntoView({ behavior: "smooth" })
                            }
                        }}
                    >
                        Book Call
                    </a>
                </nav>

                <div className="flex items-center gap-4">
                    <Button className="bg-[#b01108] hover:bg-[#8a0d06] text-white rounded-full shadow-lg shadow-red-200/30 transition-all hover:scale-105">
                        Contact Me
                    </Button>

                    {/* Mobile menu button */}
                    <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-black/95 absolute top-full left-0 w-full py-4 px-4 shadow-lg">
                    <nav className="flex flex-col space-y-4">
                        <a
                            href="#"
                            className="text-white hover:text-[#b01108] transition-colors font-medium py-2 px-4 rounded-lg hover:bg-white/10"
                            onClick={(e) => {
                                e.preventDefault()
                                window.scrollTo({ top: 0, behavior: "smooth" })
                                setMobileMenuOpen(false)
                            }}
                        >
                            Home
                        </a>
                        <a
                            href="#services"
                            className="text-white hover:text-[#b01108] transition-colors font-medium py-2 px-4 rounded-lg hover:bg-white/10"
                            onClick={(e) => {
                                e.preventDefault()
                                const element = document.getElementById("services")
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth" })
                                    setMobileMenuOpen(false)
                                }
                            }}
                        >
                            Services
                        </a>
                        <a
                            href="#portfolio"
                            className="text-white hover:text-[#b01108] transition-colors font-medium py-2 px-4 rounded-lg hover:bg-white/10"
                            onClick={(e) => {
                                e.preventDefault()
                                const element = document.getElementById("portfolio")
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth" })
                                    setMobileMenuOpen(false)
                                }
                            }}
                        >
                            Portfolio
                        </a>
                        <a
                            href="#banners"
                            className="text-white hover:text-[#b01108] transition-colors font-medium py-2 px-4 rounded-lg hover:bg-white/10"
                            onClick={(e) => {
                                e.preventDefault()
                                const element = document.getElementById("banners")
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth" })
                                    setMobileMenuOpen(false)
                                }
                            }}
                        >
                            Banners
                        </a>
                        <a
                            href="#faq"
                            className="text-white hover:text-[#b01108] transition-colors font-medium py-2 px-4 rounded-lg hover:bg-white/10"
                            onClick={(e) => {
                                e.preventDefault()
                                const element = document.getElementById("faq")
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth" })
                                    setMobileMenuOpen(false)
                                }
                            }}
                        >
                            FAQ
                        </a>
                        <a
                            href="#booking"
                            className="text-white hover:text-[#b01108] transition-colors font-medium py-2 px-4 rounded-lg hover:bg-white/10"
                            onClick={(e) => {
                                e.preventDefault()
                                const element = document.getElementById("booking")
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth" })
                                    setMobileMenuOpen(false)
                                }
                            }}
                        >
                            Book Call
                        </a>
                    </nav>
                </div>
            )}
        </header>
    )
}

