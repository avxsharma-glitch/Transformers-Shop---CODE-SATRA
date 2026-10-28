"use client"

import { useCallback, useEffect, useRef, useState } from "react"

const hiddenMessage = `Na koi naksha, na koi pehchaan,
Bas kuch adhure kisse aur anjaane nishaan.
Har mod pe chhupa hai ek naya sawaal,
Har khamoshi ke peeche ho sakta hai koi kamaal.

Jo dikhta hai, zaroori nahi wahi sach ho,
Jo chhupa hai, mumkin hai wahi sabse khaas ho.
Har raaste ko samajhna, har ishare ko pehchanna hoga,
Khazane tak pahunchne ke liye, khud se bhi aage badhna hoga.

Na har jawaab aasaan, na har raaz saaf hoga,
Kabhi sahi lagta raasta bhi ek naya sawaal hoga.
Sabr rakhna, kyunki har parda ek din hatna hoga,
Aur har uljhan ke paar ek naya sach milna hoga.

Agar khazana chahiye, toh nazariya badalna hoga—
Jo sabko dikhta hai, usse aage dekhna hoga.`

type MysteryLightBulbProps = {
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

export function MysteryLightBulb({ isOpen: controlledIsOpen, onOpenChange }: MysteryLightBulbProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false)
  const isControlled = controlledIsOpen !== undefined
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen
  const [revealedText, setRevealedText] = useState("")
  const popoverRef = useRef<HTMLDivElement>(null)
  const setIsOpen = useCallback((open: boolean) => {
    if (!isControlled) setInternalIsOpen(open)
    onOpenChange?.(open)
  }, [isControlled, onOpenChange])

  useEffect(() => {
    if (!isOpen) return

    const resetTimer = window.setTimeout(() => setRevealedText(""), 0)
    let characterIndex = 0
    const revealTimer = window.setInterval(() => {
      characterIndex += 1
      setRevealedText(hiddenMessage.slice(0, characterIndex))
      if (characterIndex >= hiddenMessage.length) window.clearInterval(revealTimer)
    }, 22)

    const closeOnOutsideClick = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false)
    }

    document.addEventListener("mousedown", closeOnOutsideClick)
    document.addEventListener("keydown", closeOnEscape)
    return () => {
      window.clearInterval(revealTimer)
      window.clearTimeout(resetTimer)
      document.removeEventListener("mousedown", closeOnOutsideClick)
      document.removeEventListener("keydown", closeOnEscape)
    }
  }, [isOpen, setIsOpen])

  return (
    <div className={`mystery-bulb${isOpen ? " is-open" : ""}`} ref={popoverRef}>
      <div className="mystery-bulb-particles" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      {isOpen && (
        <div className="mystery-bulb-popover" role="dialog" aria-label="Hidden message">
          <div className="mystery-bulb-popover-eyebrow">A quiet secret</div>
          <p>{revealedText}</p>
        </div>
      )}
      <button
        className="mystery-bulb-trigger"
        type="button"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close hidden message" : "Reveal hidden message"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mystery-bulb-glow" aria-hidden="true" />
        <svg viewBox="0 0 42 58" aria-hidden="true">
          <defs>
            <radialGradient id="bulb-glass" cx="35%" cy="25%">
              <stop offset="0%" stopColor="#fffde8" />
              <stop offset="48%" stopColor="#ffd86a" />
              <stop offset="100%" stopColor="#d88513" />
            </radialGradient>
            <linearGradient id="bulb-base" x1="0" x2="1">
              <stop stopColor="#70431d" />
              <stop offset="45%" stopColor="#f4b946" />
              <stop offset="100%" stopColor="#6b3916" />
            </linearGradient>
          </defs>
          <path className="mystery-bulb-glass" d="M21 2C10 2 4 10 5 19c.5 6 4.5 9 8 13 2 2 2 5 2 7h12c0-2 0-5 2-7 3.5-4 7.5-7 8-13C38 10 32 2 21 2Z" fill="url(#bulb-glass)" />
          <path className="mystery-bulb-highlight" d="M12 9c-2.5 3-3 7-2 10" fill="none" stroke="#fff" strokeLinecap="round" />
          <path className="mystery-bulb-filament" d="M16 20c2-3 3-3 5 0 2-3 3-3 5 0M21 20v13" fill="none" stroke="#fff4b0" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 39h12v5H15zM14 44h14v3H14zM15 47h12v3H15zM17 50h8v4h-8z" fill="url(#bulb-base)" />
        </svg>
        <span className="mystery-bulb-tooltip" role="tooltip">A hidden message awaits.</span>
      </button>
    </div>
  )
}
