'use client';

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
    const maxDiamonds = 9;
    const diamonds = [];
    const renderedDiamonds = Math.min(score, maxDiamonds);

    for (let i = 0; i < renderedDiamonds; i++) {
      diamonds.push(
        <li className='relative' key={i}>
          <Image src={iconDiamondFill} alt='' width={16} height={16} />
        </li>
      );
    }

    if (score > maxDiamonds) {
      diamonds.push(
        <li key='ellipsis'>
          <span className='font-bold text-xs md:text-base absolute -translate-y-2'>
            . . .
          </span>
        </li>
      );
    }

    return diamonds;
  };

  const isOverClass = score > 6 ? 'text-c-accent' : 'text-c-white';

  return (
    <aside className='flex flex-col items-center justify-center h-full w-full'>
      <div>
        <div className='flex flex-col-reverse md:flex-row gap-2 items-center justify-center'>
          <p className={`font-bold text-5xl md:text-8xl tracking-tighter ${isOverClass}`}>
            {score}
          </p>
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
      <ul className='hidden md:flex flex-wrap items-center justify-center gap-x-0.5 md:gap-x-1 gap-y-0.5 md:gap-y-1 mb-2'>
        {renderDiamonds()}
      </ul>
      <h5 className={`text-xl hidden md:inline lg:text-2xl ${isOverClass}`}>
        {attributeName}
      </h5>
      <h5 className={`text-2xl md:hidden ${isOverClass}`}>{attributeName.slice(0, 3)}</h5>
    </aside>
  );
}
