"use client"

import { HeroSection } from "@/app/components/hero-section"
import { CalendlyEmbed } from "@/app/components/calendly-embed"
import { Navbar } from "@/app/components/navbar"
import { ServiceCard } from "@/app/components/service-card"
import { PortfolioItem } from "@/app/components/portfolio-item"
import { ProcessSection } from "@/app/components/process-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Award, CheckCircle, ImageIcon, Layout, Linkedin, Settings } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { BannerShowcase } from "@/app/components/banner-showcase"
import { TestimonialSlider } from "@/app/components/testimonial-slider"
import { SEOHead } from "@/app/components/seo-head"

export default function Home() {
  // Replace with your actual Calendly URL
  const calendlyUrl = "https://calendly.com/muhammad-ibrahim/linkedin-strategy-call"

  const services = [
    {
      icon: <Linkedin className="h-8 w-8" />,
      title: "LinkedIn Personal Branding",
      desc: "Comprehensive personal brand development to position you as an industry authority.",
      color: "from-red-500/20 to-red-600/30",
    },
    {
      icon: <Layout className="h-8 w-8" />,
      title: "Carousel Designing",
      desc: "Eye-catching, professional carousel designs that drive engagement and shares.",
      color: "from-blue-500/20 to-blue-600/30",
    },
    {
      icon: <ImageIcon className="h-8 w-8" />,
      title: "LinkedIn Banner Designing",
      desc: "Custom banner designs that make your profile stand out and reinforce your brand.",
      color: "from-green-500/20 to-green-600/30",
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "LinkedIn Management",
      desc: "End-to-end LinkedIn presence management to grow your network and influence.",
      color: "from-purple-500/20 to-purple-600/30",
    },
  ]

  const portfolioItems = [
    {
      title: "INSTAGRAM STORIES",
      image: "/images/portfolio-1.png",
    },
    {
      title: "1 MIN VIDEO/REEL",
      image: "/images/portfolio-1.png",
    },
    {
      title: "STATIC FEED POST",
      image: "/images/portfolio-1.png",
    },
  ]

  const personalBrandingFaqs = [
    {
      question: "What is personal branding on LinkedIn?",
      answer: "It's how you present yourself to attract opportunities.",
    },
    {
      question: "Why is personal branding important?",
      answer: "It helps you stand out and build trust.",
    },
    {
      question: "How do I improve my LinkedIn profile?",
      answer: "Use a good photo, strong headline, and a clear bio.",
    },
    {
      question: "What should I post on LinkedIn?",
      answer: "Share insights, success stories, and industry tips.",
    },
    {
      question: "How can I grow my LinkedIn network?",
      answer: "Connect with professionals and engage with posts.",
    },
    {
      question: "Does a LinkedIn banner matter?",
      answer: "Yes, it makes your profile look more professional.",
    },
    {
      question: "How do I get noticed by recruiters?",
      answer: "Optimize your profile and use the right keywords.",
    },
  ]

  const profileRevampingFaqs = [
    {
      question: "What is LinkedIn profile revamping?",
      answer: "It's improving your profile for better visibility and branding.",
    },
    {
      question: "Why do I need a strong profile?",
      answer: "A good profile attracts jobs, clients, and connections.",
    },
    {
      question: "What details do you need from me?",
      answer: "Work experience, skills, achievements, and a photo.",
    },
    {
      question: "How will you improve my profile?",
      answer: "I optimize your headline, summary, and keywords.",
    },
    {
      question: "Will my profile be SEO-friendly?",
      answer: "Yes, I use the right keywords to boost visibility.",
    },
    {
      question: "How long does it take?",
      answer: "It takes 2–5 days, based on the work needed.",
    },
    {
      question: "Do you design LinkedIn banners?",
      answer: "Yes, I create professional banners for branding.",
    },
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* SEO */}
      <SEOHead />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section id="services" className="bg-gradient-to-b from-white to-gray-50 py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#b01108] text-white px-5 py-2 text-sm rounded-full font-medium mb-4 shadow-md">
              Expert Services
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-[#b01108]">Services</span> I Provide
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive LinkedIn solutions to elevate your professional presence and drive meaningful connections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.desc}
                colorClass={service.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Testimonials Section */}
      <TestimonialSlider />

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#b01108] text-white px-4 py-1.5 text-sm rounded-full font-medium mb-4">My Work</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="text-[#b01108]">Portfolio</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Browse through my recent projects and see how I&apos;ve helped professionals transform their LinkedIn presence.
            </p>
          </div>

          <div className="bg-[#1D2226] rounded-xl p-6 md:p-8 mb-16 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white text-2xl font-bold">Featured</h3>
              <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 rounded-md">
                See all
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {portfolioItems.map((item, index) => (
                <PortfolioItem key={index} title={item.title} image={item.image} />
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button
              className="bg-[#b01108] hover:bg-[#8a0d06] text-white rounded-full px-8 py-6 flex items-center gap-2 mx-auto shadow-lg shadow-red-200/30 transition-all hover:scale-105"
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            >
              View All Projects
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Banner Showcase Section */}
      <BannerShowcase />

      {/* Calendly Integration */}
      <CalendlyEmbed url={calendlyUrl} />

      {/* FAQ Section */}
      <section id="faq" className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#b01108] text-white px-4 py-1.5 text-sm rounded-full font-medium mb-4">
              Got Questions?
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Frequently Asked <span className="text-[#b01108]">Questions</span>
            </h2>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
              Everything you need to know about LinkedIn optimization and personal branding.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="personal-branding" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="personal-branding" className="text-lg py-3">
                  FAQs on Personal Branding
                </TabsTrigger>
                <TabsTrigger value="profile-revamping" className="text-lg py-3">
                  FAQs on Profile Revamping
                </TabsTrigger>
              </TabsList>

              <TabsContent value="personal-branding">
                <Card className="border-0 shadow-lg">
                  <CardContent className="pt-6">
                    <Accordion type="single" collapsible className="w-full">
                      {personalBrandingFaqs.map((faq, index) => (
                        <AccordionItem key={index} value={`pb-item-${index}`} className="border-b border-gray-200">
                          <AccordionTrigger className="text-left font-medium py-5 flex hover:text-[#b01108] hover:no-underline text-lg">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600 pb-5">
                            <div className="flex gap-3">
                              <CheckCircle className="h-6 w-6 text-[#b01108] shrink-0 mt-0.5" />
                              <p className="text-lg">{faq.answer}</p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="profile-revamping">
                <Card className="border-0 shadow-lg">
                  <CardContent className="pt-6">
                    <Accordion type="single" collapsible className="w-full">
                      {profileRevampingFaqs.map((faq, index) => (
                        <AccordionItem key={index} value={`pr-item-${index}`} className="border-b border-gray-200">
                          <AccordionTrigger className="text-left font-medium py-5 flex hover:text-[#b01108] hover:no-underline text-lg">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600 pb-5">
                            <div className="flex gap-3">
                              <CheckCircle className="h-6 w-6 text-[#b01108] shrink-0 mt-0.5" />
                              <p className="text-lg">{faq.answer}</p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="mt-16 text-center">
            <Button
              className="bg-[#b01108] hover:bg-[#8a0d06] text-white rounded-full px-8 py-7 flex items-center gap-3 mx-auto text-lg shadow-lg shadow-red-200/30 transition-all hover:scale-105"
              onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Started Today
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-black text-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-[#b01108] text-white px-5 py-2 text-sm rounded-full font-medium mb-6 shadow-md">
              Limited Time Offer
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to transform your LinkedIn presence?
            </h2>
            <p className="text-gray-300 mb-10 text-xl">
              Join the top 5% of LinkedIn professionals in Pakistan and unlock new career opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Button
                className="bg-[#b01108] hover:bg-[#8a0d06] text-white rounded-full px-10 py-7 text-lg shadow-lg shadow-red-900/20 transition-all hover:scale-105"
                onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book a Consultation
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 rounded-full px-10 py-7 text-lg transition-all hover:scale-105"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Award className="h-6 w-6 text-[#b01108]" />
              <span className="font-bold text-xl">Ibrahim</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">&copy; {new Date().getFullYear()} Muhammad Ibrahim. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

