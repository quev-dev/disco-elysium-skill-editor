'use client';

import Image from 'next/image';
import iconDiamondOutline from '../content/svgs/diamond-outline.svg';
import iconDiamondFill from '../content/svgs/diamond-fill.svg';
import iconSignature from '../content/icons/signature.png';

export default function Skill({
  imageSource,
  score = 0,
  modifier = 1,
  title = '[title]',
  isSignature = false,
  isSelected = false,
  updateFunction,
}: {
  imageSource: any;
  score: number;
  modifier: number;
  title: string;
  isSignature: boolean;
  isSelected: boolean;
  updateFunction: any;
}) {
  const isLong = title.length >= 12;
  const isVeryLong = title.length >= 16;
  const hasSpaces = title.includes(' ');

  let newModifier = modifier;
  if (isSignature) {
    score++;
    newModifier++;
  }

  const filledDiamonds = Math.min(score, newModifier);
  const remainingOutlineDiamonds = Math.max(newModifier - score, 0);

  const totalDiamonds = newModifier;
  const diamondLimit = 11;

  return (
    <div
      className={`skill-container ${isSelected ? 'selected-skill' : ''}`}
      onClick={updateFunction}
    >
      <div className={score === 0 && !isSignature ? 'grayscale' : ''}>
        <Image layout='responsive' src={imageSource} width={368} height={512} alt='' />
      </div>
      {isSignature && (
        <div className='absolute top-0 w-full flex items-center justify-center'>
          <div className='w-2/3'>
            <Image
              layout='responsive'
              src={iconSignature}
              width={368}
              height={368}
              alt=''
            />
          </div>
        </div>
      )}
      <p className='skill-score'>{score + modifier}</p>
      <div className='w-full flex items-center justify-center'>
        <h6
          className={`skill-title text-xs md:text-sm lg:text-base md:tracking-tight md:leading-4 lg:leading-4 ${
            isLong ? 'w-5/6' : 'w-full'
          }${isLong && hasSpaces ? ' left-0 ' : ' '}
        ${isVeryLong && !hasSpaces ? '-left-2 scale-x-75 ' : ' '}
        ${isSelected ? 'bg-c-white text-c-black max-w-max' : ''}
        `}
        >
          {title}
        </h6>
      </div>
      <ul className='absolute bottom-10 w-full flex justify-center z-10'>
        <li className='flex flex-wrap items-center justify-center gap-1'>
          {totalDiamonds <= diamondLimit && (
            <>
              {Array.from({ length: filledDiamonds }).map((_, index) => (
                <Image key={index} src={iconDiamondFill} width={14} height={14} alt='' />
              ))}
              {Array.from({ length: remainingOutlineDiamonds }).map((_, index) => (
                <Image
                  key={index}
                  src={iconDiamondOutline}
                  width={14}
                  height={14}
                  alt=''
                />
              ))}
            </>
          )}
          {totalDiamonds > diamondLimit && (
            <>
              {Array.from({ length: Math.min(score, diamondLimit) }).map((_, index) => (
                <Image key={index} src={iconDiamondFill} width={14} height={14} alt='' />
              ))}
              {Array.from({ length: Math.max(diamondLimit - score, 0) }).map(
                (_, index) => (
                  <Image
                    key={index}
                    src={iconDiamondOutline}
                    width={14}
                    height={14}
                    alt=''
                  />
                )
              )}
              <span className='text-xs font-bold'>. . .</span>
            </>
          )}
        </li>
      </ul>
      <div className='skill-gradient-overlay' />
    </div>
  );
}
