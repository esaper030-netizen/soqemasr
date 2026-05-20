"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, CreditCard } from "lucide-react"

const footerLinks = {
  shop: [
    { name: "رجالي", href: "/category/men" },
    { name: "حريمي", href: "/category/women" },
    { name: "أطفال", href: "/category/kids" },
    { name: "إكسسوارات", href: "/category/accessories" },
    { name: "المزادات", href: "/auctions" },
  ],
  support: [
    { name: "مركز المساعدة", href: "/help" },
    { name: "تتبع الطلب", href: "/track-order" },
    { name: "سياسة الإرجاع", href: "/returns" },
    { name: "الشحن والتوصيل", href: "/shipping" },
    { name: "الأسئلة الشائعة", href: "/faq" },
  ],
  company: [
    { name: "عن سوق مصر", href: "/about" },
    { name: "انضم كبائع", href: "/seller/register" },
    { name: "الوظائف", href: "/careers" },
    { name: "الشروط والأحكام", href: "/terms" },
    { name: "سياسة الخصوصية", href: "/privacy" },
  ],
}

const paymentMethods = [
  { name: "Visa", icon: "💳" },
  { name: "Mastercard", icon: "💳" },
  { name: "Fawry", icon: "🏧" },
  { name: "Vodafone Cash", icon: "📱" },
  { name: "InstaPay", icon: "🏦" },
  { name: "Paymob", icon: "💰" },
]

export function Footer() {
  return (
    <footer className="bg-soqe-dark text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-right">
              <h3 className="text-lg font-bold">اشترك في نشرتنا الإخبارية</h3>
              <p className="text-sm text-gray-400 mt-1">احصل على أحدث العروض والخصومات مباشرة إلى بريدك</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="flex-1 md:w-64 h-10 px-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="h-10 px-6 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
                اشترك
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="footerLogo" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:"#fff",stopOpacity:1}} />
                      <stop offset="100%" style={{stopColor:"#f97316",stopOpacity:1}} />
                    </linearGradient>
                  </defs>
                  <path d="M20 80 L20 30 Q20 10 40 10 L60 10 Q80 10 80 30 L80 80" 
                        fill="none" stroke="url(#footerLogo)" strokeWidth="6" strokeLinecap="round"/>
                  <path d="M35 45 Q50 25 65 45" fill="none" stroke="#f97316" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-xl font-bold">
                Soqe<span className="text-primary">Masr</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4 max-w-sm">
              منصة الأزياء الفاخرة متعددة التجار في مصر. اكتشف أحدث صيحات الموضة من أفضل الماركات العالمية والمحلية.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="h-4 w-4 text-primary" />
                <span>+20 1XXX XXX XXX</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="h-4 w-4 text-primary" />
                <span>support@soqemasr.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4 text-primary" />
                <span>القاهرة، مصر</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold mb-4">تسوق</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">الدعم</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">الشركة</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Payment & Social */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Payment Methods */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400">طرق الدفع:</span>
              <div className="flex items-center gap-2">
                {paymentMethods.map((method) => (
                  <div
                    key={method.name}
                    className="h-8 px-2 rounded bg-white/10 flex items-center justify-center text-xs font-medium"
                    title={method.name}
                  >
                    {method.icon} {method.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400">تابعنا:</span>
              <div className="flex items-center gap-2">
                <a href="#" className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-400">
            <p>© 2026 SoqeMasr. جميع الحقوق محفوظة.</p>
            <p>صُنع بـ ❤️ في مصر</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
