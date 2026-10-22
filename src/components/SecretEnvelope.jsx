import React, { useState, useRef } from "react"
import gsap from "gsap"
import confetti from "canvas-confetti"
import { ShimmerButton } from "./magicui/ShimmerButton"
import { HeartDoodle, FlowerDoodle, SparkleDoodle } from "./Doodles"
import { Mail, Heart, Sparkles, X, Lock, KeyRound } from "lucide-react"

export const SecretEnvelope = () => {
  const [isOpen, setIsOpen] = useState(false)
  const letterRef = useRef(null)
  const envelopeFlapRef = useRef(null)

  const handleOpen = () => {
    if (isOpen) {
      setIsOpen(false)
      return
    }

    setIsOpen(true)

    // Fire gentle romantic pastel confetti
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.75 },
        colors: ["#F5DCE3", "#D99AAE", "#DCD7F7", "#E9C98B", "#FFF8EF"],
        shapes: ["circle"],
        scalar: 0.9,
      })
    } catch {
      // ignore
    }

    // GSAP reveal animation
    const tl = gsap.timeline()
    if (envelopeFlapRef.current) {
      tl.to(envelopeFlapRef.current, {
        rotateX: 180,
        duration: 0.5,
        ease: "power2.out"
      })
    }
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <section id="secret-envelope" className="relative py-24 px-4 md:px-8 bg-[#FFF8EF]">
      <div className="max-w-xl mx-auto text-center">
        {/* Header */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5DCE3] text-[#67505A] text-sm font-hand mb-3 shadow-xs">
          <HeartDoodle className="w-3.5 h-3.5 text-[#D99AAE]" />
          <span>a secret sealed just for you</span>
          <HeartDoodle className="w-3.5 h-3.5 text-[#D99AAE]" />
        </div>
        <h2 className="text-3xl md:text-5xl font-serif text-[#252747] font-normal tracking-wide">
          The Secret Envelope
        </h2>
        <p className="mt-3 text-[#67505A]/80 font-sans max-w-sm mx-auto text-sm md:text-base">
          There is one more little note tucked away here for you.
        </p>

        {/* Envelope Interactive Object */}
        <div className="relative mt-10 perspective-[1000px]">
          {!isOpen ? (
            /* Closed Envelope Presentation */
            <div
              onClick={handleOpen}
              className="group relative cursor-pointer mx-auto max-w-sm rounded-3xl bg-gradient-to-br from-[#FFFDF9] to-[#F5DCE3]/50 border-2 border-[#D99AAE]/40 p-8 letter-shadow hover:scale-102 transition-all duration-300"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  handleOpen()
                }
              }}
              aria-label="Open secret envelope"
            >
              {/* Wax Seal / Ribbon Heart Stamp */}
              <div className="w-16 h-16 mx-auto rounded-full bg-[#D99AAE] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mb-4 border-2 border-white/80">
                <Heart className="w-8 h-8 fill-current" />
              </div>

              <p className="font-hand text-2xl text-[#252747] font-semibold">
                a little something for you ♡
              </p>
              <p className="mt-1 text-xs text-[#67505A]/70 font-sans">
                click the envelope to break the seal
              </p>

              {/* Decorative Envelope Lines */}
              <div className="mt-6 pt-4 border-t border-dashed border-[#D99AAE]/30 flex items-center justify-center gap-2 text-xs font-hand text-[#D99AAE]">
                <SparkleDoodle className="w-3.5 h-3.5" />
                <span>sealed with genuine care</span>
                <SparkleDoodle className="w-3.5 h-3.5" />
              </div>
            </div>
          ) : (
            /* Open Letter Unfolded */
            <div
              ref={letterRef}
              className="relative mx-auto rounded-3xl bg-white border border-[#D99AAE]/30 p-8 md:p-10 letter-shadow paper-texture text-left animate-fade-in"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#F5DCE3]/60 text-[#67505A] transition cursor-pointer"
                title="Tuck letter back into envelope"
                aria-label="Close letter"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Washi Tape top */}
              <div className="washi-tape-lavender inline-block px-5 py-1 rounded text-[11px] font-hand text-[#252747] uppercase tracking-wider mb-5">
                read softly
              </div>

              {/* Heartfelt Note Content */}
              <div className="space-y-4 text-[#67505A] font-sans text-sm md:text-base leading-relaxed">
                <p className="font-serif text-lg md:text-xl text-[#252747] leading-relaxed">
                  if i could give you one thing, it would be the ability to see yourself the way i see you.
                </p>

                <p>
                  not because you have to be perfect, or because you always have to smile, but because there is so much about you worth appreciating even on the days you don't see it yourself.
                </p>

                <p className="font-hand text-2xl md:text-3xl text-[#D99AAE] font-semibold">
                  i care about you, ananya. more than a little.
                </p>

                <p>
                  take your time, take a breath, and remember that you never have to earn my care by being cheerful.
                </p>

                <p className="font-medium text-[#252747]">
                  i'm here because i want to be, and i hope this tiny corner of the world reminds you of that. ♡
                </p>
              </div>

              {/* Footer actions */}
              <div className="mt-8 pt-5 border-t border-[#D99AAE]/20 flex items-center justify-between">
                <span className="font-hand text-xl text-[#D99AAE]">
                  always in your corner ♡
                </span>
                <button
                  onClick={handleClose}
                  className="px-4 py-1.5 rounded-full bg-[#FAF4EB] hover:bg-[#F5DCE3] text-xs font-medium text-[#67505A] transition cursor-pointer"
                >
                  fold back into envelope
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
