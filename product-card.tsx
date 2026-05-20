"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart, Eye, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCurrency } from "@/components/currency/currency-provider"
import { useState } from "react"

interface Product {
  id: string
  name: string
  nameEn?: string
  price: number
  originalPrice?: number
  image: string
  category: string
  vendor: string
  rating: number
  reviews: number
  badge?: string
  has360?: boolean
  isNew?: boolean
  isSale?: boolean
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { formatPrice } = useCurrency()
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [imageHovered, setImageHovered] = useState(false)

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="group relative bg-card rounded-xl border overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Image Container */}
      <div 
        className="relative aspect-[3/4] overflow-hidden bg-muted"
        onMouseEnter={() => setImageHovered(true)}
        onMouseLeave={() => setImageHovered(false)}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isNew && (
            <Badge className="bg-primary text-white text-xs">جديد</Badge>
          )}
          {product.isSale && discount > 0 && (
            <Badge variant="destructive" className="text-xs">-{discount}%</Badge>
          )}
          {product.badge && (
            <Badge variant="secondary" className="text-xs">{product.badge}</Badge>
          )}
        </div>

        {/* 360 Badge */}
        {product.has360 && (
          <div className="absolute top-3 right-3">
            <Badge variant="outline" className="bg-black/50 text-white border-0 text-xs gap-1">
              <RotateCcw className="h-3 w-3" />
              360°
            </Badge>
          </div>
        )}

        {/* Hover Actions */}
        <div className={`absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${imageHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex gap-2">
            <Button 
              size="sm" 
              className="flex-1 bg-white text-black hover:bg-white/90 gap-1"
            >
              <ShoppingCart className="h-4 w-4" />
              أضف للسلة
            </Button>
            <Button 
              size="icon" 
              variant="secondary"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/40"
            >
              <Eye className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-colors"
          style={{ display: product.has360 ? 'none' : 'flex', right: product.has360 ? '3rem' : '0.75rem' }}
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <Link href={`/product/${product.id}`} className="font-medium text-sm hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </Link>
        </div>

        <p className="text-xs text-muted-foreground mb-2">{product.vendor}</p>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`h-3.5 w-3.5 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-xs text-muted-foreground mr-1">({product.reviews})</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
