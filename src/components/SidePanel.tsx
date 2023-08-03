'use client';

import Image from 'next/image';
import exampleImage from '../content/images/skills/pain-threshold.png';

export default function SidePanel() {
  const title = 'PAIN THRESHOLD';
  const description = "Shrug off the pain. They'll have to hurt you more.";
  const modifier = 3;
  const score = 0;
  return (
    <aside>
      <ul className='relative'>
        <li className='flex flex-row w-full gap-1 items-center justify-center absolute top-2'>
          <button className='no-button-styling'>OVERVIEW</button>
          <p>/</p>
          <button className='no-button-styling'>INFO</button>
        </li>
        <li>
          <Image
            layout='responsive'
            src={exampleImage}
            width={368}
            height={512}
            alt=''
          />
        </li>
        <li>
          <h3 className='bg-c-white text-c-black text-3xl py-1 w-full text-center absolute bottom-0'>
            {title}
          </h3>
        </li>
      </ul>
      <ul>
        <li>
          <p>{description}</p>
        </li>
        <li className='relative pb-10'>
          <p className='text-c-light-gray font-bold'>
            Physique base: <span className='text-c-white'>+{modifier}</span>
          </p>
          <p className='text-c-light-gray font-bold'>
            Learned skill: <span className='text-c-white'>+{score}</span>
          </p>
          <div className='absolute right-2 top-0'>
            <p className='text-base'>TOTAL:</p>
            <p className='bg-c-white text-c-black font-bold text-6xl text-center'>
              {modifier + score}
            </p>
          </div>
        </li>
      </ul>
      <div className='flex flex-col gap-1'>
        <button>♛ Mark as Signature</button>
        <span className='flex flex-row gap-1'>
          <button className='w-1/2'>&#9664; -1</button>
          <button className='w-1/2'>&#9654; +1</button>
        </span>
      </div>
    </aside>
  );
}
