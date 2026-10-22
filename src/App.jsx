import React, { useState } from "react"
import { OpeningLetter } from "./components/OpeningLetter"
import { PersonalNote } from "./components/PersonalNote"
import { LoveNotesWall } from "./components/LoveNotesWall"
import { ArtCorner } from "./components/ArtCorner"
import { SkyOfWishes } from "./components/SkyOfWishes"
import { TinyAdventure } from "./components/TinyAdventure"
import { SecretEnvelope } from "./components/SecretEnvelope"
import { GentleGoodnight } from "./components/GentleGoodnight"
import { ScrapbookNav } from "./components/ScrapbookNav"

export default function App() {
  const [selectedPromptForArt, setSelectedPromptForArt] = useState(null)

  const handleOpenWorld = () => {
    const noteSection = document.getElementById("personal-note")
    if (noteSection) {
      noteSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSelectPrompt = (prompt) => {
    setSelectedPromptForArt(prompt)
  }

  return (
    <div className="relative min-h-screen bg-[#FFF8EF] text-[#67505A] selection:bg-[#F5DCE3] selection:text-[#252747] font-sans antialiased overflow-x-hidden">
      {/* Floating Scrapbook Quick Nav */}
      <ScrapbookNav />

      {/* Main Flow: 8 Scrapbook Pages */}
      <main>
        {/* Section 1: The Opening Letter */}
        <OpeningLetter onOpenWorld={handleOpenWorld} />

        {/* Section 2: A Note From Me */}
        <PersonalNote />

        {/* Section 3: Little Things I Love About You */}
        <LoveNotesWall />

        {/* Section 4: The Little Art Corner */}
        <ArtCorner incomingPrompt={selectedPromptForArt} />

        {/* Section 5: A Little Sky of Wishes */}
        <SkyOfWishes />

        {/* Section 6: A Tiny Drawing Game ("Pick a Tiny Adventure") */}
        <TinyAdventure onSelectPromptForArt={handleSelectPrompt} />

        {/* Section 7: The Secret Envelope */}
        <SecretEnvelope />

        {/* Section 8: A Gentle Goodnight */}
        <GentleGoodnight />
      </main>
    </div>
  )
}
