'use client';

import { skillImages } from '@/utils/skillImages';
import Skill from './Skill';
import Attribute from './Attribute';

export default function SkillsContainer() {
  return (
    <ul className='mt-6 flex flex-col gap-2'>
      <li className='flex flex-row gap-2'>
        <div className='w-1/6'>
          <Attribute attributeName='INTELLECT' />
        </div>
        <div className='w-5/6 flex flex-row gap-2'>
          <Skill imageSource={skillImages.logic} />
          <Skill imageSource={skillImages.encyclopedia} />
          <Skill imageSource={skillImages.rhetoric} />
          <Skill imageSource={skillImages.drama} />
          <Skill imageSource={skillImages.conceptualization} />
          <Skill imageSource={skillImages.visualCalculus} />
        </div>
      </li>
      <li className='flex flex-row gap-2'>
        <div className='w-1/6'>
          <Attribute attributeName='PSYCHE' />
        </div>
        <div className='w-5/6 flex flex-row gap-2'>
          <Skill imageSource={skillImages.volition} />
          <Skill imageSource={skillImages.inlandEmpire} />
          <Skill imageSource={skillImages.empathy} />
          <Skill imageSource={skillImages.authority} />
          <Skill imageSource={skillImages.espritDeCorps} />
          <Skill imageSource={skillImages.suggestion} />
        </div>
      </li>
      <li className='flex flex-row gap-2'>
        <div className='w-1/6'>
          <Attribute attributeName='PHYSIQUE' />
        </div>
        <div className='w-5/6 flex flex-row gap-2'>
          <Skill imageSource={skillImages.endurance} />
          <Skill imageSource={skillImages.painThreshold} />
          <Skill imageSource={skillImages.physicalInstrument} />
          <Skill imageSource={skillImages.electrochemistry} />
          <Skill imageSource={skillImages.shivers} />
          <Skill imageSource={skillImages.halfLight} />
        </div>
      </li>
      <li className='flex flex-row gap-2'>
        <div className='w-1/6'>
          <Attribute attributeName='MOTORICS' />
        </div>
        <div className='w-5/6 flex flex-row gap-2'>
          <Skill imageSource={skillImages.handEyeCoordination} />
          <Skill imageSource={skillImages.perception} />
          <Skill imageSource={skillImages.reactionSpeed} />
          <Skill imageSource={skillImages.savoirFaire} />
          <Skill imageSource={skillImages.interfacing} />
          <Skill imageSource={skillImages.composure} />
        </div>
      </li>
    </ul>
  );
}
