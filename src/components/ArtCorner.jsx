import React, { useState, useRef, useEffect, useCallback } from "react"
import { 
  Undo2, 
  Trash2, 
  Download, 
  Sparkles, 
  Eraser, 
  Paintbrush, 
  Check, 
  HelpCircle,
  FileImage,
  RefreshCw
} from "lucide-react"
import { ShimmerButton } from "./magicui/ShimmerButton"
import { FlowerDoodle, SparkleDoodle } from "./Doodles"

const PALETTE = [
  { name: "Warm Brown Ink", hex: "#67505A" },
  { name: "Dusty Rose", hex: "#D99AAE" },
  { name: "Blush Pink", hex: "#F5B5C8" },
  { name: "Soft Lavender", hex: "#8B7ECE" },
  { name: "Pale Gold", hex: "#E9C98B" },
  { name: "Sage Leaf", hex: "#8CA98B" },
  { name: "Midnight Sky", hex: "#252747" },
  { name: "Paper White", hex: "#FFFFFF" },
]

const BRUSH_SIZES = [
  { label: "Fine Pencil", size: 3 },
  { label: "Ink Pen", size: 6 },
  { label: "Marker", size: 14 },
  { label: "Soft Brush", size: 28 },
]

const PAPER_STYLES = [
  { id: "cream", name: "Warm Cream", bg: "#FFF8EF" },
  { id: "dots", name: "Dot Grid", bg: "#FFFDF9" },
  { id: "grid", name: "Sketch Grid", bg: "#FAF4EB" },
  { id: "midnight", name: "Night Paper", bg: "#252747" },
]

const PROMPT_COLLECTION = [
  "draw a tiny creature that lives on a cloud ☁️",
  "design a flower that only blooms at midnight 🌙",
  "draw what a peaceful afternoon looks like ☕",
  "invent a little character that represents today's mood ✨",
  "draw a place where you would feel completely safe 🏡",
  "make the world's tiniest, silliest masterpiece 🎨",
  "draw a cozy cup of warm tea with a tiny smiling face",
  "draw a secret constellation shaped like something you like",
  "draw a little paper boat floating on a river of stars"
]

