import React from "react"
import { MoonDoodle, CloudDoodle, SparkleDoodle, HeartDoodle, TeaCupDoodle } from "./Doodles"
import { ArrowUp, Heart } from "lucide-react"

export const GentleGoodnight = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-[#FFF8EF] via-[#F5DCE3]/30 to-[#DCD7F7]/30 border-t border-[#D99AAE]/20 overflow-hidden">
      {/* Decorative sky doodles */}
      <div className="absolute top-10 left-12 opacity-60 pointer-events-none animate-gentle-float">
        <MoonDoodle className="w-12 h-12 text-[#E9C98B]" />
      </div>
      <div className="absolute top-16 right-16 opacity-60 pointer-events-none animate-gentle-float" style={{ animationDelay: "2s" }}>
        <CloudDoodle className="w-20 h-12 text-[#DCD7F7]" />
      </div>

      <div className="max-w-xl mx-auto text-center relative z-10">
        {/* Tea / Comfort icon */}
        <div className="w-12 h-12 mx-auto rounded-full bg-white flex items-center justify-center text-[#D99AAE] mb-5 shadow-xs border border-[#D99AAE]/20">
          <TeaCupDoodle className="w-7 h-7" />
        </div>

        {/* Closing Notes */}
        <h3 className="font-serif text-3xl md:text-4xl text-[#252747] font-normal tracking-wide">
          that's all for now, my favourite human ♡
        </h3>

        <div className="my-6 space-y-3 font-sans text-sm md:text-base text-[#67505A]/85 leading-relaxed max-w-md mx-auto">
          <p>
            take your time. make some art. drink a little water. be gentle with yourself.
          </p>
          <p className="font-hand text-2xl text-[#D99AAE] font-medium">
            and if today wasn't your day, that's okay too.
          </p>
        </div>

        {/* Final Signature */}
        <div className="pt-6 border-t border-[#D99AAE]/20 inline-block">
          <p className="font-hand text-xl md:text-2xl text-[#252747] flex items-center justify-center gap-1.5">
            <span>made with love, just for you.</span>
            <Heart className="w-4 h-4 text-[#D99AAE] fill-current" />
          </p>
          <p className="text-[11px] text-[#67505A]/50 font-sans mt-1">
            a little world for ananya walunjkar
          </p>
        </div>

        {/* Return to Top Button */}
        <div className="mt-10">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#FFF8EF] text-[#67505A] text-xs font-medium border border-[#D99AAE]/30 shadow-xs transition-all hover:-translate-y-1 hover:shadow-md cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5 text-[#D99AAE]" />
            <span>back to the top</span>
          </button>
        </div>
      </div>
    </footer>
  )
}
