import React from "react"

// Cohesive hand-drawn doodle style SVGs with warm ink and pastel tones

export const FlowerDoodle = ({ className = "w-6 h-6 text-[#D99AAE]" }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 20C16 12 12 14 14 18C16 22 20 20 20 20Z" fill="currentColor" fillOpacity="0.2" />
    <path d="M20 20C28 16 26 12 22 14C18 16 20 20 20 20Z" fill="currentColor" fillOpacity="0.2" />
    <path d="M20 20C24 28 28 26 26 22C24 18 20 20 20 20Z" fill="currentColor" fillOpacity="0.2" />
    <path d="M20 20C12 24 14 28 18 26C22 24 20 20 20 20Z" fill="currentColor" fillOpacity="0.2" />
    <circle cx="20" cy="20" r="3" fill="#E9C98B" stroke="#67505A" strokeWidth="1.5" />
    <path d="M20 23V34C20 35 18 37 16 38" stroke="#8CA98B" strokeWidth="2" />
    <path d="M20 28C23 27 26 28 27 30" stroke="#8CA98B" strokeWidth="1.5" />
  </svg>
)

export const SparkleDoodle = ({ className = "w-5 h-5 text-[#E9C98B]" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z" />
  </svg>
)

export const HeartDoodle = ({ className = "w-5 h-5 text-[#D99AAE]" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
)

export const MoonDoodle = ({ className = "w-8 h-8 text-[#E9C98B]" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className}>
    <path
      d="M26 18.5C24.5 23.5 19.8 27 14.5 26.5C8.5 26 3.8 20.8 4 14.8C4.2 9.5 8 5.2 13 4.2C11.5 7.5 12 11.5 14.5 14.5C17 17.5 21.2 18.8 26 18.5Z"
      fill="currentColor"
      stroke="#E9C98B"
      strokeWidth="1.5"
    />
    <circle cx="10" cy="12" r="1" fill="#FFF8EF" opacity="0.6" />
    <circle cx="15" cy="20" r="1.5" fill="#FFF8EF" opacity="0.5" />
    <circle cx="18" cy="16" r="0.8" fill="#FFF8EF" opacity="0.6" />
  </svg>
)

export const CloudDoodle = ({ className = "w-12 h-8 text-white/80" }) => (
  <svg viewBox="0 0 48 28" fill="currentColor" className={className}>
    <path d="M14 24H36C41 24 44 20 44 16C44 12 41 9 37 9C36.5 5 33 2 28 2C24 2 20.5 4.5 19.5 8.5C18.5 8 17 8 15.5 8C10.5 8 6.5 12 6.5 17C6.5 21 9.8 24 14 24Z" opacity="0.85" />
  </svg>
)

export const PaperclipDoodle = ({ className = "w-6 h-10 text-amber-600/70" }) => (
  <svg viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 16V9C7 5.7 9.7 3 13 3C16.3 3 19 5.7 19 9V29C19 33.4 15.4 37 11 37C6.6 37 3 33.4 3 29V13C3 10.8 4.8 9 7 9C9.2 9 11 10.8 11 13V28" />
  </svg>
)

export const SketchPencil = ({ className = "w-5 h-5 text-[#67505A]" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
  </svg>
)

export const TeaCupDoodle = ({ className = "w-8 h-8 text-[#D99AAE]" }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 11H22V19C22 23 18.5 26 14 26C9.5 26 6 23 6 19V11Z" fill="#FFF8EF" />
    <path d="M22 13H24C26.2 13 28 14.8 28 17C28 19.2 26.2 21 24 21H22" />
    <path d="M4 28H24" strokeWidth="2" />
    <path d="M11 6C11 7 12 8 12 9" stroke="#E9C98B" strokeWidth="1.5" />
    <path d="M16 5C16 6.5 17 7.5 17 9" stroke="#E9C98B" strokeWidth="1.5" />
  </svg>
)
