import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight,  Badge,  CheckCircle,  } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
export default function Faq() {

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

    
    <div>
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
              Everything you need to know about LinkedIn optimization and
              personal branding.
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
                        <AccordionItem
                          key={index}
                          value={`pb-item-${index}`}
                          className="border-b border-gray-200"
                        >
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
                        <AccordionItem
                          key={index}
                          value={`pr-item-${index}`}
                          className="border-b border-gray-200"
                        >
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
              onClick={() =>
                document
                  .getElementById("booking")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get Started Today
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
