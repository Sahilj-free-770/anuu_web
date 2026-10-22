import React, { useRef, useState } from "react"
import gsap from "gsap"
import { SparklesText } from "./magicui/SparklesText"
import { ShimmerButton } from "./magicui/ShimmerButton"
import { Particles } from "./magicui/Particles"
import { 
  FlowerDoodle, 
  SparkleDoodle, 
  HeartDoodle, 
  MoonDoodle, 
  CloudDoodle, 
  PaperclipDoodle 
} from "./Doodles"
import { ArrowDown, Mail, Heart } from "lucide-react"

export const OpeningLetter = ({ onOpenWorld }) => {
  const envelopeRef = useRef(null)
  const letterFlapRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    if (isOpen) {
      onOpenWorld()
      return
    }

    setIsOpen(true)

    // GSAP animation for envelope flap unfolding
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          onOpenWorld()
        }, 400)
      }
    })

    if (letterFlapRef.current) {
      tl.to(letterFlapRef.current, {
        rotateX: 180,
        transformOrigin: "top center",
        duration: 0.6,
        ease: "power2.inOut"
      })
    }

    if (envelopeRef.current) {
      tl.to(envelopeRef.current, {
        y: -10,
        scale: 1.02,
        duration: 0.3,
        ease: "back.out(1.5)"
      }, "-=0.3")
    }
  }

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-4 py-16 overflow-hidden bg-gradient-to-b from-[#F5DCE3]/40 via-[#FFF8EF] to-[#FFF8EF]">
      {/* Background Magic UI Particles */}
      <Particles
        className="absolute inset-0"
        quantity={45}
        size={0.8}
        color="#D99AAE"
        staticity={60}
      />

      {/* Decorative Anime Atmosphere Doodles in the sky */}
      <div className="absolute top-8 left-8 md:left-20 animate-gentle-float opacity-75 pointer-events-none">
        <MoonDoodle className="w-10 h-10 md:w-14 md:h-14 text-[#E9C98B]" />
      </div>
      <div className="absolute top-14 right-10 md:right-24 animate-gentle-float opacity-70 pointer-events-none" style={{ animationDelay: "1.5s" }}>
        <CloudDoodle className="w-16 h-10 md:w-24 md:h-14 text-[#DCD7F7]" />
      </div>
      <div className="absolute top-28 left-1/4 animate-gentle-pulse opacity-60 pointer-events-none">
        <SparkleDoodle className="w-5 h-5 text-[#E9C98B]" />
      </div>
      <div className="absolute bottom-16 right-16 animate-gentle-pulse opacity-60 pointer-events-none" style={{ animationDelay: "2s" }}>
        <FlowerDoodle className="w-8 h-8 text-[#D99AAE]" />
      </div>

      {/* Center Envelope / Scrapbook Presentation */}
      <div 
        ref={envelopeRef}
        className="relative z-10 w-full max-w-md mx-auto"
        style={{ perspective: "1000px" }}
      >
        {/* Top Washi Tape */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 washi-tape px-10 py-1.5 rounded-sm shadow-xs flex items-center gap-2">
          <HeartDoodle className="w-3.5 h-3.5 text-[#D99AAE]" />
          <span className="text-[11px] font-hand text-[#67505A] tracking-widest uppercase">
            special delivery
          </span>
          <HeartDoodle className="w-3.5 h-3.5 text-[#D99AAE]" />
        </div>

        {/* Paper Envelope Card */}
        <div className="relative rounded-3xl bg-[#FFFDF9] border border-[#D99AAE]/35 p-8 md:p-10 letter-shadow text-center paper-texture">
          {/* Paperclip top right */}
          <div className="absolute -top-4 right-8 pointer-events-none">
            <PaperclipDoodle className="w-5 h-8 text-[#E9C98B]" />
          </div>

          {/* Doodled Heart Icon */}
          <div className="w-14 h-14 mx-auto rounded-full bg-[#F5DCE3] flex items-center justify-center text-[#D99AAE] mb-5 shadow-xs">
            <Heart className="w-7 h-7 fill-current" />
          </div>

          {/* Header with Magic UI Sparkles */}
          <div className="mb-2">
            <SparklesText 
              className="text-3xl md:text-5xl font-serif text-[#252747] font-normal tracking-wide"
              colors={{ first: "#E9C98B", second: "#D99AAE" }}
              sparklesCount={8}
            >
              for Ananya ♡
            </SparklesText>
          </div>

          {/* Subtitle */}
          <p className="font-hand text-2xl md:text-3xl text-[#D99AAE] font-medium mt-1">
            a little world, made just for you
          </p>

          {/* Supporting Comfort Message */}
          <p className="mt-4 text-[#67505A]/85 text-sm md:text-base font-sans leading-relaxed max-w-xs mx-auto">
            for the days when everything feels a little too loud.
          </p>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-2 my-6 opacity-60">
            <span className="h-px w-10 bg-[#D99AAE]" />
            <SparkleDoodle className="w-4 h-4 text-[#E9C98B]" />
            <span className="h-px w-10 bg-[#D99AAE]" />
          </div>

          {/* Primary Action Button */}
          <div className="flex flex-col items-center gap-3">
            <ShimmerButton
              onClick={handleOpen}
              shimmerColor="#FFF8EF"
              background="#D99AAE"
              className="w-full text-base font-serif tracking-wider shadow-md hover:shadow-lg"
            >
              <span>open your little world ♡</span>
            </ShimmerButton>

            {/* Skip / Direct scroll control */}
            <button
              onClick={onOpenWorld}
              className="text-xs text-[#67505A]/60 hover:text-[#67505A] transition-colors underline underline-offset-4 cursor-pointer mt-1 font-sans"
            >
              or just stroll in gently ↓
            </button>
          </div>
        </div>
      </div>

      {/* Gentle Scroll Indicator */}
      <div className="relative z-10 mt-10 flex flex-col items-center gap-1.5 opacity-60 text-xs font-hand text-[#67505A] animate-bounce">
        <span>scroll down gently</span>
        <ArrowDown className="w-3.5 h-3.5" />
      </div>
    </section>
  )
}
