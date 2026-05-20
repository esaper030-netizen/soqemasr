"use client"

import { useCurrency, type CurrencyCode } from "./currency-provider"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function CurrencySelector() {
  const { currency, setCurrency, currencies } = useCurrency()
  const currentCurrency = currencies.find(c => c.code === currency)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-9 gap-1 px-2">
          <span className="text-lg">{currentCurrency?.flag}</span>
          <span className="font-medium">{currentCurrency?.code}</span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
          العملات الورقية
        </div>
        {currencies.filter(c => c.type === "fiat").map((curr) => (
          <DropdownMenuItem
            key={curr.code}
            onClick={() => setCurrency(curr.code as CurrencyCode)}
            className="gap-2"
          >
            <span className="text-lg">{curr.flag}</span>
            <div className="flex flex-col">
              <span className="font-medium">{curr.nameAr}</span>
              <span className="text-xs text-muted-foreground">{curr.symbol} {curr.code}</span>
            </div>
            {currency === curr.code && (
              <div className="mr-auto h-2 w-2 rounded-full bg-primary" />
            )}
          </DropdownMenuItem>
        ))}
        <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground border-t mt-1 pt-1">
          العملات الرقمية
        </div>
        {currencies.filter(c => c.type === "crypto").map((curr) => (
          <DropdownMenuItem
            key={curr.code}
            onClick={() => setCurrency(curr.code as CurrencyCode)}
            className="gap-2"
          >
            <span className="text-lg">{curr.flag}</span>
            <div className="flex flex-col">
              <span className="font-medium">{curr.nameAr}</span>
              <span className="text-xs text-muted-foreground">{curr.symbol} {curr.code}</span>
            </div>
            {currency === curr.code && (
              <div className="mr-auto h-2 w-2 rounded-full bg-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
