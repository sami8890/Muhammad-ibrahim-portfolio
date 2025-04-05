"use client"

import { useState, useEffect } from "react"

interface TypingAnimationProps {
    text: string
    speed?: number
    className?: string
}

export function TypingAnimation({ text, speed = 30, className = "" }: TypingAnimationProps) {
    const [displayText, setDisplayText] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + text[currentIndex])
                setCurrentIndex((prev) => prev + 1)
            }, speed)

            return () => clearTimeout(timeout)
        } else {
            setIsComplete(true)
        }
    }, [currentIndex, speed, text])

    return (
        <div className={`${className} min-h-[4.5rem]`}>
            {displayText}
            {!isComplete && <span className="inline-block w-1 h-5 bg-[#b01108] ml-1 animate-pulse"></span>}
        </div>
    )
}

