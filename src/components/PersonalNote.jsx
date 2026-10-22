import React, { useState, useRef } from "react"
import gsap from "gsap"
import { FlowerDoodle, SparkleDoodle, HeartDoodle, TeaCupDoodle } from "./Doodles"
import { ChevronDown, ChevronUp, Sparkles, Feather } from "lucide-react"

export const PersonalNote = () => {
  const [isFolded, setIsFolded] = useState(false)
  const letterBodyRef = useRef(null)

  const toggleFold = () => {
    if (!letterBodyRef.current) return

    if (isFolded) {
      // Unfold
      gsap.to(letterBodyRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => setIsFolded(false)
      })
    } else {
      // Fold
      gsap.to(letterBodyRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => setIsFolded(true)
      })
    }
  }

  return (
    <section id="personal-note" className="relative py-20 px-4 md:px-8 bg-[#FFF8EF]">
      <div className="max-w-2xl mx-auto">
        {/* Scrapbook Sheet */}
        <div className="relative rounded-3xl bg-[#FFFDF9] border border-[#D99AAE]/30 p-7 md:p-12 letter-shadow paper-texture">
          {/* Top Washi Tape Lavender */}
          <div className="absolute -top-3.5 left-12 washi-tape-lavender px-8 py-1.5 rounded-xs transform -rotate-2">
            <span className="text-[10px] font-hand text-[#252747]/80 tracking-widest uppercase">
              for your eyes only
            </span>
          </div>

          {/* Golden tape top right */}
          <div className="absolute -top-3 right-12 washi-tape-gold px-7 py-1 rounded-xs transform rotate-2">
            <span className="text-[10px] font-hand text-[#67505A]/80 tracking-widest uppercase">
              comfort note
            </span>
          </div>

          {/* Header Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-[#D99AAE]/20 mb-6">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-[#F5DCE3]/60 text-[#D99AAE]">
                <Feather className="w-4 h-4" />
              </span>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-[#252747]">
                  A Note from Me
                </h3>
                <p className="text-xs font-hand text-[#D99AAE] text-base">
                  read whenever you need a quiet breath ♡
                </p>
              </div>
            </div>

            {/* Fold / Unfold Button */}
            <button
              onClick={toggleFold}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF4EB] hover:bg-[#F5DCE3]/60 text-[#67505A] text-xs font-medium transition cursor-pointer border border-[#67505A]/10"
              aria-expanded={!isFolded}
            >
              <span>{isFolded ? "Unfold letter" : "Fold letter"}</span>
              {isFolded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Letter Body Container */}
          <div ref={letterBodyRef} className="overflow-hidden transition-all">
            <div className="space-y-5 text-[#67505A] font-sans text-sm md:text-base leading-relaxed tracking-normal">
              <p className="font-hand text-2xl md:text-3xl text-[#252747] font-semibold text-[#D99AAE]">
                hey, my favourite person ♡
              </p>

              <p>
                i know that sometimes the world gets a little overwhelming, and you just want to be in your own little space for a while.
              </p>

              <p>
                you don't always have to explain what you're feeling. you don't have to find the right words. and you definitely don't have to pretend to be okay just to make anyone else comfortable.
              </p>

              <p className="p-3.5 rounded-xl bg-[#FAF4EB] border-l-3 border-[#D99AAE] text-[#252747] italic">
                so i made you this tiny corner of the internet.
              </p>

              <p>
                there are little things to explore, a place to draw, a few silly surprises, and some words i hope make you smile.
              </p>

              <p className="font-medium text-[#252747]">
                take your time here, okay?
              </p>

              <p>
                if all you want to do today is draw, then draw. if you want quiet, have your quiet. if you feel like smiling at something silly, i hope you find it here.
              </p>

              <p>
                i can't promise to make every difficult day disappear, but i can promise that you matter to me on the difficult ones, too.
              </p>

              <p className="text-[#252747] font-serif text-base md:text-lg">
                you are loved when you're happy, when you're quiet, when you're confused, when you need space, and when you don't feel like talking.
              </p>

              <p className="text-[#67505A]/90">
                no pressure to reply to this. no pressure to feel better immediately.
              </p>

              <p className="text-[#67505A]/90">
                just a little reminder that someone is rooting for you, always.
              </p>

              {/* Signature Block */}
              <div className="pt-6 mt-8 border-t border-[#D99AAE]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="font-hand text-2xl md:text-3xl text-[#252747] font-semibold">
                    with all my love,
                  </p>
                  <p className="font-hand text-xl md:text-2xl text-[#D99AAE] mt-0.5">
                    someone who feels very lucky to have you ♡
                  </p>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <TeaCupDoodle className="w-7 h-7 text-[#D99AAE]" />
                  <FlowerDoodle className="w-6 h-6 text-[#8CA98B]" />
                </div>
              </div>
            </div>
          </div>

          {/* Folded teaser preview */}
          {isFolded && (
            <div className="py-4 text-center">
              <p className="font-hand text-xl text-[#D99AAE]">
                (the letter is tucked away safely. click "unfold letter" to read anytime ♡)
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
