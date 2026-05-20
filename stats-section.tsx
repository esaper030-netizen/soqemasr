"use client"

import { motion } from "framer-motion"
import { Store, Truck, Shield, Headphones, RotateCcw, Award } from "lucide-react"

const stats = [
  {
    icon: Store,
    value: "500+",
    label: "بائع موثوق",
    description: "تجار معتمدين وموثقين",
  },
  {
    icon: Truck,
    value: "24-48h",
    label: "توصيل سريع",
    description: "شحن لجميع المحافظات",
  },
  {
    icon: Shield,
    value: "100%",
    label: "حماية المشتري",
    description: "ضمان استرداد الأموال",
  },
  {
    icon: Headphones,
    value: "24/7",
    label: "دعم فني",
    description: "متاح طوال اليوم",
  },
  {
    icon: RotateCcw,
    value: "14 يوم",
    label: "إرجاع مجاني",
    description: "فترة إرجاع مرنة",
  },
  {
    icon: Award,
    value: "50K+",
    label: "عميل سعيد",
    description: "ثقة آلاف العملاء",
  },
]

export function StatsSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">لماذا تختار سوق مصر؟</h2>
          <p className="text-muted-foreground">نقدم لك تجربة تسوق فريدة مع ضمانات كاملة</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-card border hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-1">{stat.value}</h3>
              <p className="font-medium mb-1">{stat.label}</p>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
