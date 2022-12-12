'use-client'

import { ReactNode } from "react"
import { styles } from '../styles'

interface SkilssItemProps {
  skillName: string
  icon: ReactNode
}

export const SkilssItem = ({icon, skillName}: SkilssItemProps) => {
  return (
    <div className="flex flex-col justify-center items-center mt-4">
      <div className={` flex justify-center items-center p-2 mb-2 rounded-xl`}>
        {icon}
      </div>
      <span className=" text-[10px] uppercase">{skillName}</span>
    </div>
  )
}