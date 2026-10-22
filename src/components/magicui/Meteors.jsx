import React, { useEffect, useState } from "react"
import { cn } from "../../lib/utils"

export const Meteors = ({
  number = 16,
  minDelay = 0.2,
  maxDelay = 2.5,
  minDuration = 3,
  maxDuration = 8,
  angle = 215,
  className,
}) => {
  const [meteorStyles, setMeteorStyles] = useState([])

  useEffect(() => {
    const styles = Array.from({ length: number }).map(() => ({
      "--angle": -angle + "deg",
      top: "-5%",
      left: `${Math.floor(Math.random() * 100)}%`,
      animationDelay: `${(Math.random() * (maxDelay - minDelay) + minDelay).toFixed(2)}s`,
      animationDuration: `${(Math.random() * (maxDuration - minDuration) + minDuration).toFixed(2)}s`,
    }))
    setMeteorStyles(styles)
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          style={style}
          className={cn(
            "animate-meteor pointer-events-none absolute size-1 rotate-(--angle) rounded-full bg-amber-100 shadow-[0_0_8px_2px_rgba(233,201,139,0.8)]",
            className
          )}
        >
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[1.5px] w-20 -translate-y-1/2 bg-gradient-to-r from-amber-200 via-rose-300 to-transparent opacity-80" />
        </span>
      ))}
    </div>
  )
}
