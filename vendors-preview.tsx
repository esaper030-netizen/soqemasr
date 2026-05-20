"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Store, Star, ArrowLeft, TrendingUp } from "lucide-react"

const vendors = [
  {
    id: "v1",
    name: "Elite Fashion",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop",
    category: "رجالي",
    rating: 4.9,
    products: 450,
    sales: 12000,
    isVerified: true,
    isTrending: true,
  },
  {
    id: "v2",
    name: "Luxe Boutique",
    logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=200&fit=crop",
    category: "حريمي",
    rating: 4.8,
    products: 320,
    sales: 8500,
    isVerified: true,
    isTrending: true,
  },
  {
    id: "v3",
    name: "Cairo Leather",
    logo: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200&h=200&fit=crop",
    category: "إكسسوارات",
    rating: 4.7,
    products: 180,
    sales: 5600,
    isVerified: true,
    isTrending: false,
  },
  {
    id: "v4",
    name: "Little Stars",
    logo: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=200&h=200&fit=crop",
    category: "أطفال",
    rating: 4.6,
    products: 210,
    sales: 4300,
    isVerified: true,
    isTrending: false,
  },
]

export function VendorsPreview() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">أفضل التجار</h2>
            <p className="text-muted-foreground">تجار موثوقين بمنتجات عالية الجودة</p>
          </div>
          <Link href="/vendors">
            <Button variant="outline" className="gap-2">
              كل التجار
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vendors.map((vendor, index) => (
            <motion.div
              key={vendor.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/vendor/${vendor.id}`} className="group block bg-card rounded-xl border p-6 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="relative h-16 w-16 rounded-xl overflow-hidden">
                    <Image
                      src={vendor.logo}
                      alt={vendor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1 items-end">
                    {vendor.isVerified && (
                      <Badge variant="outline" className="text-xs gap-1 border-green-500 text-green-600">
                        <Store className="h-3 w-3" />
                        موثق
                      </Badge>
                    )}
                    {vendor.isTrending && (
                      <Badge className="text-xs gap-1 bg-primary">
                        <TrendingUp className="h-3 w-3" />
                        trending
                      </Badge>
                    )}
                  </div>
                </div>

                <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{vendor.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{vendor.category}</p>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                    <span className="font-medium">{vendor.rating}</span>
                  </div>
                  <span className="text-muted-foreground">{vendor.products} منتج</span>
                </div>

                <div className="mt-3 pt-3 border-t text-xs text-muted-foreground">
                  {vendor.sales.toLocaleString("ar-EG")} مبيعة
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