export const ArtCorner = ({ incomingPrompt = null }) => {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const isDrawing = useRef(false)
  const lastPoint = useRef({ x: 0, y: 0 })
  const historyRef = useRef([])

  const [color, setColor] = useState("#67505A")
  const [brushSize, setBrushSize] = useState(6)
  const [isEraser, setIsEraser] = useState(false)
  const [paperStyle, setPaperStyle] = useState("cream")
  const [currentPrompt, setCurrentPrompt] = useState(
    "draw a tiny creature that lives on a cloud ☁️"
  )
  const [showClearConfirm, setShowClearConfirm] = useState(false)
  const [downloadNotice, setDownloadNotice] = useState(false)

  // React to incoming prompt from adventure section
  useEffect(() => {
    if (incomingPrompt) {
      setCurrentPrompt(incomingPrompt)
    }
  }, [incomingPrompt])

  // Save canvas state to history for undo
  const saveState = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { willReadFrequently: true })
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    historyRef.current.push(imgData)
    if (historyRef.current.length > 25) {
      historyRef.current.shift()
    }
  }, [])

  // Draw background texture on canvas or render paper pattern
  const fillBackground = useCallback((ctx, width, height, style) => {
    ctx.save()
    if (style === "midnight") {
      ctx.fillStyle = "#252747"
      ctx.fillRect(0, 0, width, height)
    } else if (style === "dots") {
      ctx.fillStyle = "#FFFDF9"
      ctx.fillRect(0, 0, width, height)
      ctx.fillStyle = "rgba(217, 154, 174, 0.35)"
      const spacing = 22
      for (let x = 12; x < width; x += spacing) {
        for (let y = 12; y < height; y += spacing) {
          ctx.beginPath()
          ctx.arc(x, y, 1.2, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    } else if (style === "grid") {
      ctx.fillStyle = "#FAF4EB"
      ctx.fillRect(0, 0, width, height)
      ctx.strokeStyle = "rgba(217, 154, 174, 0.15)"
      ctx.lineWidth = 1
      const spacing = 24
      ctx.beginPath()
      for (let x = 0; x < width; x += spacing) {
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
      }
      for (let y = 0; y < height; y += spacing) {
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
      }
      ctx.stroke()
    } else {
      ctx.fillStyle = "#FFF8EF"
      ctx.fillRect(0, 0, width, height)
    }
    ctx.restore()
  }, [])

  // Initialize canvas with proper DPI
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const dpr = window.devicePixelRatio || 1
    const rect = container.getBoundingClientRect()
    const width = rect.width
    const height = Math.max(380, Math.min(520, window.innerHeight * 0.55))

    // Preserve existing drawing if re-sizing
    let savedData = null
    if (canvas.width > 0 && canvas.height > 0) {
      try {
        savedData = canvas.getContext("2d", { willReadFrequently: true }).getImageData(0, 0, canvas.width, canvas.height)
      } catch {
        // ignore
      }
    }

    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`

    const ctx = canvas.getContext("2d", { willReadFrequently: true })
    ctx.scale(dpr, dpr)
    ctx.lineCap = "round"
    ctx.lineJoin = "round"

    if (savedData) {
      ctx.putImageData(savedData, 0, 0)
    } else {
      fillBackground(ctx, width, height, paperStyle)
      saveState()
    }
  }, [fillBackground, paperStyle, saveState])

  useEffect(() => {
    initCanvas()
    const handleResize = () => {
      // Debounced resize
      setTimeout(() => initCanvas(), 150)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [initCanvas])

  // Get pointer coordinates relative to canvas
  const getCoordinates = (e) => {
    const canvas = canvasRef.current
    if (!canvas) return { x: 0, y: 0 }
    const rect = canvas.getBoundingClientRect()
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
  }

  // Pointer event handlers (mouse, touch, pen with touch-action: none)
  const handlePointerDown = (e) => {
    e.preventDefault()
    const canvas = canvasRef.current
    if (!canvas) return
    canvas.setPointerCapture(e.pointerId)
    isDrawing.current = true
    const { x, y } = getCoordinates(e)
    lastPoint.current = { x, y }

    const ctx = canvas.getContext("2d", { willReadFrequently: true })
    ctx.save()
    ctx.beginPath()
    ctx.arc(x, y, (brushSize / 2), 0, Math.PI * 2)
    ctx.fillStyle = isEraser 
      ? (paperStyle === "midnight" ? "#252747" : (paperStyle === "grid" ? "#FAF4EB" : "#FFF8EF")) 
      : color
    ctx.fill()
    ctx.restore()
  }

  const handlePointerMove = (e) => {
    if (!isDrawing.current) return
    e.preventDefault()
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { willReadFrequently: true })
    const { x, y } = getCoordinates(e)

    ctx.save()
    ctx.beginPath()
    ctx.moveTo(lastPoint.current.x, lastPoint.current.y)
    ctx.lineTo(x, y)
    ctx.strokeStyle = isEraser 
      ? (paperStyle === "midnight" ? "#252747" : (paperStyle === "grid" ? "#FAF4EB" : "#FFF8EF")) 
      : color
    ctx.lineWidth = brushSize
    ctx.lineCap = "round"
    ctx.lineJoin = "round"
    ctx.stroke()
    ctx.restore()

    lastPoint.current = { x, y }
  }

  const handlePointerUp = (e) => {
    if (!isDrawing.current) return
    e.preventDefault()
    isDrawing.current = false
    try {
      e.target.releasePointerCapture(e.pointerId)
    } catch {
      // ignore
    }
    saveState()
  }

  // Undo stroke
  const handleUndo = () => {
    const canvas = canvasRef.current
    if (!canvas || historyRef.current.length <= 1) return
    historyRef.current.pop() // remove current state
    const previousState = historyRef.current[historyRef.current.length - 1]
    const ctx = canvas.getContext("2d", { willReadFrequently: true })
    ctx.putImageData(previousState, 0, 0)
  }

  // Clear canvas
  const handleClear = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { willReadFrequently: true })
    const dpr = window.devicePixelRatio || 1
    const width = canvas.width / dpr
    const height = canvas.height / dpr
    fillBackground(ctx, width, height, paperStyle)
    historyRef.current = []
    saveState()
    setShowClearConfirm(false)
  }

  // Download artwork
  const handleDownload = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const link = document.createElement("a")
    link.download = `for-ananya-artwork-${Date.now().toString().slice(-4)}.png`
    link.href = canvas.toDataURL("image/png")
    link.click()

    setDownloadNotice(true)
    setTimeout(() => setDownloadNotice(false), 4500)
  }

  // Random prompt
  const handleRandomPrompt = () => {
    const filtered = PROMPT_COLLECTION.filter((p) => p !== currentPrompt)
    const randomPick = filtered[Math.floor(Math.random() * filtered.length)]
    setCurrentPrompt(randomPick)
  }

  return (
    <section id="art-corner" className="relative py-20 px-4 md:px-8 bg-[#FAF4EB]/80">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5DCE3] text-[#67505A] text-sm font-hand mb-3 shadow-xs">
            <SparkleDoodle className="w-4 h-4 text-[#D99AAE]" />
            <span>your little creative space</span>
            <SparkleDoodle className="w-4 h-4 text-[#D99AAE]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-[#252747] font-normal tracking-wide">
            The Little Art Corner
          </h2>
          <p className="mt-3 text-[#67505A]/80 font-sans max-w-lg mx-auto text-sm md:text-base">
            Draw whatever you feel like. No rules, no expectations. A place for quiet doodles, little creatures, or peaceful scribbles.
          </p>
        </div>

        {/* Prompt Card */}
        <div className="relative mb-6 p-4 md:p-5 rounded-2xl bg-[#FFF8EF] border border-[#D99AAE]/30 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3 text-left">
            <span className="p-2 rounded-xl bg-[#F5DCE3]/70 text-[#D99AAE] shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-[#D99AAE]">
                Gentle Drawing Prompt
              </p>
              <p className="font-hand text-xl md:text-2xl text-[#252747] font-medium mt-0.5">
                "{currentPrompt}"
              </p>
            </div>
          </div>
          <button
            onClick={handleRandomPrompt}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5DCE3]/80 hover:bg-[#F5DCE3] text-[#67505A] text-xs md:text-sm font-medium transition-all shadow-xs hover:scale-105 active:scale-95 shrink-0 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5 text-[#D99AAE]" />
            <span>give me a random idea</span>
          </button>
        </div>

        {/* Sketchbook Container */}
        <div className="relative rounded-3xl p-3 md:p-6 bg-white shadow-xl border border-[#D99AAE]/25 polaroid-shadow">
          {/* Top washi tape decoration */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 washi-tape-lavender px-8 py-1 rounded text-[11px] font-hand tracking-widest text-[#67505A]/70 uppercase">
            ananya's sketchbook
          </div>

          {/* Canvas Wrapper */}
          <div
            ref={containerRef}
            className="relative w-full rounded-2xl overflow-hidden border border-[#67505A]/10 shadow-inner"
            style={{ touchAction: "none" }}
          >
            <canvas
              ref={canvasRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              className="block cursor-crosshair"
              style={{ touchAction: "none" }}
            />
          </div>

          {/* Controls Bar */}
          <div className="mt-5 space-y-4">
            {/* Color Palette & Eraser */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-xs font-medium text-[#67505A]/70 mr-1 hidden sm:inline">
                  Palette:
                </span>
                {PALETTE.map((p) => {
                  const isSelected = !isEraser && color === p.hex
                  return (
                    <button
                      key={p.hex}
                      onClick={() => {
                        setColor(p.hex)
                        setIsEraser(false)
                      }}
                      title={p.name}
                      aria-label={p.name}
                      className={`relative w-8 h-8 rounded-full transition-transform cursor-pointer border border-black/10 flex items-center justify-center ${
                        isSelected ? "scale-115 ring-2 ring-[#D99AAE] ring-offset-2" : "hover:scale-110"
                      }`}
                      style={{ backgroundColor: p.hex }}
                    >
                      {isSelected && (
                        <Check className={`w-4 h-4 ${p.hex === "#FFFFFF" || p.hex === "#FFF8EF" ? "text-gray-800" : "text-white"}`} />
                      )}
                    </button>
                  )
                })}

                <button
                  onClick={() => setIsEraser(!isEraser)}
                  className={`ml-2 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    isEraser 
                      ? "bg-[#D99AAE] text-white shadow-xs" 
                      : "bg-[#F5DCE3]/60 text-[#67505A] hover:bg-[#F5DCE3]"
                  }`}
                  aria-pressed={isEraser}
                >
                  <Eraser className="w-3.5 h-3.5" />
                  <span>Eraser</span>
                </button>
              </div>

              {/* Brush Sizing */}
              <div className="flex items-center gap-1.5 bg-[#FAF4EB] p-1 rounded-full border border-[#D99AAE]/20">
                {BRUSH_SIZES.map((b) => (
                  <button
                    key={b.size}
                    onClick={() => setBrushSize(b.size)}
                    className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                      brushSize === b.size
                        ? "bg-white text-[#252747] shadow-xs"
                        : "text-[#67505A]/70 hover:text-[#252747]"
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Paper Texture Selector & Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#67505A]/10">
              {/* Paper background selector */}
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-medium text-[#67505A]/70 mr-1">Paper:</span>
                {PAPER_STYLES.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => {
                      setPaperStyle(style.id)
                      const canvas = canvasRef.current
                      if (canvas) {
                        const ctx = canvas.getContext("2d", { willReadFrequently: true })
                        const dpr = window.devicePixelRatio || 1
                        fillBackground(ctx, canvas.width / dpr, canvas.height / dpr, style.id)
                        saveState()
                      }
                    }}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      paperStyle === style.id
                        ? "bg-[#D99AAE]/20 text-[#67505A] border border-[#D99AAE]/40 font-semibold"
                        : "text-[#67505A]/60 hover:text-[#67505A]"
                    }`}
                  >
                    {style.name}
                  </button>
                ))}
              </div>

              {/* Action Buttons: Undo, Clear, Save */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleUndo}
                  title="Undo last stroke"
                  className="p-2 rounded-xl bg-[#FAF4EB] hover:bg-[#F5DCE3]/60 text-[#67505A] transition-all cursor-pointer border border-[#67505A]/10"
                >
                  <Undo2 className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setShowClearConfirm(true)}
                  title="Clear canvas"
                  className="p-2 rounded-xl bg-[#FAF4EB] hover:bg-rose-100 text-rose-600 transition-all cursor-pointer border border-rose-200/50"
                >
                  <Trash2 className="w-4 h-4" />
                </button>

                <button
                  onClick={handleDownload}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#D99AAE] hover:bg-[#ce8ba1] text-white text-xs md:text-sm font-medium shadow-xs transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Save Artwork</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Download Privacy & Security Explainer Notice */}
        {downloadNotice && (
          <div className="mt-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs md:text-sm flex items-center justify-between animate-fade-in shadow-xs">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Saved directly to your device! Your art is completely private and never uploaded anywhere ♡
              </span>
            </div>
            <button
              onClick={() => setDownloadNotice(false)}
              className="text-emerald-700 hover:text-emerald-900 font-semibold text-xs ml-3"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Clear Confirmation Modal */}
        {showClearConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
            <div className="bg-[#FFF8EF] rounded-2xl p-6 max-w-sm w-full border border-[#D99AAE]/40 shadow-2xl text-center">
              <div className="w-12 h-12 rounded-full bg-[#F5DCE3] text-[#D99AAE] flex items-center justify-center mx-auto mb-3">
                <Trash2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-[#252747]">Start a Fresh Page?</h3>
              <p className="text-[#67505A]/80 text-sm mt-2 font-sans">
                This will clear your current doodle. You can always sketch something new whenever you want!
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <button
                  onClick={() => setShowClearConfirm(false)}
                  className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-[#67505A] text-sm font-medium transition cursor-pointer"
                >
                  Keep Drawing
                </button>
                <button
                  onClick={handleClear}
                  className="px-5 py-2 rounded-full bg-[#D99AAE] hover:bg-[#ce8ba1] text-white text-sm font-medium shadow-xs transition cursor-pointer"
                >
                  Clear Page
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
