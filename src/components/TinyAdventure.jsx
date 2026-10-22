import React, { useState } from "react"
import { MoonDoodle, CloudDoodle, FlowerDoodle, SparkleDoodle } from "./Doodles"
import { ArrowLeft, Sparkles, Send, Palette } from "lucide-react"

const ADVENTURES = [
  {
    id: "garden",
    title: "A Moonlit Garden",
    subtitle: "night-blooming jasmine, damp moss & fireflies",
    emoji: "🌙",
    bgGradient: "from-[#252747] to-[#3a3d66]",
    textColor: "text-[#FFF8EF]",
    prompt: "draw a flower that glows in the dark 🌸✨",
    story: "The air smells like fresh rain and sweet jasmine. Little bioluminescent petals drift from the branches, illuminating a secret bench made just for daydreaming.",
    illustration: MoonDoodle,
  },
  {
    id: "cloud",
    title: "A Sleepy Cloud",
    subtitle: "cotton-soft pillows, vanilla breezes & starry blankets",
    emoji: "☁️",
    bgGradient: "from-[#DCD7F7] to-[#F5DCE3]",
    textColor: "text-[#252747]",
    prompt: "design a tiny bedroom inside a cloud ☁️🛏️",
    story: "High above the noisy city, this cloud is completely quiet. It has a fluffy reading nook, a mug of warm milk with cinnamon, and warm stars hanging from silk threads.",
    illustration: CloudDoodle,
  },
  {
    id: "flowershop",
    title: "A Tiny Flower Shop",
    subtitle: "vintage terracotta pots, pastel ribbons & fresh chamomile",
    emoji: "🌷",
    bgGradient: "from-[#F5DCE3] to-[#FFF8EF]",
    textColor: "text-[#252747]",
    prompt: "create a bouquet for someone you love 🌷💐",
    story: "The bell above the wooden door tinkles softly. Buckets of sweet peas, hydrangeas, and delicate baby's breath fill every wooden shelf. You have all the time in the world here.",
    illustration: FlowerDoodle,
  }
]

export const TinyAdventure = ({ onSelectPromptForArt }) => {
  const [selectedAdventure, setSelectedAdventure] = useState(null)

  const handleSendToArt = (prompt) => {
    if (onSelectPromptForArt) {
      onSelectPromptForArt(prompt)
    }
    const artSection = document.getElementById("art-corner")
    if (artSection) {
      artSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="tiny-adventure" className="relative py-20 px-4 md:px-8 bg-[#FAF4EB]/60">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DCD7F7]/60 text-[#252747] text-sm font-hand mb-3 shadow-xs">
            <SparkleDoodle className="w-3.5 h-3.5 text-[#D99AAE]" />
            <span>gentle creative pause</span>
            <SparkleDoodle className="w-3.5 h-3.5 text-[#D99AAE]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-[#252747] font-normal tracking-wide">
            Pick a Tiny Adventure
          </h2>
          <p className="mt-3 text-[#67505A]/80 font-sans max-w-md mx-auto text-sm md:text-base">
            Where would your mind like to wander today? Choose a cozy little scene to explore.
          </p>
        </div>

        {/* 3 Choices Grid or Active Scene */}
        {!selectedAdventure ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ADVENTURES.map((adv) => {
              const Illustration = adv.illustration
              return (
                <button
                  key={adv.id}
                  onClick={() => setSelectedAdventure(adv)}
                  className="group relative rounded-3xl p-6 bg-white border border-[#D99AAE]/25 polaroid-shadow text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D99AAE]"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#FAF4EB] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Illustration className="w-8 h-8 text-[#D99AAE]" />
                  </div>

                  <p className="text-xs font-hand text-[#D99AAE] tracking-wider uppercase">
                    mini escape
                  </p>
                  <h3 className="font-serif text-2xl text-[#252747] font-medium mt-1">
                    {adv.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#67505A]/70 font-sans leading-relaxed">
                    {adv.subtitle}
                  </p>

                  <div className="mt-5 pt-4 border-t border-[#67505A]/10 flex items-center justify-between text-xs font-medium text-[#D99AAE]">
                    <span>Enter scene →</span>
                    <span>{adv.emoji}</span>
                  </div>
                </button>
              )
            })}
          </div>
        ) : (
          /* Active Adventure Vignette */
          <div className={`relative rounded-3xl p-8 md:p-12 shadow-xl bg-gradient-to-br ${selectedAdventure.bgGradient} ${selectedAdventure.textColor} animate-fade-in transition-all duration-500`}>
            {/* Back Button */}
            <button
              onClick={() => setSelectedAdventure(null)}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-xs text-xs font-medium transition cursor-pointer mb-6"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all adventures</span>
            </button>

            <div className="max-w-xl">
              <span className="text-3xl mb-2 block">{selectedAdventure.emoji}</span>
              <h3 className="font-serif text-3xl md:text-4xl font-normal tracking-wide">
                {selectedAdventure.title}
              </h3>
              <p className="mt-4 text-sm md:text-base leading-relaxed opacity-90 font-sans">
                {selectedAdventure.story}
              </p>

              {/* Adventure Prompt Box */}
              <div className="mt-8 p-5 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25">
                <p className="text-xs uppercase tracking-widest font-semibold opacity-75">
                  Your Creative Invitation
                </p>
                <p className="font-hand text-2xl md:text-3xl mt-1 font-medium">
                  "{selectedAdventure.prompt}"
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => handleSendToArt(selectedAdventure.prompt)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#252747] text-xs md:text-sm font-semibold shadow-md hover:bg-[#FFF8EF] transition cursor-pointer hover:scale-105 active:scale-95"
                  >
                    <Palette className="w-4 h-4 text-[#D99AAE]" />
                    <span>Send this prompt to Art Corner 🎨</span>
                  </button>
                  <button
                    onClick={() => setSelectedAdventure(null)}
                    className="text-xs underline opacity-75 hover:opacity-100 transition cursor-pointer"
                  >
                    try another scene
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
