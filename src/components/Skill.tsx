'use client';

import Image from 'next/image';
import iconDiamondOutline from '../content/svgs/diamond-outline.svg';
import iconDiamondFill from '../content/svgs/diamond-fill.svg';

export default function Skill({
  imageSource,
  score = 0,
  modifier = 1,
  title = '[title]',
}: {
  imageSource: any;
  score: number;
  modifier: number;
  title: string;
}) {
  const isLong = title.length >= 12;
  const isVeryLong = title.length >= 16;
  const hasSpaces = title.includes(' ');

  const filledDiamonds = Math.min(score, modifier);
  const remainingOutlineDiamonds = Math.max(modifier - score, 0);

  return (
    <div className='skill-container'>
      <div className={score === 0 ? 'grayscale' : ''}>
        <Image layout='responsive' src={imageSource} width={368} height={512} alt='' />
      </div>
      <p className='skill-score'>{score + modifier}</p>
      <h6
        className={`skill-title text-sm tracking-tight leading-4 ${
          isLong ? 'w-5/6' : 'w-full'
        }${isLong && hasSpaces ? ' left-0' : ' '}
        ${isVeryLong && !hasSpaces ? '-left-2 scale-x-75' : ' '}
        `}
      >
        {title}
      </h6>
      <ul className='absolute bottom-10 w-full flex justify-center z-10'>
        <li className='flex flex-row gap-1'>
          {Array.from({ length: filledDiamonds }).map((_, index) => (
            <Image key={index} src={iconDiamondFill} width={14} height={14} alt='' />
          ))}
          {Array.from({ length: remainingOutlineDiamonds }).map((_, index) => (
            <Image key={index} src={iconDiamondOutline} width={14} height={14} alt='' />
          ))}
        </li>
      </ul>
      <div className='skill-gradient-overlay' />
    </div>
  );
}
