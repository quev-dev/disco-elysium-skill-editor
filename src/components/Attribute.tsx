'use client';

import { useState } from 'react';
import Image from 'next/image';
import iconDiamondFill from '../content/svgs/diamond-fill.svg';

export default function Attribute({
  attributeName = '',
  score = 1,
  updateFunction,
}: {
  attributeName: string;
  score: number;
  updateFunction: any;
}) {
  const renderDiamonds = () => {
    const diamonds = [];
    for (let i = 0; i < score; i++) {
      diamonds.push(
        <li key={i}>
          <Image
            src={iconDiamondFill}
            alt=''
            width={score > 0 ? (window.innerWidth < 768 ? 8 : 16) : 0}
            height={score > 0 ? (window.innerWidth < 768 ? 8 : 16) : 0}
          />
        </li>
      );
    }
    return diamonds;
  };

  return (
    <aside className='flex flex-col items-center justify-center h-full w-full'>
      <div>
        <div className='flex flex-col-reverse md:flex-row gap-2 items-center justify-center'>
          <p className='font-bold text-5xl md:text-8xl lg:text-9xl'>{score}</p>
          <div className='flex flex-col items-center justify-center relative top-1 gap-1'>
            <button
              onClick={() => updateFunction(1)}
              className='text-xs py-0 md:px-2 md:text-sm'
            >
              &#9650;
            </button>
            <button
              onClick={() => updateFunction(-1)}
              className='text-xs py-0 md:px-2 md:text-sm'
            >
              &#9660;
            </button>
          </div>
        </div>
      </div>
      <ul className='flex flex-wrap items-center justify-center gap-x-0.5 md:gap-x-1 gap-y-0.5 md:gap-y-1 mb-2'>
        {renderDiamonds()}
      </ul>
      <h5 className='text-xl hidden md:inline lg:text-2xl'>{attributeName}</h5>
      <h5 className='text-2xl md:hidden'>{attributeName.slice(0, 3)}</h5>
    </aside>
  );
}
