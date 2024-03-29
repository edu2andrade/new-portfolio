'use-client';

import { ReactNode } from 'react';

interface SkilssItemProps {
  skillName: string
  icon: ReactNode
}

export const SkilssItem = ({icon, skillName}: SkilssItemProps) => {
  return (
    <div className="flex flex-col justify-center items-center mt-4 hover:scale-125 transition">
      <div className='flex justify-center items-center p-2 mb-2 rounded-xl'>
        {icon}
      </div>
      <span className=" text-[10px] uppercase">{skillName}</span>
    </div>
  );
};