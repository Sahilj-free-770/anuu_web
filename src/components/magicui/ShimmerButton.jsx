import React from "react"
import { cn } from "../../lib/utils"

export const ShimmerButton = React.forwardRef(
  (
    {
      shimmerColor = "#FFE0B5",
      shimmerSize = "0.1em",
      shimmerDuration = "2.8s",
      borderRadius = "9999px",
      background = "rgba(217, 154, 174, 0.95)",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        style={{
          "--spread": "90deg",
          "--shimmer-color": shimmerColor,
          "--radius": borderRadius,
          "--speed": shimmerDuration,
          "--cut": shimmerSize,
          "--bg": background,
        }}
        className={cn(
          "group relative z-0 inline-flex cursor-pointer items-center justify-center overflow-hidden [border-radius:var(--radius)] px-7 py-3.5 whitespace-nowrap text-white font-medium shadow-md transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98] active:translate-y-px",
          className
        )}
        ref={ref}
        {...props}
      >
        {/* spark container */}
        <div
          className="-z-30 blur-[2px] absolute inset-0 overflow-visible"
        >
          {/* spark */}
          <div className="animate-shimmer-slide absolute inset-0 aspect-[1] h-full rounded-none [mask:none]">
            <div className="animate-spin-around absolute -inset-full w-auto [translate:0_0] rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </div>

        {/* Inner Highlight */}
        <div
          className={cn(
            "absolute inset-0 size-full pointer-events-none rounded-[inherit] shadow-[inset_0_-4px_8px_rgba(255,255,255,0.25),inset_0_2px_4px_rgba(255,255,255,0.4)]",
            "transition-all duration-300 ease-in-out group-hover:shadow-[inset_0_-2px_6px_rgba(255,255,255,0.35),inset_0_3px_8px_rgba(255,255,255,0.5)]"
          )}
        />

        {/* backdrop */}
        <div
          className="absolute inset-[1px] -z-20 [border-radius:var(--radius)] [background:var(--bg)]"
        />
      </button>
    )
  }
)

ShimmerButton.displayName = "ShimmerButton"
