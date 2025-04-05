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
  MessageCircle,
  ChevronDown,
  ChevronUp
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
  const [expandedQuotes, setExpandedQuotes] = useState<Record<number, boolean>>({});

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

  // Toggle expanded/collapsed quote
  const toggleQuote = (id: number) => {
    setExpandedQuotes(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Short quote with ellipsis
  const shortenQuote = (quote: string) => {
    return quote.length > 150 ? quote.substring(0, 150) + "..." : quote;
  };

  // Get current, previous and next testimonials for the 3D carousel effect
  const currentTestimonial = testimonials[currentIndex];
  const prevIndex =
    (currentIndex - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (currentIndex + 1) % testimonials.length;

  // Check if current quote is expanded
  const isExpanded = expandedQuotes[currentTestimonial.id] || false;
  // Check if current quote needs a "See More" button
  const needsSeeMore = currentTestimonial.quote.length > 150;

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-gray-50 to-transparent opacity-70"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-50 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-red-50 rounded-full filter blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <Badge className="bg-[#b01108] hover:bg-[#b01108] text-white px-5 py-2 text-sm rounded-full font-medium mb-6">
            <MessageCircle className="h-4 w-4 mr-2" /> Client Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-[#b01108] to-gray-900 bg-clip-text text-transparent">
            What My <span className="text-[#b01108]">Clients</span> Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
            Don&apos;t just take my word for it. Here&apos;s what professionals
            have to say about working with me.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Quote decorations with better positioning and subtle animation */}
          <motion.div
            className="absolute -top-16 -left-16 text-gray-100 opacity-30"
            animate={{
              rotate: [-10, -5, -10],
              opacity: [0.3, 0.4, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Quote className="h-40 w-40" />
          </motion.div>
          <motion.div
            className="absolute -bottom-16 -right-16 text-gray-100 opacity-30"
            animate={{
              rotate: [10, 5, 10],
              opacity: [0.3, 0.4, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Quote className="h-40 w-40" />
          </motion.div>

          {/* Card shadow and backdrop */}
          <div className="absolute inset-x-6 top-10 bottom-10 bg-gradient-to-r from-red-100 to-gray-100 rounded-3xl filter blur-xl opacity-40"></div>

          {/* Testimonial card with animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: direction * 50, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: direction * -50, y: 20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative z-10 border border-gray-100"
              style={{
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(176, 17, 8, 0.05)"
              }}
            >
              <div className="flex flex-col md:flex-row gap-10 items-center">
                {/* Image with enhanced glow effect */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#b01108] to-red-400 opacity-20 rounded-full blur-2xl transform -translate-y-1"></div>
                  <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white ring-4 ring-[#b01108]/20 flex-shrink-0 relative z-10 shadow-lg">
                    <Image
                      src={currentTestimonial.image || "/placeholder.svg"}
                      alt={currentTestimonial.name}
                      width={144}
                      height={144}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                {/* Content with improved layout */}
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 fill-yellow-400 text-yellow-400 drop-shadow-sm"
                      />
                    ))}
                  </div>

                  <blockquote className="text-xl md:text-2xl font-medium text-gray-700 italic mb-4 leading-relaxed relative">
                    <span className="absolute -top-6 -left-6 text-red-100 opacity-30 text-4xl">&apos;</span>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`quote-${currentTestimonial.id}-${isExpanded ? 'expanded' : 'collapsed'}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {isExpanded ? currentTestimonial.quote : shortenQuote(currentTestimonial.quote)}
                      </motion.div>
                    </AnimatePresence>
                    <span className="absolute -bottom-6 -right-2 text-red-100 opacity-30 text-4xl">&apos;</span>
                  </blockquote>

                  {/* See More / See Less Button */}
                  {needsSeeMore && (
                    <motion.button
                      onClick={() => toggleQuote(currentTestimonial.id)}
                      className="text-[#b01108] font-medium flex items-center mb-4 hover:underline"
                      whileHover={{ x: isExpanded ? -3 : 3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {isExpanded ? (
                        <>See less <ChevronUp className="h-4 w-4 ml-1" /></>
                      ) : (
                        <>See more <ChevronDown className="h-4 w-4 ml-1" /></>
                      )}
                    </motion.button>
                  )}

                  <div className="border-t border-gray-100 pt-6 mt-2">
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

              {/* Navigation with improved styling */}
              <div className="flex justify-between items-center mt-12">
                <button
                  onClick={handlePrev}
                  className="bg-white hover:bg-gray-50 text-gray-700 p-4 rounded-full transition-colors shadow-md hover:shadow-lg border border-gray-100 hover:border-gray-200"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                {/* Indicators with animation - modernized */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setIsAutoPlaying(false);
                        setDirection(index > currentIndex ? 1 : -1);
                        setCurrentIndex(index);
                      }}
                      className={`h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                          ? "bg-[#b01108] w-10"
                          : "bg-gray-200 hover:bg-gray-300 w-2.5"
                        }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="bg-white hover:bg-gray-50 text-gray-700 p-4 rounded-full transition-colors shadow-md hover:shadow-lg border border-gray-100 hover:border-gray-200"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Enhanced preview of next/previous testimonials */}
          <div className="hidden lg:block">
            <motion.div
              className="absolute top-1/2 -left-12 -translate-y-1/2 z-0 opacity-60 hover:opacity-90 transition-opacity cursor-pointer"
              whileHover={{ x: -5 }}
              onClick={handlePrev}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gray-200 rounded-full blur-md"></div>
                <div className="w-20 h-20 rounded-full border-2 border-white shadow-md overflow-hidden relative">
                  <Image
                    src={testimonials[prevIndex].image || "/placeholder.svg"}
                    alt="Previous"
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-1/2 -right-12 -translate-y-1/2 z-0 opacity-60 hover:opacity-90 transition-opacity cursor-pointer"
              whileHover={{ x: 5 }}
              onClick={handleNext}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gray-200 rounded-full blur-md"></div>
                <div className="w-20 h-20 rounded-full border-2 border-white shadow-md overflow-hidden relative">
                  <Image
                    src={testimonials[nextIndex].image || "/placeholder.svg"}
                    alt="Next"
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced call to action */}
        <div className="mt-20 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#b01108] to-[#d01108] text-white px-10 py-5 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-100"
          >
            Ready to transform your profile?
            <ArrowRight className="h-5 w-5" />
          </a>
          <p className="mt-4 text-gray-500 text-sm">Join these satisfied clients today</p>
        </div>
      </div>
    </section>
  );
}