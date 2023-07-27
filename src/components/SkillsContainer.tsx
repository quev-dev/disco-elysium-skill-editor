'use client';

import { skillImages } from '@/utils/skillImages';
import Skill from './Skill';

export default function SkillsContainer() {
  return (
    <ul className='mt-6'>
      <li className='flex flex-row gap-4'>
        <Skill imageSource={skillImages.logic} />
        <Skill imageSource={skillImages.encyclopedia} />
        <Skill imageSource={skillImages.rhetoric} />
        <Skill imageSource={skillImages.drama} />
        <Skill imageSource={skillImages.conceptualization} />
        <Skill imageSource={skillImages.visualCalculus} />
      </li>
    </ul>
  );
}
