"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "أحمد محمد",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    role: "بائع",
    rating: 5,
    text: "سوق مصر غيرت حياتي! بدأت ببيع 10 منتجات في الشهر ودلوقتي ببيع أكتر من 500 منتج شهرياً. المنصة سهلة والدعم فني ممتاز.",
  },
  {
    id: 2,
    name: "سارة عبدالله",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    role: "مشتري",
    rating: 5,
    text: "أحب تجربة الـ 3D Fitting! بقدر أجرب الملابس قبل ما اشتري وده وفّرلي وقت ومجهود كتير. الجودة ممتازة والتوصيل سريع.",
  },
  {
    id: 3,
    name: "خالد العريان",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    role: "بائع",
    rating: 5,
    text: "نظام المزادات رائع! بعت منتجات بأسعار أعلى من المتوقع. النظام آمن وشفاف وبيحمي البائع والمشتري.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">آراء عملائنا</h2>
          <p className="text-muted-foreground">شوف إيه بيقولوا عن تجربتهم مع سوق مصر</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-card rounded-xl border p-6 hover:shadow-lg transition-shadow"
            >
              <Quote className="absolute top-4 left-4 h-8 w-8 text-primary/20" />

              <div className="flex items-center gap-3 mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
