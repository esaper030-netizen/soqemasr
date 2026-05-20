"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCurrency } from "@/components/currency/currency-provider"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { CurrencySelector } from "@/components/currency/currency-selector"
import {
  User,
  ShoppingBag,
  Heart,
  Bookmark,
  MapPin,
  Settings,
  Bell,
  Search,
  Package,
  Clock,
  CheckCircle,
  Truck,
  Star,
  RotateCcw,
  ChevronLeft,
  LogOut,
  Edit,
  Eye,
  Ruler,
  Shirt,
} from "lucide-react"

const sidebarItems = [
  { icon: User, label: "الملف الشخصي", href: "/account", active: true },
  { icon: ShoppingBag, label: "طلباتي", href: "/account/orders", badge: "3" },
  { icon: Heart, label: "المفضلة", href: "/account/favorites" },
  { icon: Bookmark, label: "الأنماط المحفوظة", href: "/account/saved-styles" },
  { icon: MapPin, label: "العناوين", href: "/account/addresses" },
  { icon: Ruler, label: "قياساتي", href: "/account/measurements" },
  { icon: Shirt, label: "تجارب 3D", href: "/account/fitting-sessions" },
  { icon: Settings, label: "إعدادات الحساب", href: "/account/settings" },
]

const orderStats = [
  { label: "إجمالي الطلبات", value: 24, icon: Package, color: "text-blue-500", bgColor: "bg-blue-50 dark:bg-blue-950/20" },
  { label: "المشتريات الأخيرة", value: 3, icon: Clock, color: "text-amber-500", bgColor: "bg-amber-50 dark:bg-amber-950/20" },
  { label: "العناصر المحفوظة", value: 67, icon: Bookmark, color: "text-rose-500", bgColor: "bg-rose-50 dark:bg-rose-950/20" },
]

const recentOrders = [
  { id: "#54321", product: "بدلة رجالي سوداء", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=50&h=50&fit=crop", date: "Oct 26, 2023", price: 1250, status: "shipped" },
  { id: "#54320", product: "حذاء رياضي فاخر", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=50&h=50&fit=crop", date: "Oct 26, 2023", price: 1250, status: "shipped" },
  { id: "#54319", product: "فستان سهرة أحمر", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=50&h=50&fit=crop", date: "Oct 24, 2023", price: 1800, status: "delivered" },
]

const recommendedProducts = [
  { id: "r1", name: "شنطة يد جلد", price: 1200, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&h=300&fit=crop", has360: true },
  { id: "r2", name: "بدلة رسمية", price: 3500, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=300&fit=crop", has360: true },
  { id: "r3", name: " trench coat", price: 2200, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&h=300&fit=crop", has360: true },
  { id: "r4", name: "فستان أسود", price: 1500, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300&h=300&fit=crop", has360: true },
  { id: "r5", name: "حذاء كلاسيكي", price: 1800, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop", has360: true },
  { id: "r6", name: "ساعة فاخرة", price: 4500, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300&h=300&fit=crop", has360: false },
  { id: "r7", name: "جاكيت شتوي", price: 2800, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&h=300&fit=crop", has360: true },
]

export default function BuyerDashboard() {
  const { formatPrice } = useCurrency()
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "shipped":
        return <Badge variant="outline" className="bg-amber-50 text-amber-600 border-amber-200 gap-1"><Truck className="h-3 w-3" /> تم الشحن</Badge>
      case "delivered":
        return <Badge variant="outline" className="bg-emerald-50 text-emerald-600 border-emerald-200 gap-1"><CheckCircle className="h-3 w-3" /> تم التوصيل</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-8 h-8">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:"#1a2332",stopOpacity:1}} />
                      <stop offset="100%" style={{stopColor:"#f97316",stopOpacity:1}} />
                    </linearGradient>
                  </defs>
                  <path d="M20 80 L20 30 Q20 10 40 10 L60 10 Q80 10 80 30 L80 80" 
                        fill="none" stroke="url(#logoGrad)" strokeWidth="6" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-lg font-bold">Soqe<span className="text-primary">Masr</span></span>
            </Link>

            <div className="flex items-center gap-2">
              <CurrencySelector />
              <ThemeToggle />
              <Button variant="ghost" size="icon" className="h-9 w-9 relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-white flex items-center justify-center">3</span>
              </Button>
              <div className="relative h-8 w-8 rounded-full overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Profile" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Profile Card */}
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="relative h-20 w-20 rounded-full overflow-hidden mx-auto mb-3">
                    <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" alt="Sarah" fill className="object-cover" />
                  </div>
                  <h3 className="font-bold text-lg">سارة جينكينز</h3>
                  <p className="text-sm text-muted-foreground">sarah@email.com</p>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                    <span className="text-sm font-medium">4.8</span>
                    <span className="text-xs text-muted-foreground">(مشتري موثوق)</span>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation */}
              <nav className="space-y-1">
                {sidebarItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                      item.active
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <item.icon className="h-5 w-5 shrink-0" />
                    <span className="text-sm font-medium flex-1">{item.label}</span>
                    {item.badge && (
                      <Badge className="bg-primary text-white text-xs h-5 w-5 flex items-center justify-center p-0">{item.badge}</Badge>
                    )}
                  </Link>
                ))}
                <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-red-500 hover:bg-red-50 transition-colors">
                  <LogOut className="h-5 w-5 shrink-0" />
                  <span className="text-sm font-medium">تسجيل الخروج</span>
                </button>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">مرحباً بعودتك، سارة!</h1>
              <p className="text-muted-foreground">نظرة عامة على نشاطك</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {orderStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-4">
                        <div className={`h-12 w-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                          <stat.icon className={`h-6 w-6 ${stat.color}`} />
                        </div>
                        <div>
                          <p className="text-2xl font-bold">{stat.value}</p>
                          <p className="text-sm text-muted-foreground">{stat.label}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Recent Orders */}
            <Card className="mb-8">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>الطلبات الأخيرة</CardTitle>
                  <p className="text-sm text-muted-foreground">آخر 3 طلبات</p>
                </div>
                <Link href="/account/orders">
                  <Button variant="outline" size="sm" className="gap-1">
                    عرض الكل
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center gap-4 p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                      <div className="relative h-14 w-14 rounded-lg overflow-hidden shrink-0">
                        <Image src={order.image} alt={order.product} fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium truncate">{order.product}</h4>
                          <span className="text-xs text-muted-foreground">{order.id}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{order.date}</p>
                      </div>
                      <div className="text-left">
                        <p className="font-medium">{formatPrice(order.price)}</p>
                        {getStatusBadge(order.status)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <RotateCcw className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recommended Products */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold">موصى بك</h2>
                  <p className="text-muted-foreground">بناءً على مشترياتك السابقة</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {recommendedProducts.map((product) => (
                  <Link key={product.id} href={`/product/${product.id}`} className="group">
                    <div className="relative aspect-square rounded-xl overflow-hidden bg-muted mb-3">
                      <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                      {product.has360 && (
                        <div className="absolute top-2 left-2">
                          <Badge variant="outline" className="bg-black/50 text-white border-0 text-xs gap-1">
                            <RotateCcw className="h-3 w-3" />
                            360°
                          </Badge>
                        </div>
                      )}
                      <Button size="sm" className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 p-0">
                        <ShoppingBag className="h-4 w-4" />
                      </Button>
                    </div>
                    <h4 className="text-sm font-medium truncate group-hover:text-primary transition-colors">{product.name}</h4>
                    <p className="text-sm font-bold text-primary">{formatPrice(product.price)}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
