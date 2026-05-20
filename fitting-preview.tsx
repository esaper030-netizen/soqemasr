"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shirt, Scan, Ruler, Sparkles, ArrowLeft } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Scan,
    title: "مسح 3D ذكي",
    description: "استخدم كاميرا هاتفك لمسح جسمك وإنشاء أفاتار افتراضي دقيق",
  },
  {
    icon: Shirt,
    title: "تجربة افتراضية",
    description: "جرب الملابس افتراضياً قبل الشراء وشوف شكلها عليك",
  },
  {
    icon: Ruler,
    title: "قياسات دقيقة",
    description: "احصل على المقاس المثالي لكل قطعة بناءً على قياساتك",
  },
  {
    icon: Sparkles,
    title: "توصيات ذكية",
    description: "اقتراحات مخصصة بناءً على شكل جسمك وستايلك المفضل",
  },
]

export function FittingPreview() {
  return (
    <section className="py-16 bg-gradient-to-br from-soqe-dark via-soqe-navy to-soqe-dark text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 h-64 w-64 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 right-20 h-64 w-64 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
              <Sparkles className="h-3 w-3 ml-1" />
              تقنية جديدة
            </Badge>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              غرفة القياس الافتراضية
              <span className="block text-primary mt-1">3D Virtual Fitting Room</span>
            </h2>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              جرب الملابس قبل ما تشتري! تقنيتنا المتقدمة تستخدم الذكاء الاصطناعي 
              لإنشاء نموذج ثلاثي الأبعاد لجسمك وتجربة الملابس افتراضياً.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="/3d-fitting">
              <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2">
                <Scan className="h-5 w-5" />
                جرب الآن مجاناً
              </Button>
            </Link>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=700&fit=crop"
                alt="3D Virtual Fitting"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-soqe-dark/80 to-transparent" />

              {/* Floating UI Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 right-8 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20"
              >
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Ruler className="h-4 w-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-300">المقاس المثالي</p>
                    <p className="text-sm font-bold">Large - 42</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20"
              >
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-300">دقة المطابقة</p>
                    <p className="text-sm font-bold">98.5%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
