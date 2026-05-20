import type { Metadata } from "next";
import { Noto_Sans_Arabic, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { CurrencyProvider } from "@/components/currency/currency-provider";
import { DirectionProvider } from "@/components/ui/direction";

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SoqeMasr | سوق مصر - The Future of Premium Fashion",
  description: "منصة الأزياء الفاخرة متعددة التجار في مصر. اكتشف أحدث صيحات الموضة من أفضل الماركات العالمية والمحلية.",
  keywords: "ملابس, أزياء, مصر, تسوق, ماركات, فاخر, رجالي, حريمي, أطفال",
  openGraph: {
    title: "SoqeMasr | سوق مصر",
    description: "اكتشف عالم الأزياء الفاخرة في مصر",
    type: "website",
    locale: "ar_EG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${notoSansArabic.variable} ${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <DirectionProvider direction="rtl">
            <CurrencyProvider>
              {children}
            </CurrencyProvider>
          </DirectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
