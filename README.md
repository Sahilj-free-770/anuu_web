# A Little World for Ananya ♡
### A Personal, Romantic, Interactive Comfort Website dedicated to Ananya Walunjkar

> *"for the days when everything feels a little too loud."*

A digital love letter and handmade art journal crafted as a safe, comforting space for Ananya. Designed for moments when she needs quiet, time to draw, gentle appreciation, and a reminder that someone cares deeply about her.

---

## ✨ Features & Scrapbook Pages

1. **The Opening Letter (Hero)**
   - Dreamy illustrated evening sky with gentle stardust and drifting clouds.
   - Handmade paper envelope with washi tape and heart seal.
   - Magic UI `SparklesText` highlighting **for Ananya ♡**.
   - Interactive GSAP opening animation with shimmery call-to-action (`ShimmerButton`).

2. **A Note from Me**
   - A sincere, tender comfort letter on warm textured paper with handwritten signature and washi tape.
   - Preserves unconditional love and reassurance with zero pressure or guilt.
   - Interactive fold / unfold toggle.

3. **Little Things I Love About You**
   - Playful scrapbook wall with organic card rotations, polaroids, and tape strips.
   - Interactive click-to-reveal notes celebrating her smile, her quiet creativity, her depth, and her authentic self.

4. **The Little Art Corner**
   - A real, fully functioning HTML5 sketchbook drawing studio.
   - Freehand drawing with stylus, touch, and mouse (`touch-action: none` prevents accidental page scroll).
   - High-DPI crisp canvas rendering (`window.devicePixelRatio`).
   - Artist color palette: Warm brown ink, Dusty rose, Blush pink, Lavender, Pale gold, Sage leaf, Midnight, White.
   - 4 brush styles: Fine Pencil, Ink Pen, Marker, Soft Brush.
   - Eraser tool, Undo history stack, and Clear canvas with safe confirmation dialog.
   - 4 paper textures: Warm Cream, Dot Grid, Sketch Grid, Night Paper.
   - Download artwork as PNG (`ananya-sketch.png`) directly to device.
   - Privacy guarantee: All artwork stays strictly local on device.
   - Drawing prompt generator with *"give me a random idea"* button.

5. **A Little Sky of Wishes**
   - Deep night sky with Magic UI `Meteors` and stardust `Particles`.
   - 10 glowing clickable stars containing gentle, comforting affirmations.
   - Reassuring star popover modal.

6. **Pick a Tiny Adventure**
   - Three cozy vignettes: *A Moonlit Garden*, *A Sleepy Cloud*, and *A Tiny Flower Shop*.
   - Each reveals an atmospheric scene and prompt with a *"Send this prompt to Art Corner 🎨"* button that auto-loads the idea into her sketchbook.

7. **The Secret Envelope**
   - Sealed with a delicate heart wax stamp.
   - Clicking triggers pastel stardust confetti (`canvas-confetti`) and unfolds an intimate personal message.

8. **A Gentle Goodnight**
   - Cozy bedtime scene with moon and clouds.
   - *"take your time. make some art. drink a little water. be gentle with yourself."*
   - Smooth return-to-top button.

9. **Scrapbook Quick Navigation**
   - Floating header providing one-tap navigation across sections.

---

## 🎨 Color Palette & Typography

- **Warm Paper Cream**: `#FFF8EF`
- **Blush Pink**: `#F5DCE3`
- **Dusty Rose**: `#D99AAE`
- **Soft Lavender**: `#DCD7F7`
- **Muted Midnight Blue**: `#252747`
- **Warm Brown Ink**: `#67505A`
- **Pale Gold**: `#E9C98B`

- **Headings**: *Cormorant Garamond* (Editorial Serif)
- **Handwritten Notes**: *Caveat* (Warm Calligraphy)
- **Interface & Comfort Text**: *Plus Jakarta Sans* (Clean, readable UI)

---

## 🛠️ Tech Stack

- **React 19** + **Vite 8**
- **Tailwind CSS v4** (Design tokens, washi tape, paper textures)
- **GSAP 3** (Motion design, letter folding, micro-interactions)
- **Magic UI** (`Particles`, `ShimmerButton`, `SparklesText`, `Meteors`)
- **Lucide Icons** & **Custom Hand-Drawn SVG Doodles**
- **HTML5 Canvas 2D** (`willReadFrequently: true`, pointer events, touch-friendly)
- **canvas-confetti** (Gentle pastel celebration)

---

## 🚀 Running the Project Locally

To run the development server:
```bash
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

To build and preview production static files:
```bash
npm run build
npm run preview
```
Open [http://localhost:4173](http://localhost:4173).
