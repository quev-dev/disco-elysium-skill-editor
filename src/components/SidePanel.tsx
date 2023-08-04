'use client';

import { updateSkill } from '@/redux/slices/skillsSlice';
import { setSignatureSkill, resetSignatureSkill } from '../redux/slices/signatureSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { RootState } from '../redux/store';
import { SkillState } from '@/types/scoreTypes';
import { skillDescriptions } from '@/utils/skillDescriptions';
import { skillImages } from '@/utils/skillImages';

import Image from 'next/image';
import exampleImage from '../content/images/skills/pain-threshold.png';

export default function SidePanel({
  modifier = 0,
  score = 0,
  updateFunction,
}: {
  modifier: number;
  score: number;
  updateFunction: any;
}) {
  const [toggleInfo, setToggleInfo] = useState(false);

  const dispatch = useDispatch();
  const skills = useSelector((state: RootState) => state.skills);
  const selectedSkill = useSelector((state: RootState) => state.selectedSkill);

  const skillHeadline: string = skillDescriptions[selectedSkill][0];
  const skillDescription: string = skillDescriptions[selectedSkill][1];
  const skillImage = skillImages[selectedSkill];

  const modifySkill = (value: number) =>
    dispatch(updateSkill({ skill: selectedSkill, value: skills[selectedSkill] + value }));

  function convertTitle(input: string): string {
    const words = input.replace(/([a-z])([A-Z])/g, '$1 $2');
    let allCaps = words.toUpperCase();

    if (allCaps === 'HAND EYE COORDINATION') allCaps = 'HAND / EYE COORDINATION';

    return allCaps;
  }

  const title = convertTitle(selectedSkill);

  const handleSetSignature = (skill: keyof SkillState) => {
    dispatch(resetSignatureSkill());
    dispatch(setSignatureSkill(skill));
  };

  return (
    <aside className='flex flex-row mx-2 gap-2 md:m-12 md:gap-8 2xl:flex-col 2xl:gap-0 2xl:p-0 2xl:m-0 justify-center items-center'>
      <ul className='relative md:w-max'>
        <li className='z-10 flex flex-row w-full gap-1 items-center justify-center absolute top-2'>
          <button onClick={() => setToggleInfo(false)} className='no-button-styling'>
            OVERVIEW
          </button>
          <p>/</p>
          <button onClick={() => setToggleInfo(true)} className='no-button-styling'>
            INFO
          </button>
        </li>
        <li className={`${toggleInfo ? 'brightness-50' : ''} mx-2`}>
          <Image layout='responsive' src={skillImage} width={368} height={512} alt='' />
        </li>
        <li className='z-10'>
          <h3 className='bg-c-white text-c-gray text-base md:text-3xl py-1 w-full text-center absolute bottom-0'>
            {title}
          </h3>
        </li>
      </ul>
      {!toggleInfo && (
        <div className='flex flex-col items-center justify-center gap-2 md:gap-0'>
          <ul>
            <li>
              <p>{skillHeadline}</p>
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
            <button onClick={() => handleSetSignature(selectedSkill)}>
              ♛ Mark as Signature
            </button>
            <span className='flex flex-row gap-1'>
              <button onClick={() => modifySkill(-1)} className='w-1/2'>
                &#9664; -1
              </button>
              <button onClick={() => modifySkill(1)} className='w-1/2'>
                &#9654; +1
              </button>
            </span>
          </div>
        </div>
      )}
      {toggleInfo && (
        <aside>
          <p>{skillDescription}</p>
        </aside>
      )}
    </aside>
  );
}
