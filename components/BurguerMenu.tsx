'use client'

import { useRef, useState } from "react"
import { useOnClickOutside } from "../hooks/useOnClickOuside"

export const BurguerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const node = useRef<HTMLDivElement>(null)
  useOnClickOutside(node, () => setIsOpen(false))

  return (
    <div className='sm:hidden'>
      <div
        ref={node}
        onClick={() => setIsOpen(!isOpen)}
        className='space-y-2 cursor-pointer'
      >
        <span className={`block w-8 h-0.5 bg-gray-300 ${isOpen && 'burguer-line-1'} transition-transform`}></span>
        <span className={`block w-8 h-0.5 bg-gray-300 ${isOpen && 'burguer-line-2'} transition-transform`}></span>
      </div>

      <div
        className={
          `${isOpen ? 'translate-x-0' : '-translate-x-80'} transition-transform
          absolute top-28 w-60 p-6 flex flex-col gap-4 glassmorphism rounded-lg z-20`
        }
      >
        <a
          className='text-gray-300 active:text-cyan-500 cursor-pointer'
          href='/#home'
        >
          Home
        </a>
        <a
          className='text-gray-300 active:text-cyan-500 cursor-pointer'
          href='/#aboutMe'
        >
          About Me
        </a>
        <a
          className='text-gray-300 active:text-cyan-500 cursor-pointer'
          href='/#services'
        >
          Services
        </a>
        <a
          className='text-gray-300 active:text-cyan-500 cursor-pointer'
          href='/#projects'
        >
          Projects
        </a>
      </div>
    </div>
  )
}

