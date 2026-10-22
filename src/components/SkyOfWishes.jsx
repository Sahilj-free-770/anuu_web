import React, { useState } from "react"
import { Meteors } from "./magicui/Meteors"
import { Particles } from "./magicui/Particles"
import { MoonDoodle, SparkleDoodle } from "./Doodles"
import { Sparkles, X, Heart, Star } from "lucide-react"

const STARS = [
  { id: 1, x: "15%", y: "22%", size: "w-5 h-5", label: "Evening Star", text: "you are allowed to take things one little step at a time." },
  { id: 2, x: "32%", y: "15%", size: "w-6 h-6", label: "Gentle Star", text: "you don't need to have everything figured out today." },
  { id: 3, x: "50%", y: "28%", size: "w-5 h-5", label: "Calm Star", text: "rest is not something you need to earn." },
  { id: 4, x: "68%", y: "18%", size: "w-6 h-6", label: "Kindness Star", text: "you deserve kindness, including from yourself." },
  { id: 5, x: "85%", y: "25%", size: "w-5 h-5", label: "Quiet Star", text: "even quiet days belong in your story." },
  { id: 6, x: "22%", y: "55%", size: "w-6 h-6", label: "Cheering Star", text: "someone out there is cheering for you, always." },
  { id: 7, x: "42%", y: "62%", size: "w-5 h-5", label: "Dawn Star", text: "you can begin again whenever you need to." },
  { id: 8, x: "62%", y: "50%", size: "w-7 h-7", label: "Pocket of Peace", text: "if i could send you one thing right now, it would be a little pocket of peace ♡" },
  { id: 9, x: "78%", y: "65%", size: "w-5 h-5", label: "Hope Star", text: "if today is difficult, i hope tomorrow is gentler." },
  { id: 10, x: "50%", y: "78%", size: "w-6 h-6", label: "Special Star", text: "just in case you forgot: you are very, very special to me." },
]

export const SkyOfWishes = () => {
  const [activeWish, setActiveWish] = useState(null)

  return (
    <section id="sky-of-wishes" className="relative py-24 px-4 md:px-8 night-sky text-white overflow-hidden">
      {/* Magic UI Meteors */}
      <Meteors number={14} className="opacity-70" />

      {/* Magic UI Particles for soft stardust */}
      <Particles
        className="absolute inset-0 opacity-80"
        quantity={65}
        size={0.6}
        color="#E9C98B"
        staticity={40}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#E9C98B] text-sm font-hand mb-3 backdrop-blur-xs border border-white/10">
            <SparkleDoodle className="w-3.5 h-3.5 text-[#E9C98B]" />
            <span>touch a glowing star</span>
            <SparkleDoodle className="w-3.5 h-3.5 text-[#E9C98B]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-[#FFF8EF] font-normal tracking-wide">
            A Little Sky of Wishes
          </h2>
          <p className="mt-3 text-[#DCD7F7]/80 font-sans max-w-md mx-auto text-sm md:text-base">
            Each star holds a gentle reminder for you. Tap any star in the night sky to reveal what it wants to say.
          </p>
        </div>

        {/* Constellation Canvas Interactive Area */}
        <div className="relative min-h-[460px] md:min-h-[520px] rounded-3xl bg-[#1c1e36]/60 border border-white/15 backdrop-blur-xs p-6 shadow-2xl overflow-hidden">
          {/* Crescent Moon in corner */}
          <div className="absolute top-6 right-8 pointer-events-none opacity-85 animate-gentle-float">
            <MoonDoodle className="w-16 h-16 md:w-20 md:h-20 text-[#E9C98B]" />
          </div>

          {/* Interactive Clickable Stars */}
          {STARS.map((star) => (
            <button
              key={star.id}
              onClick={() => setActiveWish(star)}
              className="group absolute -translate-x-1/2 -translate-y-1/2 p-3 transition-transform duration-300 hover:scale-135 focus:outline-none focus:ring-2 focus:ring-[#E9C98B] rounded-full cursor-pointer"
              style={{ left: star.x, top: star.y }}
              aria-label={`Wish from ${star.label}`}
            >
              {/* Star Glow */}
              <div className="absolute inset-0 rounded-full bg-[#E9C98B]/30 blur-md group-hover:bg-[#E9C98B]/60 transition-colors animate-pulse" />
              
              {/* Star Icon */}
              <div className="relative text-[#E9C98B] group-hover:text-amber-200 transition-colors">
                <Star className={`${star.size} fill-current drop-shadow-[0_0_8px_rgba(233,201,139,0.8)]`} />
              </div>

              {/* Tooltip on hover */}
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[11px] font-hand text-[#FFF8EF]/80 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-black/40 px-2 py-0.5 rounded-full">
                {star.label}
              </span>
            </button>
          ))}

          {/* Prompt guide inside sky */}
          <div className="absolute bottom-4 left-6 pointer-events-none text-xs font-hand text-[#DCD7F7]/60">
            ★ {STARS.length} gentle stars waiting for you
          </div>
        </div>
      </div>

      {/* Reassuring Wish Modal Popover */}
      {activeWish && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fade-in">
          <div 
            className="relative bg-[#FFF8EF] text-[#252747] rounded-3xl p-7 md:p-9 max-w-md w-full border border-[#D99AAE]/40 shadow-2xl text-center paper-texture"
            role="dialog"
            aria-modal="true"
            aria-labelledby="wish-dialog-title"
          >
            {/* Close button */}
            <button
              onClick={() => setActiveWish(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#F5DCE3]/60 text-[#67505A] transition cursor-pointer"
              aria-label="Close message"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Star Icon */}
            <div className="w-14 h-14 mx-auto rounded-full bg-[#F5DCE3] flex items-center justify-center text-[#D99AAE] mb-4 shadow-xs">
              <Sparkles className="w-7 h-7" />
            </div>

            <p id="wish-dialog-title" className="text-xs uppercase tracking-widest font-semibold text-[#D99AAE]">
              Star Message
            </p>

            <h3 className="font-hand text-2xl md:text-3xl text-[#252747] font-semibold mt-1">
              "{activeWish.label}"
            </h3>

            {/* Note text */}
            <div className="my-6 p-4 rounded-2xl bg-[#FAF4EB] border border-[#D99AAE]/20">
              <p className="font-serif text-xl md:text-2xl text-[#252747] leading-relaxed">
                "{activeWish.text}"
              </p>
            </div>

            <button
              onClick={() => setActiveWish(null)}
              className="px-6 py-2.5 rounded-full bg-[#D99AAE] hover:bg-[#ce8ba1] text-white font-serif text-sm tracking-wide shadow-xs transition cursor-pointer"
            >
              keep this in your pocket ♡
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
