'use client';

import { useState } from 'react';

import Image from 'next/image';
import iconDiamondOutline from '../content/svgs/diamond-outline.svg';
import iconDiamondFill from '../content/svgs/diamond-fill.svg';

export default function Attribute({ attributeName }: { attributeName: string }) {
  const [score, setScore] = useState(1);

  const handleIncrement = () => setScore((prevScore) => prevScore + 1);
  const handleDecrement = () => setScore((prevScore) => prevScore - 1);

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
      <div className='font-bold text-8xl flex flex-row gap-2 items-center justify-center'>
        <p>{score}</p>
      </div>
      <ul className='flex flex-wrap gap-x-1 gap-y-1 mb-2'>{renderDiamonds()}</ul>
      <h5 className='text-xl'>{attributeName}</h5>
    </aside>
  );
}
