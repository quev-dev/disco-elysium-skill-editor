'use client';

import { useState } from 'react';

import Image from 'next/image';
import iconDiamondFill from '../content/svgs/diamond-fill.svg';

export default function Attribute({
  attributeName = '',
  score = 1,
}: {
  attributeName: string;
  score: number;
}) {
  const renderDiamonds = () => {
    const diamonds = [];
    for (let i = 0; i < score; i++) {
      diamonds.push(
        <li key={i}>
          <Image src={iconDiamondFill} alt='' width={16} height={16} />
        </li>
      );
    }
    return diamonds;
  };

  return (
    <aside className='flex flex-col items-center justify-center'>
      <div className='font-bold text-5xl md:text-8xl flex flex-row gap-2 items-center justify-center'>
        <p>{score}</p>
      </div>
      <ul className='flex flex-wrap gap-x-1 gap-y-1 mb-2'>{renderDiamonds()}</ul>
      <h5 className='text-xl hidden md:inline'>{attributeName}</h5>
      <h5 className='text-2xl md:hidden'>{attributeName.slice(0, 3)}</h5>
    </aside>
  );
}
