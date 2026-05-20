"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpLeft } from "lucide-react"

const categories = [
  {
    name: "رجالي",
    nameEn: "Men",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&h=500&fit=crop",
    count: "1,250+ منتج",
    href: "/category/men",
    color: "from-blue-600/80",
  },
  {
    name: "حريمي",
    nameEn: "Women",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=500&fit=crop",
    count: "2,800+ منتج",
    href: "/category/women",
    color: "from-rose-600/80",
  },
  {
    name: "أطفال",
    nameEn: "Kids",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=500&fit=crop",
    count: "950+ منتج",
    href: "/category/kids",
    color: "from-amber-600/80",
  },
  {
    name: "إكسسوارات",
    nameEn: "Accessories",
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=500&fit=crop",
    count: "1,500+ منتج",
    href: "/category/accessories",
    color: "from-purple-600/80",
  },
]

export function FeaturedCategories() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">تصنيفاتنا المميزة</h2>
          <p className="text-muted-foreground">اكتشف تشكيلة واسعة من الأزياء والإكسسوارات</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={category.href} className="group block relative h-[320px] rounded-2xl overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} to-transparent opacity-80 group-hover:opacity-90 transition-opacity`} />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{category.name}</h3>
                      <p className="text-sm text-white/80">{category.count}</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary transition-colors">
                      <ArrowUpLeft className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
