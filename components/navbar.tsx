import React from 'react'
import { AnimatedThemeToggler } from './ui/animated-theme-toggler'
// import ClipPathWaterSplash from './clip-path'

const Navbar = () => {
  return (
    <div className="flex justify-end gap-4 px-6 sm:px-12 py-3 w-full">
        <AnimatedThemeToggler variant="star" className="rotate-4 outline-none" duration={200} fromCenter />
    </div>
  )
}

export default Navbar