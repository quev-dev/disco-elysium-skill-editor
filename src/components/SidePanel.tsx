'use client';

import { updateSkill } from '@/redux/slices/skillsSlice';
import { setSignatureSkill, resetSignatureSkill } from '../redux/slices/signatureSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { RootState } from '../redux/store';
import { SkillState } from '@/types/scoreTypes';
import { skillDescriptions } from '@/utils/skillDescriptions';
import { skillImages } from '@/utils/skillImages';

import Image from 'next/image';
import iconSignature from '../content/icons/signature.png';
import iconDiamondFill from '../content/svgs/diamond-fill.svg';
import iconDiamondOutline from '../content/svgs/diamond-outline.svg';

export default function SidePanel() {
  const [toggleInfo, setToggleInfo] = useState(false);
  const dispatch = useDispatch();
  const skills = useSelector((state: RootState) => state.skills);
  const signature = useSelector((state: RootState) => state.signature.skill);
  const attributes = useSelector((state: RootState) => state.attributes);
  const selectedSkill = useSelector((state: RootState) => state.selectedSkill);
  const skillHeadline: string = skillDescriptions[selectedSkill][0];
  const skillImage = skillImages[selectedSkill];

  function convertTitle(input: string): string {
    const words = input.replace(/([a-z])([A-Z])/g, '$1 $2');
    let allCaps = words.toUpperCase();
    if (allCaps === 'HAND EYE COORDINATION') allCaps = 'HAND / EYE COORDINATION';
    return allCaps;
  }

  function getAttribute(): string {
    let foundAttribute;
    switch (selectedSkill) {
      default:
      case 'logic':
      case 'encyclopedia':
      case 'rhetoric':
      case 'drama':
      case 'conceptualization':
      case 'visualCalculus':
        foundAttribute = 'intellect';
        break;
      case 'volition':
      case 'inlandEmpire':
      case 'empathy':
      case 'authority':
      case 'espritDeCorps':
      case 'suggestion':
        foundAttribute = 'psyche';
        break;
      case 'endurance':
      case 'painThreshold':
      case 'physicalInstrument':
      case 'electrochemistry':
      case 'shivers':
      case 'halfLight':
        foundAttribute = 'physique';
        break;
      case 'handEyeCoordination':
      case 'perception':
      case 'reactionSpeed':
      case 'savoirFaire':
      case 'interfacing':
      case 'composure':
        foundAttribute = 'motorics';
        break;
    }
    return foundAttribute;
  }

  const currentAttribute = getAttribute();
  const title = convertTitle(selectedSkill);

  const handleSetSignature = (skill: keyof SkillState) => {
    dispatch(resetSignatureSkill());
    dispatch(setSignatureSkill(skill));
  };

  let score = skills[selectedSkill];
  let newModifier = attributes[currentAttribute];
  if (signature === selectedSkill) {
    score++;
    newModifier++;
  }
  const filledDiamonds = Math.min(score, newModifier);
  const remainingOutlineDiamonds = Math.max(newModifier - score, 0);
  const totalDiamonds = newModifier;
  const diamondLimit = 9;

  const modifySkill = (value: number) => {
    let newValue = Math.min(skills[selectedSkill] + value, attributes[currentAttribute]);
    console.log(newValue);
    dispatch(updateSkill({ skill: selectedSkill, value: newValue }));
  };

  return (
    <aside className='flex flex-row mx-2 gap-2 md:m-12 md:gap-8 2xl:flex-col 2xl:gap-0 2xl:p-0 2xl:m-0 justify-center items-center 2xl:py-16 rounded-md'>
      <ul className='relative w-1/2 lg:w-max'>
        <li className='z-10 flex flex-row w-full gap-1 items-center justify-center absolute top-2'>
          {!toggleInfo && (
            <>
              <p className='bg-c-white text-c-black px-1'>OVERVIEW</p>
              <p>/</p>
              <button onClick={() => setToggleInfo(true)} className='no-button-styling'>
                INFO
              </button>
            </>
          )}
          {toggleInfo && (
            <>
              <button onClick={() => setToggleInfo(false)} className='no-button-styling'>
                OVERVIEW
              </button>
              <p>/</p>
              <p className='bg-c-white text-c-black px-1'>INFO</p>
            </>
          )}
        </li>
        {signature === selectedSkill && (
          <li className='absolute top-0 w-full flex items-center justify-center'>
            <div className='w-2/3'>
              <Image
                layout='responsive'
                src={iconSignature}
                width={368}
                height={368}
                alt=''
              />
            </div>
          </li>
        )}
        <li className='flex flex-wrap items-center justify-center gap-2 absolute w-full bottom-16'>
          {totalDiamonds <= diamondLimit && (
            <>
              {Array.from({ length: filledDiamonds }).map((_, index) => (
                <Image key={index} src={iconDiamondFill} width={32} height={32} alt='' />
              ))}
              {Array.from({ length: remainingOutlineDiamonds }).map((_, index) => (
                <Image
                  key={index}
                  src={iconDiamondOutline}
                  width={32}
                  height={32}
                  alt=''
                />
              ))}
            </>
          )}
          {totalDiamonds > diamondLimit && (
            <>
              {Array.from({ length: Math.min(score, diamondLimit) }).map((_, index) => (
                <Image key={index} src={iconDiamondFill} width={32} height={32} alt='' />
              ))}
              {Array.from({ length: Math.max(diamondLimit - score, 0) }).map(
                (_, index) => (
                  <Image
                    key={index}
                    src={iconDiamondOutline}
                    width={32}
                    height={32}
                    alt=''
                  />
                )
              )}
              <span className='text-xs font-bold'>. . .</span>
            </>
          )}
        </li>
        <li className={`${toggleInfo ? 'darkened' : ''} mx-2`}>
          <Image layout='responsive' src={skillImage} width={368} height={512} alt='' />
        </li>
        <li className='absolute hidden top-0 left-0 w-full h-full 2xl:flex flex-col items-center justify-center'>
          {toggleInfo && (
            <aside className='flex flex-col gap-4 h-5/6 overflow-y-scroll p-4'>
              <p>{skillDescriptions[selectedSkill][1].toUpperCase()}</p>
              <p>{skillDescriptions[selectedSkill][2]}</p>
              <p>{skillDescriptions[selectedSkill][3]}</p>
            </aside>
          )}
        </li>
        <li className='z-10'>
          <h3
            id='panel-skill-title'
            className='text-c-gray text-base md:text-3xl py-1 w-full text-center absolute bottom-0'
          >
            {title}
          </h3>
        </li>
      </ul>
      {!toggleInfo && (
        <div className='w-1/2 2xl:w-full flex flex-col items-center justify-center gap-2 md:gap-0'>
          <ul className='flex flex-col w-full lg:w-1/2 2xl:w-full gap-1 mt-2'>
            <li>
              <p>{skillHeadline}</p>
            </li>
            <li className='relative pb-10 leading-6'>
              {signature === selectedSkill && (
                <p className='text-c-white-dim font-bold'>
                  Signature: <span className='text-c-white'>+1</span>
                </p>
              )}
              <p className='text-c-white-dim font-bold'>
                {currentAttribute.charAt(0).toUpperCase() + currentAttribute.slice(1)}{' '}
                base:{' '}
                <span className='text-c-white'>+{attributes[currentAttribute]}</span>
              </p>
              <p className='text-c-white-dim font-bold'>
                Learned skill:{' '}
                <span className='text-c-white'>+{skills[selectedSkill]}</span>
              </p>
              <div className='absolute right-2 top-0'>
                <p className='text-xs md:text-base'>TOTAL:</p>
                <p className='bg-c-white text-c-black font-bold text-4xl md:text-6xl text-center'>
                  {attributes[currentAttribute] + skills[selectedSkill]}
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
        <aside className='flex 2xl:hidden flex-col gap-4 w-3/4 h-64 overflow-y-scroll pr-4'>
          <p>{skillDescriptions[selectedSkill][1].toUpperCase()}</p>
          <p>{skillDescriptions[selectedSkill][2]}</p>
          <p>{skillDescriptions[selectedSkill][3]}</p>
        </aside>
      )}
    </aside>
  );
}
