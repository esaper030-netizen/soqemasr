import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { FeaturedCategories } from "@/components/sections/featured-categories"
import { FeaturedProducts } from "@/components/sections/featured-products"
import { AuctionsPreview } from "@/components/sections/auctions-preview"
import { FittingPreview } from "@/components/sections/fitting-preview"
import { StatsSection } from "@/components/sections/stats-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { VendorsPreview } from "@/components/sections/vendors-preview"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturedCategories />
        <FeaturedProducts />
        <AuctionsPreview />
        <FittingPreview />
        <StatsSection />
        <VendorsPreview />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
