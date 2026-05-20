"use client"

import { useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { 
  Search, ShoppingCart, User, Menu, X, Heart, 
  ChevronDown, Store, Bell 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { CurrencySelector } from "@/components/currency/currency-selector"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const categories = [
  { name: "رجالي", nameEn: "Men", href: "/category/men" },
  { name: "حريمي", nameEn: "Women", href: "/category/women" },
  { name: "أطفال", nameEn: "Kids", href: "/category/kids" },
  { name: "إكسسوارات", nameEn: "Accessories", href: "/category/accessories" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const { theme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar */}
      <div className="bg-soqe-dark text-white py-1.5 px-4 text-center text-xs">
        <span className="hidden sm:inline">🚚 شحن مجاني للطلبات فوق 500 ج.م | 🔄 إرجاع مجاني خلال 14 يوم</span>
        <span className="sm:hidden">🚚 شحن مجاني + إرجاع مجاني</span>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:"#1a2332",stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:"#f97316",stopOpacity:1}} />
                  </linearGradient>
                </defs>
                <path d="M20 80 L20 30 Q20 10 40 10 L60 10 Q80 10 80 30 L80 80" 
                      fill="none" stroke="url(#logoGrad)" strokeWidth="6" strokeLinecap="round"/>
                <path d="M35 45 Q50 25 65 45" fill="none" stroke="#f97316" strokeWidth="4" strokeLinecap="round"/>
                <circle cx="50" cy="55" r="8" fill="#1a2332"/>
                <path d="M30 75 L50 60 L70 75" fill="none" stroke="#1a2332" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-soqe-navy dark:text-white">
                Soqe<span className="text-primary">Masr</span>
              </span>
              <span className="text-[10px] -mt-1 text-muted-foreground">سوق مصر</span>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4">
            <div className="relative w-full">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="ابحث عن منتجات، ماركات، أو تصنيفات..."
                className="w-full pr-10 pl-4 h-10 rounded-full bg-muted border-0 focus-visible:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Currency */}
            <div className="hidden lg:block">
              <CurrencySelector />
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Wishlist */}
            <Button variant="ghost" size="icon" className="hidden sm:flex h-9 w-9 relative">
              <Heart className="h-[1.2rem] w-[1.2rem]" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
                3
              </span>
            </Button>

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="hidden sm:flex h-9 w-9 relative">
              <Bell className="h-[1.2rem] w-[1.2rem]" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground flex items-center justify-center">
                5
              </span>
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="h-9 w-9 relative">
              <ShoppingCart className="h-[1.2rem] w-[1.2rem]" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
                2
              </span>
            </Button>

            {/* Account */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="hidden md:flex h-9 gap-2">
                  <User className="h-4 w-4" />
                  <span className="text-sm">تسجيل الدخول</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="flex items-center gap-3 p-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">ضيف</p>
                    <p className="text-xs text-muted-foreground">سجل الدخول للمتابعة</p>
                  </div>
                </div>
                <div className="border-t p-2">
                  <DropdownMenuItem asChild>
                    <Link href="/auth/login" className="cursor-pointer">تسجيل الدخول</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/auth/register" className="cursor-pointer">إنشاء حساب</Link>
                  </DropdownMenuItem>
                </div>
                <div className="border-t p-2">
                  <DropdownMenuItem asChild>
                    <Link href="/seller/register" className="cursor-pointer">
                      <Store className="h-4 w-4 ml-2" />
                      سجل كبائع
                    </Link>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-9 w-9"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-1 pb-3 -mt-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 gap-1 font-medium">
                <Menu className="h-4 w-4" />
                كل التصنيفات
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {categories.map((cat) => (
                <DropdownMenuItem key={cat.href} asChild>
                  <Link href={cat.href} className="cursor-pointer">
                    {cat.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="h-4 w-px bg-border mx-2" />

          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
            >
              {cat.name}
            </Link>
          ))}

          <div className="h-4 w-px bg-border mx-2" />

          <Link href="/auctions" className="px-3 py-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            🔥 المزادات
          </Link>
          <Link href="/3d-fitting" className="px-3 py-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            👕 تجربة 3D
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="ابحث..."
                className="w-full pr-10 h-10 rounded-full bg-muted border-0"
              />
            </div>

            {/* Mobile Categories */}
            <div className="space-y-1">
              <p className="text-xs font-medium text-muted-foreground px-2">التصنيفات</p>
              {categories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {cat.name}
                </Link>
              ))}
            </div>

            <div className="border-t pt-4 space-y-1">
              <p className="text-xs font-medium text-muted-foreground px-2">الحساب</p>
              <Link href="/auth/login" className="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-accent">
                <User className="h-4 w-4 ml-2" />
                تسجيل الدخول
              </Link>
              <Link href="/seller/register" className="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-accent">
                <Store className="h-4 w-4 ml-2" />
                سجل كبائع
              </Link>
            </div>

            <div className="border-t pt-4">
              <div className="flex items-center justify-between px-2">
                <span className="text-sm text-muted-foreground">العملة</span>
                <CurrencySelector />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
