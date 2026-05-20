"use client"

import React, { createContext, useContext } from "react"

type Direction = "rtl" | "ltr"

interface DirectionContextType {
  direction: Direction
}

const DirectionContext = createContext<DirectionContextType>({ direction: "rtl" })

export function DirectionProvider({
  children,
  direction = "rtl",
}: {
  children: React.ReactNode
  direction?: Direction
}) {
  return (
    <DirectionContext.Provider value={{ direction }}>
      {children}
    </DirectionContext.Provider>
  )
}

export function useDirection() {
  return useContext(DirectionContext)
}
