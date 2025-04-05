"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  Star,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

export function TestimonialSlider() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Abdullah",
      position: "Professional",
      company: "",
      image: "/abdullah.png",
      quote:
        'When I thought about revamping my LinkedIn profile, I said to Ibrahim, "Ibrahim, revamp my profile." Muhammad Ibrahim revamped my LinkedIn profile; it was not good before the revamp. He designed a banner that represents me. He created an amazing carousel and a single post design. I am 100% impressed by Ibrahim\'s work, and I 100% recommend it to everyone for LinkedIn profile revamps.',
      rating: 5,
    },
    {
      id: 2,
      name: "Ayesha Tufail",
      position: "Professional",
      company: "",
      image: "/ayesha.png",
      quote:
        "Ibrahim is a talented graphic designer who revamped my LinkedIn profile professionally. He paid attention to every detail and made my profile look great. I appreciate his work and highly recommend him!",
      rating: 5,
    },
    {
      id: 3,
      name: "Rimsha Ansari",
      position: "Professional",
      company: "",
      image: "/rimsha.png",
      quote:
        "I created my LinkedIn banner with Ibrahim's design inspiration and suggestion! Ibrahim is a great talent in LinkedIn profile revamping. If you also want to stand out from the crowd and build authority and trust with your profile then he is the best option I've ever recommended.",
      rating: 5,
    },
    {
      id: 4,
      name: "Imran Mustafa",
      position: "Professional",
      company: "",
      image: "/imran.png",
      quote:
        "Ibrahim is an absolute gem when it comes to branding and design! He created a LinkedIn banner for me that not only looks visually stunning but perfectly encapsulates my professional identity. His attention to detail, creativity, and deep understanding of branding principles truly set him apart. Ibrahim took the time to listen to my vision, asked thoughtful questions, and delivered a design that exceeded my expectations— on time and with a smile. He is your go-to expert. I couldn't recommend him more highly—hire him before his calendar fills up!",
      rating: 5,
    },
    {
      id: 5,
      name: "Haseeb Ahmed",
      position: "Professional",
      company: "",
      image: "/haseeb.png",
      quote:
        "Conservation with Muhammed was very memorable his loving tone of talking was so good at end his work was totally amazing. his designing skills are so good....",
      rating: 5,
    },
    {
      id: 6,
      name: "Ruman Siddiqi",
      position: "Professional",
      company: "",
      image: "/ruman.png",
      quote:
        "Muhammad Ibrahim did an excellent job revamping my LinkedIn profile and designing my personal brand content. He created single posts, carousels, and a banner that look professional and eye-catching. The colors and design perfectly match my brand identity. I highly recommend him for anyone looking to improve their LinkedIn presence.",
      rating: 5,
    },
    {
      id: 7,
      name: "Ayesha Nazar",
      position: "Professional",
      company: "",
      image: "/ayesha-nazar.png",
      quote:
        "Muhammad Ibrahim did an incredible job designing my LinkedIn profile, making it visually appealing and professional while perfectly reflecting my personal brand. Their creativity, attention to detail, and ability to understand my needs were outstanding. I 100% recommend to Ibrahim for LINKEDIN BRANDING.",
      rating: 5,
    },
    {
      id: 8,
      name: "Asad Iqbal",
      position: "Professional",
      company: "",
      image: "/asad-iqbal.png",
      quote:
        "Working with Muhammad Ibrahim was an excellent experience! He delivered a professional and visually appealing banner and profile picture that perfectly aligned with my personal brand. Their creativity, attention to detail, and timely delivery exceeded my expectations. Highly recommend their services!",
      rating: 5,
    },
    {
      id: 9,
      name: "Saba Iqbal",
      position: "Content Marketer",
      company: "Helping DTC Brands Win with Content and Strategy",
      image: "/saba-iqbal.png",
      quote:
        "I had the pleasure of working with Muhammad Ibrahim to redesign and rebrand my LinkedIn profile, and I couldn't be happier with the results. Ibrahim's expertise in crafting a compelling professional narrative and his eye for detail are truly remarkable. He took the time to understand my personal brand, professional goals, and target audience before creating a profile that not only reflects my skills and experience but also stands out in the competitive LinkedIn landscape. His strategic insights into content creation, headline optimization, and visual presentation were invaluable. Thanks to Ibrahim's guidance, my LinkedIn profile is now more engaging, polished, and aligned with my career aspirations. I've already noticed an increase in profile views and meaningful connections. If you're looking for someone to elevate your LinkedIn presence, I highly recommend Muhammad Ibrahim. His professionalism and talent are unmatched!",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Get current, previous and next testimonials for the 3D carousel effect
  const currentTestimonial = testimonials[currentIndex];
  const prevIndex =
    (currentIndex - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (currentIndex + 1) % testimonials.length;

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-[#b01108] hover:bg-[#c01108] text-white px-4 py-1.5 text-sm rounded-full font-medium mb-4">
            Client Success
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What My <span className="text-[#b01108]">Clients</span> Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Don&apos;t just take my word for it. Here&apos;s what professionals
            have to say about working with me.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Background elements */}
          <div className="absolute -top-10 -left-10 text-gray-100 opacity-50 transform -rotate-12">
            <Quote className="h-32 w-32" />
          </div>
          <div className="absolute -bottom-10 -right-10 text-gray-100 opacity-50 transform rotate-12">
            <Quote className="h-32 w-32" />
          </div>

          {/* Testimonial card with animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: direction * 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative z-10 border border-gray-100"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Image with glow effect */}
                <div className="relative">
                  <div className="absolute inset-0 bg-[#b01108] opacity-20 rounded-full blur-xl"></div>
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#b01108] flex-shrink-0 relative z-10 shadow-lg">
                    <Image
                      src={currentTestimonial.image || "/placeholder.svg"}
                      alt={currentTestimonial.name}
                      width={112}
                      height={112}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <blockquote className="text-xl md:text-2xl font-medium text-gray-700 italic mb-6 leading-relaxed">
                    &quot;{currentTestimonial.quote}&quot;
                  </blockquote>

                  <div className="border-t border-gray-100 pt-4">
                    <h4 className="text-xl font-bold text-[#b01108]">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-gray-600">
                      {currentTestimonial.position}
                      {currentTestimonial.company &&
                        `, ${currentTestimonial.company}`}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-10">
                <button
                  onClick={handlePrev}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-4 rounded-full transition-colors shadow-md hover:shadow-lg transform hover:-translate-x-1 hover:scale-105 duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                {/* Indicators with animation */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setIsAutoPlaying(false);
                        setDirection(index > currentIndex ? 1 : -1);
                        setCurrentIndex(index);
                      }}
                      className={`h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "bg-[#b01108] w-10"
                          : "bg-gray-300 hover:bg-gray-400 w-3"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-4 rounded-full transition-colors shadow-md hover:shadow-lg transform hover:translate-x-1 hover:scale-105 duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Preview of next/previous testimonials (optional) */}
          <div className="hidden lg:flex justify-between absolute top-1/2 -translate-y-1/2 w-full">
            <div className="w-16 h-16 -left-8 absolute opacity-30 hover:opacity-50 transition-opacity">
              <Image
                src={testimonials[prevIndex].image || "/placeholder.svg"}
                alt="Previous"
                width={64}
                height={64}
                className="rounded-full border-2 border-gray-200"
              />
            </div>
            <div className="w-16 h-16 -right-8 absolute opacity-30 hover:opacity-50 transition-opacity">
              <Image
                src={testimonials[nextIndex].image || "/placeholder.svg"}
                alt="Next"
                width={64}
                height={64}
                className="rounded-full border-2 border-gray-200"
              />
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#b01108] hover:bg-[#c01108] text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
          >
            Ready to transform your profile?
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
