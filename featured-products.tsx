"use client"

import { motion } from "framer-motion"
import { ProductCard } from "./product-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const products = [
  {
    id: "1",
    name: "بدلة رجالي كلاسيكية سوداء",
    nameEn: "Classic Black Men's Suit",
    price: 2500,
    originalPrice: 3500,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop",
    category: "men",
    vendor: "Elite Fashion",
    rating: 4.8,
    reviews: 124,
    badge: "الأكثر مبيعاً",
    has360: true,
    isNew: false,
    isSale: true,
  },
  {
    id: "2",
    name: "فستان سهرة أحمر أنيق",
    nameEn: "Elegant Red Evening Dress",
    price: 1800,
    originalPrice: 2200,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop",
    category: "women",
    vendor: "Luxe Boutique",
    rating: 4.9,
    reviews: 89,
    has360: true,
    isNew: true,
    isSale: true,
  },
  {
    id: "3",
    name: "شنطة يد جلد طبيعي",
    nameEn: "Genuine Leather Handbag",
    price: 1200,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop",
    category: "accessories",
    vendor: "Cairo Leather",
    rating: 4.7,
    reviews: 256,
    has360: false,
    isNew: false,
    isSale: false,
  },
  {
    id: "4",
    name: "جاكيت شتوي للأطفال",
    nameEn: "Kids Winter Jacket",
    price: 650,
    originalPrice: 850,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=500&fit=crop",
    category: "kids",
    vendor: "Little Stars",
    rating: 4.6,
    reviews: 67,
    has360: false,
    isNew: true,
    isSale: true,
  },
  {
    id: "5",
    name: "حذاء رياضي فاخر",
    nameEn: "Luxury Sneakers",
    price: 1500,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop",
    category: "men",
    vendor: "Sole Egypt",
    rating: 4.8,
    reviews: 312,
    badge: "الأكثر مبيعاً",
    has360: true,
    isNew: false,
    isSale: false,
  },
  {
    id: "6",
    name: "عقد ذهبي فاخر",
    nameEn: "Luxury Gold Necklace",
    price: 3500,
    originalPrice: 4200,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=500&fit=crop",
    category: "accessories",
    vendor: "Gold Palace",
    rating: 4.9,
    reviews: 45,
    has360: false,
    isNew: false,
    isSale: true,
  },
  {
    id: "7",
    name: "قميص قطني أنيق",
    nameEn: "Elegant Cotton Shirt",
    price: 450,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop",
    category: "men",
    vendor: "Cotton King",
    rating: 4.5,
    reviews: 178,
    has360: false,
    isNew: true,
    isSale: false,
  },
  {
    id: "8",
    name: "فستان صيفي ملون",
    nameEn: "Colorful Summer Dress",
    price: 750,
    originalPrice: 950,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop",
    category: "women",
    vendor: "Summer Vibes",
    rating: 4.7,
    reviews: 134,
    has360: true,
    isNew: false,
    isSale: true,
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">منتجات مميزة</h2>
            <p className="text-muted-foreground">اخترنا لك أفضل المنتجات من أرقى التجار</p>
          </div>
          <Link href="/products">
            <Button variant="outline" className="gap-2">
              عرض الكل
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
