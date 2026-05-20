"use client"

import React, { createContext, useContext, useState, useCallback, useEffect } from "react"

export type CurrencyCode = "EGP" | "USD" | "EUR" | "GBP" | "BTC" | "ETH" | "USDT"

interface Currency {
  code: CurrencyCode
  symbol: string
  name: string
  nameAr: string
  flag: string
  type: "fiat" | "crypto"
}

interface CurrencyContextType {
  currency: CurrencyCode
  setCurrency: (currency: CurrencyCode) => void
  formatPrice: (priceInEGP: number) => string
  convertPrice: (priceInEGP: number) => number
  currencies: Currency[]
  exchangeRates: Record<CurrencyCode, number>
}

// Exchange rates relative to EGP (1 EGP = X currency)
// Updated: May 2026 - Source: Central Bank of Egypt
const EXCHANGE_RATES: Record<CurrencyCode, number> = {
  EGP: 1,
  USD: 0.01884,    // 1 EGP = 0.01884 USD (1 USD = 53.07 EGP)
  EUR: 0.01622,    // 1 EGP = 0.01622 EUR (1 EUR = 61.65 EGP)
  GBP: 0.01406,    // 1 EGP = 0.01406 GBP (1 GBP = 71.13 EGP)
  BTC: 0.00000018, // Approximate
  ETH: 0.0000032,  // Approximate
  USDT: 0.01884,   // Same as USD
}

const CURRENCIES: Currency[] = [
  { code: "EGP", symbol: "ج.م", name: "Egyptian Pound", nameAr: "الجنيه المصري", flag: "🇪🇬", type: "fiat" },
  { code: "USD", symbol: "$", name: "US Dollar", nameAr: "الدولار الأمريكي", flag: "🇺🇸", type: "fiat" },
  { code: "EUR", symbol: "€", name: "Euro", nameAr: "اليورو", flag: "🇪🇺", type: "fiat" },
  { code: "GBP", symbol: "£", name: "British Pound", nameAr: "الجنيه الإسترليني", flag: "🇬🇧", type: "fiat" },
  { code: "BTC", symbol: "₿", name: "Bitcoin", nameAr: "بيتكوين", flag: "₿", type: "crypto" },
  { code: "ETH", symbol: "Ξ", name: "Ethereum", nameAr: "إيثريوم", flag: "Ξ", type: "crypto" },
  { code: "USDT", symbol: "₮", name: "Tether", nameAr: "تيثر", flag: "₮", type: "crypto" },
]

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("EGP")

  // Load saved currency preference
  useEffect(() => {
    const saved = localStorage.getItem("soqe-currency") as CurrencyCode
    if (saved && EXCHANGE_RATES[saved]) {
      setCurrencyState(saved)
    }
  }, [])

  const setCurrency = useCallback((newCurrency: CurrencyCode) => {
    setCurrencyState(newCurrency)
    localStorage.setItem("soqe-currency", newCurrency)
  }, [])

  const convertPrice = useCallback((priceInEGP: number): number => {
    return priceInEGP * EXCHANGE_RATES[currency]
  }, [currency])

  const formatPrice = useCallback((priceInEGP: number): string => {
    const converted = convertPrice(priceInEGP)
    const curr = CURRENCIES.find(c => c.code === currency)!

    if (currency === "EGP") {
      return `${converted.toLocaleString("ar-EG")} ${curr.symbol}`
    }

    if (currency === "BTC" || currency === "ETH") {
      return `${curr.symbol}${converted.toFixed(6)}`
    }

    return `${curr.symbol}${converted.toFixed(2)}`
  }, [currency, convertPrice])

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        formatPrice,
        convertPrice,
        currencies: CURRENCIES,
        exchangeRates: EXCHANGE_RATES,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency() {
  const context = useContext(CurrencyContext)
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider")
  }
  return context
}
