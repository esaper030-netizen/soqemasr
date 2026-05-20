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
  LayoutDashboard,
  ShoppingBag,
  Package,
  BarChart3,
  Users,
  Megaphone,
  Settings,
  Bell,
  Search,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Eye,
  Star,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Store,
  Plus,
  Edit,
  Trash2,
  CheckCircle,
  Clock,
  Truck,
  XCircle,
  RotateCcw,
} from "lucide-react"

const sidebarItems = [
  { icon: LayoutDashboard, label: "الرئيسية", href: "/seller", active: true },
  { icon: ShoppingBag, label: "الطلبات", href: "/seller/orders", badge: "5" },
  { icon: Package, label: "المنتجات", href: "/seller/products" },
  { icon: BarChart3, label: "التحليلات", href: "/seller/analytics" },
  { icon: Users, label: "العملاء", href: "/seller/customers" },
  { icon: Megaphone, label: "التسويق", href: "/seller/marketing" },
  { icon: Settings, label: "إعدادات المتجر", href: "/seller/settings" },
]

const stats = [
  {
    title: "إجمالي الإيرادات",
    value: 142850,
    change: "+12.4%",
    trend: "up",
    icon: DollarSign,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
  },
  {
    title: "المنتجات النشطة",
    value: 1845,
    change: "92 جديد",
    trend: "up",
    icon: Package,
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    title: "طلبات جديدة",
    value: 118,
    change: "24 معلقة",
    trend: "up",
    icon: ShoppingBag,
    color: "text-amber-500",
    bgColor: "bg-amber-50 dark:bg-amber-950/20",
  },
  {
    title: "معدل التحويل",
    value: "3.2%",
    change: "-0.4%",
    trend: "down",
    icon: BarChart3,
    color: "text-rose-500",
    bgColor: "bg-rose-50 dark:bg-rose-950/20",
  },
]

