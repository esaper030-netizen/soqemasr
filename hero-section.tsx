"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=600&fit=crop",
    title: "اكتشف أناقة الرجال",
    subtitle: "تشكيلة جديدة من أرقى الماركات العالمية",
    cta: "تسوق الآن",
    href: "/category/men",
    color: "from-blue-900/80",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1200&h=600&fit=crop",
    title: "أزياء حريمي فاخرة",
    subtitle: "أحدث صيحات الموضة للمرأة العصرية",
    cta: "اكتشفي المزيد",
    href: "/category/women",
    color: "from-rose-900/80",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=1200&h=600&fit=crop",
    title: "أناقة الأطفال",
    subtitle: "ملابس أنيقة ومريحة لأطفالك",
    cta: "تسوق للأطفال",
    href: "/category/kids",
    color: "from-amber-900/80",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1200&h=600&fit=crop",
    title: "إكسسوارات مميزة",
    subtitle: "أكمل إطلالتك بأرقى الإكسسوارات",
    cta: "تصفح الإكسسوارات",
    href: "/category/accessories",
    color: "from-purple-900/80",
  },
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            className="object-cover"
            priority
          />
          <div className={`absolute inset-0 bg-gradient-to-l ${slides[current].color} to-transparent`} />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-xl text-white"
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                {slides[current].title}
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90">
                {slides[current].subtitle}
              </p>
              <Link href={slides[current].href}>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2 text-base px-8">
                  <ShoppingBag className="h-5 w-5" />
                  {slides[current].cta}
                </Button>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === current ? "w-8 bg-primary" : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
