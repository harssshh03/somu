"use client"

import { AnimatedThemeToggler } from "./ui/animated-theme-toggler"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

const BackNavbar = () => {
  const navigate = useRouter()

  return (
    <div className="flex w-full  items-center justify-center pt-10">
      <div className="flex w-full  max-w-2xl items-center justify-between px-5 sm:px-3">
        <ArrowLeft
          onClick={() => navigate.push("/")}
          className="h-6 w-6 cursor-pointer"
        />

        <div className="flex items-center justify-center gap-2.5 px-2 text-xs tracking-tight text-balance sm:text-sm">
          <AnimatedThemeToggler />
        </div>
      </div>
    </div>
  )
}

export default BackNavbar