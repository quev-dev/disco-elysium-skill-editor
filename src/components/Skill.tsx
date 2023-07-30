'use client';

import Image from 'next/image';
import iconDiamondOutline from '../content/svgs/diamond-outline.svg';
import iconDiamondFill from '../content/svgs/diamond-fill.svg';

export default function Skill({ imageSource }: { imageSource: any }) {
  return (
    <div className='skill-container'>
      <Image layout='responsive' src={imageSource} width={368} height={512} alt='' />
      <p className='skill-score'>3</p>
      <h6 className='absolute text-center w-full bottom-1 tracking-tight leading-4 z-10'>
        NAME
      </h6>
      <ul className='absolute bottom-10 w-full flex justify-center z-10'>
        <li className='flex flex-row gap-1'>
          <Image src={iconDiamondOutline} width={14} height={14} alt='' />
          <Image src={iconDiamondOutline} width={14} height={14} alt='' />
          <Image src={iconDiamondOutline} width={14} height={14} alt='' />
        </li>
      </ul>
      <div className='skill-gradient-overlay' />
    </div>
  );
}
