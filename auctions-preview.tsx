"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Timer, Gavel, ArrowLeft, Users } from "lucide-react"
import { useCurrency } from "@/components/currency/currency-provider"

const auctions = [
  {
    id: "a1",
    name: "ساعة رولكس أصلية",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=300&fit=crop",
    currentBid: 45000,
    startingBid: 30000,
    bids: 23,
    timeLeft: "2 يوم 14 ساعة",
    watchers: 156,
  },
  {
    id: "a2",
    name: "شنطة هيرمس نادرة",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=300&fit=crop",
    currentBid: 28000,
    startingBid: 20000,
    bids: 18,
    timeLeft: "1 يوم 8 ساعة",
    watchers: 89,
  },
  {
    id: "a3",
    name: "بدلة Armani محدودة",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=300&fit=crop",
    currentBid: 8500,
    startingBid: 5000,
    bids: 12,
    timeLeft: "3 يوم 22 ساعة",
    watchers: 67,
  },
]

export function AuctionsPreview() {
  const { formatPrice } = useCurrency()

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Gavel className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">المزادات الحية</h2>
              <p className="text-muted-foreground">فرصة للحصول على قطع فريدة بأفضل الأسعار</p>
            </div>
          </div>
          <Link href="/auctions">
            <Button variant="outline" className="gap-2">
              كل المزادات
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {auctions.map((auction, index) => (
            <motion.div
              key={auction.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card rounded-xl border overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={auction.image}
                  alt={auction.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-primary gap-1">
                    <Timer className="h-3 w-3" />
                    {auction.timeLeft}
                  </Badge>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-lg mb-3">{auction.name}</h3>

                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-xs text-muted-foreground">السعر الحالي</p>
                    <p className="text-xl font-bold text-primary">{formatPrice(auction.currentBid)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">السعر الابتدائي</p>
                    <p className="text-sm line-through text-muted-foreground">{formatPrice(auction.startingBid)}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Gavel className="h-4 w-4" />
                    {auction.bids} مزايدة
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {auction.watchers} مشاهد
                  </span>
                </div>

                <Button className="w-full gap-2">
                  <Gavel className="h-4 w-4" />
                  زايد الآن
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
