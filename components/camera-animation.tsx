'use client'

import { useEffect, useState } from 'react'

export function CameraAnimation() {
  const [animationKey, setAnimationKey] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationKey((prev) => prev + 1)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div
      key={animationKey}
      className="flex flex-col items-center justify-center gap-8 mb-12"
    >
      {/* Camera icon with multiple animations */}
      <div className="relative w-32 h-32">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 border-4 border-secondary rounded-full animate-camera-rotate opacity-30"></div>

        {/* Middle pulsing ring */}
        <div className="absolute inset-2 border-2 border-accent rounded-full animate-recording-pulse"></div>

        {/* Camera icon container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-24 h-24">
            {/* Camera body */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-full h-full text-secondary animate-camera-pan"
            >
              {/* Camera main body */}
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              {/* Camera lens */}
              <circle cx="12" cy="13" r="4" />
            </svg>

            {/* Recording indicator (red dot) */}
            <div className="absolute top-2 right-2 w-3 h-3 bg-accent rounded-full animate-recording-pulse"></div>
          </div>
        </div>
      </div>

      {/* Text with animation */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-2">
          <span className="text-secondary">Surveillance</span> Excellence
        </h1>
        <p className="text-primary/70 flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
          Advanced Security Solutions
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
        </p>
      </div>
    </div>
  )
}
