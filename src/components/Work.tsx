'use client'
import '../app/globals.css'
import Link from 'next/link'
import { useRef } from 'react'

export default function Work() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0)
    scrollLeft.current = scrollRef.current?.scrollLeft || 0
  }

  const handleMouseLeave = () => {
    isDragging.current = false
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX.current) * 1.5
    scrollRef.current.scrollLeft = scrollLeft.current - walk
  }

  return (
    <div className="h-screen w-full flex flex-col bg-offwhite text-black">
      {/* Block A: Heading + View More */}
      <div className="flex justify-between items-center px-8 py-6 h-2/5">
        <h2 className="text-7xl font-bold">Our Work</h2>
        <Link href="/work">
          <button className="text-sm border border-black px-4 py-1 rounded-full hover:bg-black hover:text-white transition">
            View More →
          </button>
        </Link>
      </div>

      {/* Block B: Image Carousel */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="h-3/5 overflow-x-auto snap-x snap-mandatory scroll-smooth cursor-grab"
        style={{
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div
          className="flex space-x-6 h-full items-center px-8 border-4 border-red-500 w-fit mx-auto"
        >
          {[...Array(13)].map((_, i) => (
            <div
              key={i}
              className="min-w-[250px] h-[350px] bg-black/10 border border-white/20 rounded-lg overflow-hidden snap-start"
            >
              <img
                src={`/images/portrait${i + 1}.png`}
                alt={`Portrait ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Global scrollbar and cursor-grab styling */}
      <style jsx global>{`
        .cursor-grab:active {
          cursor: grabbing;
        }
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
