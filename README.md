# SoqeMasr | سوق مصر

**The Future of Premium Fashion in Egypt**

منصة الأزياء الفاخرة متعددة التجار في مصر - بناءً على قاعدة بيانات Supabase الجاهزة.

---

## 🚀 المميزات

### للمشترين:
- ✅ واجهة عربية مع دعم الإنجليزية
- ✅ تبديل بين الوضع النهاري والليلي (Dark/Light Mode)
- ✅ 7 عملات: جنيه مصري (أساسي) + دولار + يورو + إسترليني + بيتكوين + إيثريوم + USDT
- ✅ عرض 360° للمنتجات
- ✅ غرفة قياس افتراضية 3D
- ✅ نظام مزادات حية
- ✅ سلة مشتريات متقدمة
- ✅ نظام تقييمات ومراجعات
- ✅ قائمة مفضلات
- ✅ تتبع الطلبات

### للبائعين:
- ✅ لوحة تحكم متكاملة
- ✅ إدارة المنتجات والطلبات
- ✅ تحليلات المبيعات
- ✅ نظام المحفظة والعمولات
- ✅ إدارة المخزون

### للمنصة:
- ✅ نظام متعدد التجار
- ✅ نظام ولاء (Loyalty Points)
- ✅ نظام نزاعات وحماية
- ✅ دردشة مباشرة
- ✅ إشعارات فورية

---

## 🛠️ التقنيات المستخدمة

| التقنية | الاستخدام |
|---------|----------|
| **Next.js 15** | Frontend + Backend API |
| **React 19** | UI Components |
| **TypeScript** | Type Safety |
| **Tailwind CSS** | Styling |
| **shadcn/ui** | UI Components |
| **Framer Motion** | Animations |
| **Supabase** | Database + Auth + Storage |
| **Zustand** | State Management |

---

## 📁 هيكل المشروع

```
soqemasr/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage
│   ├── auth/page.tsx      # Login/Register
│   ├── seller/page.tsx    # Seller Dashboard
│   ├── account/page.tsx   # Buyer Dashboard
│   └── layout.tsx         # Root Layout
├── components/
│   ├── ui/                # UI Components
│   ├── layout/            # Header & Footer
│   ├── sections/          # Page Sections
│   ├── theme/             # Dark/Light Mode
│   └── currency/          # Multi-Currency
├── lib/                   # Utilities
├── public/                # Static Assets
└── i18n/                  # Translations
```

---

## 🚀 خطوات التشغيل

### 1. تثبيت الاعتماديات

```bash
cd soqemasr
npm install
```

### 2. إعداد متغيرات البيئة

أنشئ ملف `.env.local`:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Optional: Payment APIs (Paymob, Fawry)
PAYMOB_API_KEY=your_paymob_key
FAWRY_MERCHANT_CODE=your_fawry_code
```

### 3. تشغيل المشروع

```bash
npm run dev
```

المشروع يعمل على: `http://localhost:3000`

---

## 🌐 الاستضافة على Vercel (مجاني)

### 1. رفع المشروع على GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/soqemasr.git
git push -u origin main
```

### 2. ربط Vercel

1. اذهب إلى [vercel.com](https://vercel.com)
2. سجل الدخول بـ GitHub
3. اضغط "Add New Project"
4. اختر `soqemasr`
5. أضف متغيرات البيئة (Environment Variables)
6. اضغط "Deploy"

### 3. الاستضافة جاهزة! 🎉

---

## 💰 تكلفة التشغيل

| الخدمة | التكلفة | الملاحظات |
|--------|---------|----------|
| **Vercel** | **مجاني** | 100GB Bandwidth/شهر |
| **Supabase** | **مجاني** | 500MB DB + 2GB Storage |
| **Cloudinary** | **مجاني** | 25GB Storage |
| **Domain** | ~$10/سنة | اختياري |

**المجموع = $0/شهر في البداية!**

---

## 🔗 قاعدة البيانات (Supabase)

المشروع يستخدم قاعدة البيانات الجاهزة على Supabase مع الجداول:

- `users` - المستخدمين
- `buyers` / `buyer_wallets` - العملاء ومحافظهم
- `sellers` / `seller_wallets` - التجار ومحافظهم
- `vendors` / `vendor_wallets` - الموردين
- `products` / `product_variants` / `product_images` - المنتجات
- `categories` / `brands` - التصنيفات
- `orders` / `order_items` - الطلبات
- `payments` / `payouts` - الدفع
- `cart` / `persistent_carts` - السلة
- `auctions` / `auction_bids` - المزادات
- `loyalty_points` - نظام الولاء
- `shipping_tracking` - الشحن
- `returns` / `refunds` - الإرجاع
- `live_chat_messages` - الدردشة
- `notifications` - الإشعارات
- `user_body_measurements` / `user_fitting_sessions` - الـ 3D

---

## 📞 الدعم

للمساعدة أو الاستفسارات:
- 📧 support@soqemasr.com
- 💬 Live Chat على المنصة

---

**صُنع بـ ❤️ في مصر 🇪🇬**

© 2026 SoqeMasr. جميع الحقوق محفوظة.
