import React, { useState, useEffect } from "react"
import { SparkleDoodle, HeartDoodle } from "./Doodles"
import { Feather, Heart, Palette, Sparkles, Compass, Mail, Volume2, VolumeX } from "lucide-react"

export const ScrapbookNav = () => {
  const [activeSection, setActiveSection] = useState("letter")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { id: "personal-note", label: "Note", icon: Feather },
    { id: "little-things", label: "Reminders", icon: Heart },
    { id: "art-corner", label: "Art Corner", icon: Palette },
    { id: "sky-of-wishes", label: "Sky of Wishes", icon: Sparkles },
    { id: "tiny-adventure", label: "Adventure", icon: Compass },
    { id: "secret-envelope", label: "Secret Note", icon: Mail },
  ]

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!scrolled) return null

  return (
    <header className="fixed top-4 inset-x-0 z-40 flex justify-center px-4 pointer-events-none transition-all duration-300">
      <nav 
        className="pointer-events-auto flex items-center gap-1 sm:gap-2 px-3 py-2 rounded-full bg-white/90 backdrop-blur-md border border-[#D99AAE]/30 shadow-lg text-xs"
        aria-label="Scrapbook navigation"
      >
        <span className="font-hand text-base text-[#D99AAE] px-2 font-semibold hidden md:inline">
          Ananya's World ♡
        </span>

        <div className="h-4 w-px bg-[#D99AAE]/20 hidden md:block" />

        {navLinks.map((link) => {
          const Icon = link.icon
          return (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-[#67505A] hover:text-[#252747] hover:bg-[#F5DCE3]/60 transition-colors cursor-pointer text-xs font-medium"
            >
              <Icon className="w-3.5 h-3.5 text-[#D99AAE]" />
              <span className="hidden sm:inline">{link.label}</span>
            </button>
          )
        })}
      </nav>
    </header>
  )
}
