import React, { useState } from "react"
import { SparkleDoodle, FlowerDoodle, HeartDoodle } from "./Doodles"
import { Heart, Sparkles, Smile, Compass, Palette, Coffee, UserCheck } from "lucide-react"

const CARDS_DATA = [
  {
    id: "smile",
    title: "your little smile ♡",
    rotation: "-rotate-2",
    tapeColor: "washi-tape",
    icon: Smile,
    short: "the gentlest, warmest thing.",
    detail: "how it lights up everything around you, even when you're just laughing quietly to yourself or amused by something silly. it's effortlessly bright.",
    tag: "comfort"
  },
  {
    id: "lost",
    title: "the way you get lost in your own world",
    rotation: "rotate-1",
    tapeColor: "washi-tape-lavender",
    icon: Compass,
    short: "your focus and quiet depth.",
    detail: "watching you immersed in drawing, listening to your music, or deep in your thoughts is the sweetest thing. you carry an entire magical universe inside you.",
    tag: "magic"
  },
  {
    id: "creative",
    title: "your creative little mind",
    rotation: "-rotate-1",
    tapeColor: "washi-tape-gold",
    icon: Palette,
    short: "seeing art in everything.",
    detail: "you notice colors, tiny aesthetic details, and quiet beauty that most people walk straight past. your perspective is genuinely rare and lovely.",
    tag: "art"
  },
  {
    id: "ordinary",
    title: "the way ordinary things become interesting with you",
    rotation: "rotate-2",
    tapeColor: "washi-tape",
    icon: Coffee,
    short: "magic in quiet moments.",
    detail: "even an uneventful afternoon, a short quiet walk, or an ordinary conversation feels special and comforting when it's with you.",
    tag: "warmth"
  },
  {
    id: "details",
    title: "the little things that make you, you",
    rotation: "-rotate-2",
    tapeColor: "washi-tape-lavender",
    icon: Sparkles,
    short: "every tiny habit.",
    detail: "the quiet ways you express yourself, the things you care about, your gentle humor, and every small thing you probably never think twice about.",
    tag: "tender"
  },
  {
    id: "safe",
    title: "the fact that you don't have to try to be anyone else around me",
    rotation: "rotate-1",
    tapeColor: "washi-tape-gold",
    icon: UserCheck,
    short: "always safe to just exist.",
    detail: "you never have to perform, pretend, or put on a smile here. you are always welcomed, valued, and appreciated exactly as you are.",
    tag: "peace"
  }
]

export const LoveNotesWall = () => {
  const [activeCard, setActiveCard] = useState(null)

  const toggleCard = (id) => {
    setActiveCard(activeCard === id ? null : id)
  }

  return (
    <section id="little-things" className="relative py-20 px-4 md:px-8 bg-[#FFF8EF]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5DCE3] text-[#67505A] text-sm font-hand mb-3 shadow-xs">
            <HeartDoodle className="w-3.5 h-3.5 text-[#D99AAE]" />
            <span>little reminders for your heart</span>
            <HeartDoodle className="w-3.5 h-3.5 text-[#D99AAE]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-[#252747] font-normal tracking-wide">
            Little Things I Love About You
          </h2>
          <p className="mt-3 text-[#67505A]/80 font-sans max-w-md mx-auto text-sm md:text-base">
            A small collection of reasons why you are so very special. Tap any card to peek inside.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {CARDS_DATA.map((card) => {
            const isOpen = activeCard === card.id
            const IconComponent = card.icon

            return (
              <div
                key={card.id}
                onClick={() => toggleCard(card.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    toggleCard(card.id)
                  }
                }}
                tabIndex={0}
                role="button"
                aria-expanded={isOpen}
                className={`group relative rounded-2xl p-6 bg-white border border-[#D99AAE]/25 polaroid-shadow cursor-pointer transition-all duration-300 transform ${card.rotation} hover:rotate-0 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-[#D99AAE] focus:ring-offset-2`}
              >
                {/* Washi tape topper */}
                <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 ${card.tapeColor} px-6 py-1 rounded text-[10px] font-hand tracking-wider text-[#67505A]/80 uppercase`}>
                  {card.tag}
                </div>

                {/* Card Icon & Title */}
                <div className="flex items-start gap-3 mt-1">
                  <div className="p-2.5 rounded-xl bg-[#F5DCE3]/60 text-[#D99AAE] shrink-0 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl text-[#252747] font-medium leading-snug">
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* Short preview */}
                <p className="mt-3 font-hand text-lg text-[#D99AAE]">
                  "{card.short}"
                </p>

                {/* Detailed Reveal Note */}
                <div
                  className={`mt-3 pt-3 border-t border-[#D99AAE]/20 text-[#67505A]/90 text-sm leading-relaxed transition-all duration-300 ${
                    isOpen ? "block opacity-100" : "hidden opacity-0"
                  }`}
                >
                  <p className="bg-[#FAF4EB]/80 p-3 rounded-xl border-l-2 border-[#D99AAE]">
                    {card.detail}
                  </p>
                </div>

                {/* Action hint footer */}
                <div className="mt-4 flex items-center justify-between text-xs text-[#67505A]/50 font-hand">
                  <span>{isOpen ? "tap to fold note" : "tap to read more ♡"}</span>
                  <Heart className={`w-3.5 h-3.5 transition-colors ${isOpen ? "text-[#D99AAE] fill-current" : "text-[#D99AAE]/40"}`} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