const recentOrders = [
  { id: "#12543", product: "Gucci Bag", customer: "L. Chen", date: "Oct 26, 2023", price: 1450, status: "shipped", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=50&h=50&fit=crop" },
  { id: "#12542", product: "Zara Dress", customer: "A. Khan", date: "Oct 26, 2023", price: 320, status: "pending", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=50&h=50&fit=crop" },
  { id: "#12541", product: "Prada Boots", customer: "A. Khan", date: "Oct 26, 2023", price: 320, status: "delivered", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=50&h=50&fit=crop" },
  { id: "#12540", product: "Nike Sneakers", customer: "M. Ali", date: "Oct 25, 2023", price: 180, status: "shipped", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=50&h=50&fit=crop" },
  { id: "#12539", product: "Adidas Jacket", customer: "S. Omar", date: "Oct 25, 2023", price: 220, status: "pending", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=50&h=50&fit=crop" },
]

const salesData = [
  { month: "يناير", revenue: 120, orders: 80 },
  { month: "فبراير", revenue: 150, orders: 100 },
  { month: "مارس", revenue: 180, orders: 120 },
  { month: "أبريل", revenue: 220, orders: 140 },
  { month: "مايو", revenue: 200, orders: 130 },
  { month: "يونيو", revenue: 280, orders: 180 },
  { month: "يوليو", revenue: 250, orders: 160 },
  { month: "أغسطس", revenue: 300, orders: 200 },
  { month: "سبتمبر", revenue: 320, orders: 210 },
  { month: "أكتوبر", revenue: 350, orders: 230 },
]

export default function SellerDashboard() {
  const { formatPrice } = useCurrency()
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "shipped":
        return <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200 gap-1"><Truck className="h-3 w-3" /> تم الشحن</Badge>
      case "pending":
        return <Badge variant="outline" className="bg-amber-50 text-amber-600 border-amber-200 gap-1"><Clock className="h-3 w-3" /> معلق</Badge>
      case "delivered":
        return <Badge variant="outline" className="bg-emerald-50 text-emerald-600 border-emerald-200 gap-1"><CheckCircle className="h-3 w-3" /> تم التوصيل</Badge>
      case "cancelled":
        return <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200 gap-1"><XCircle className="h-3 w-3" /> ملغي</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? "w-64" : "w-20"} bg-soqe-dark text-white transition-all duration-300 flex flex-col`}>
        <div className="p-6 flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
            <Store className="h-5 w-5 text-primary" />
          </div>
          {sidebarOpen && (
            <div>
              <h1 className="font-bold text-lg">SoqeMasr</h1>
              <p className="text-xs text-gray-400">مركز البائع</p>
            </div>
          )}
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                item.active
                  ? "bg-primary/20 text-primary"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <item.icon className="h-5 w-5 shrink-0" />
              {sidebarOpen && (
                <span className="text-sm font-medium flex-1">{item.label}</span>
              )}
              {sidebarOpen && item.badge && (
                <Badge className="bg-primary text-white text-xs h-5 w-5 flex items-center justify-center p-0">
                  {item.badge}
                </Badge>
              )}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-full overflow-hidden shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                alt="Seller"
                fill
                className="object-cover"
              />
            </div>
            {sidebarOpen && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">سارة جنكينز</p>
                <p className="text-xs text-gray-400 truncate">سارة@soqemasr.com</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-16 border-b bg-background flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="h-9 w-9"
            >
              <MoreHorizontal className="h-5 w-5" />
            </Button>
            <div className="relative hidden md:block">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="بحث..."
                className="w-64 pr-10 h-9 bg-muted border-0"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <CurrencySelector />
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="h-9 w-9 relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-destructive text-[10px] font-medium text-white flex items-center justify-center">
                3
              </span>
            </Button>
            <div className="relative h-8 w-8 rounded-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto">
            {/* Welcome */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl font-bold">مرحباً بعودتك، سارة!</h1>
                <p className="text-muted-foreground">نظرة عامة على أداء متجرك</p>
              </div>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                إضافة منتج جديد
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between">
                        <div className={`h-10 w-10 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                          <stat.icon className={`h-5 w-5 ${stat.color}`} />
                        </div>
                        <div className="flex items-center gap-1 text-xs">
                          {stat.trend === "up" ? (
                            <ArrowUpRight className="h-3 w-3 text-emerald-500" />
                          ) : (
                            <ArrowDownRight className="h-3 w-3 text-rose-500" />
                          )}
                          <span className={stat.trend === "up" ? "text-emerald-500" : "text-rose-500"}>
                            {stat.change}
                          </span>
                        </div>
                      </div>
                      <div className="mt-3">
                        <p className="text-2xl font-bold">
                          {typeof stat.value === "number" ? formatPrice(stat.value) : stat.value}
                        </p>
                        <p className="text-sm text-muted-foreground">{stat.title}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Charts & Orders */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Sales Chart */}
              <Card className="lg:col-span-2">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>أداء المبيعات</CardTitle>
                    <p className="text-sm text-muted-foreground">الإيرادات والطلبات الشهرية</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="gap-1">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      الإيرادات
                    </Badge>
                    <Badge variant="outline" className="gap-1">
                      <div className="h-2 w-2 rounded-full bg-blue-500" />
                      الطلبات
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-end gap-2">
                    {salesData.map((data, index) => {
                      const maxRevenue = Math.max(...salesData.map(d => d.revenue))
                      const height = (data.revenue / maxRevenue) * 100
                      return (
                        <div key={data.month} className="flex-1 flex flex-col items-center gap-1">
                          <div className="w-full flex items-end justify-center gap-1" style={{ height: "200px" }}>
                            <div
                              className="w-full bg-primary/80 rounded-t-sm hover:bg-primary transition-colors relative group"
                              style={{ height: `${height}%` }}
                            >
                              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                {formatPrice(data.revenue * 100)}
                              </div>
                            </div>
                          </div>
                          <span className="text-xs text-muted-foreground">{data.month}</span>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Top Products */}
              <Card>
                <CardHeader>
                  <CardTitle>أفضل المنتجات</CardTitle>
                  <p className="text-sm text-muted-foreground">الأكثر مبيعاً هذا الشهر</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: "بدلة رجالي سوداء", sales: 45, revenue: 112500 },
                    { name: "فستان سهرة أحمر", sales: 38, revenue: 68400 },
                    { name: "شنطة جلد طبيعي", sales: 32, revenue: 38400 },
                    { name: "حذاء رياضي فاخر", sales: 28, revenue: 42000 },
                    { name: "عقد ذهبي فاخر", sales: 22, revenue: 77000 },
                  ].map((product, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">{product.name}</p>
                        <p className="text-xs text-muted-foreground">{product.sales} مبيعة</p>
                      </div>
                      <span className="text-sm font-medium text-primary">{formatPrice(product.revenue)}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Recent Orders */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>الطلبات الأخيرة</CardTitle>
                  <p className="text-sm text-muted-foreground">آخر 5 طلبات</p>
                </div>
                <Link href="/seller/orders">
                  <Button variant="outline" size="sm">عرض الكل</Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">رقم الطلب</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">المنتج</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">العميل</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">التاريخ</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">السعر</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">الحالة</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">الإجراءات</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order) => (
                        <tr key={order.id} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
                          <td className="py-3 px-4 text-sm font-medium">{order.id}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              <div className="relative h-10 w-10 rounded-lg overflow-hidden">
                                <Image src={order.image} alt={order.product} fill className="object-cover" />
                              </div>
                              <span className="text-sm">{order.product}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-sm">{order.customer}</td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">{order.date}</td>
                          <td className="py-3 px-4 text-sm font-medium">{formatPrice(order.price)}</td>
                          <td className="py-3 px-4">{getStatusBadge(order.status)}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-1">
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Edit className="h-4 w-4" />
                              </Button>
                              {order.status === "pending" && (
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-emerald-500">
                                  <CheckCircle className="h-4 w-4" />
                                </Button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
