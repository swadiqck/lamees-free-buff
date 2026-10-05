import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const dotRef = useRef(null)
  const labelRef = useRef(null)
  const [label, setLabel] = useState('')
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Don't show custom cursor on touch devices
    if ('ontouchstart' in window) return

    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`
        dotRef.current.style.top = `${e.clientY}px`
      }
      if (labelRef.current) {
        labelRef.current.style.left = `${e.clientX}px`
        labelRef.current.style.top = `${e.clientY}px`
      }
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    // Track hover on interactive elements
    const handleElementHover = () => {
      setIsHovering(true)
    }
    const handleElementLeave = () => {
      setIsHovering(false)
      setLabel('')
    }

    // Add hover listeners to interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, .project-card, .service-card, .skill-item, .glass-card'
      )
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleElementHover)
        el.addEventListener('mouseleave', handleElementLeave)
      })
      return interactiveElements
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    // Observe DOM changes to add listeners to new elements
    const observer = new MutationObserver(() => {
      addHoverListeners()
    })
    observer.observe(document.body, { childList: true, subtree: true })

    // Initial listeners
    let elements = addHoverListeners()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      observer.disconnect()
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleElementHover)
        el.removeEventListener('mouseleave', handleElementLeave)
      })
    }
  }, [isVisible])

  // Don't render on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
        style={{ opacity: isVisible ? 1 : 0 }}
      />
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        style={{ opacity: isVisible && !isHovering ? 1 : 0 }}
      />
      <div
        ref={labelRef}
        className={`custom-cursor-label ${label ? 'visible' : ''}`}
      >
        {label}
      </div>
    </>
  )
}
