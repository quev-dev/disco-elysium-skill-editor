'use client';

import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { skillImages } from '@/utils/skillImages';
import Skill from './Skill';
import Attribute from './Attribute';

export default function SkillsContainer() {
  const attributes = useSelector((state: RootState) => state.attributes);
  const skills = useSelector((state: RootState) => state.skills);

  const INTELLECT = attributes.intellect;
  const PSYCHE = attributes.psyche;
  const PHYSIQUE = attributes.physique;
  const MOTORICS = attributes.motorics;

  return (
    <ul className='mt-6 flex flex-row md:flex-col gap-1 md:gap-2'>
      <li className='flex flex-col md:flex-row gap-2'>
        <div className='md:w-1/6'>
          <Attribute attributeName='INTELLECT' score={INTELLECT} />
        </div>
        <div className='md:w-5/6 flex flex-col md:flex-row gap-1 md:gap-2'>
          <Skill
            title='LOGIC'
            score={skills.logic}
            modifier={INTELLECT}
            imageSource={skillImages.logic}
          />
          <Skill
            title='ENCYCLOPEDIA'
            score={skills.encyclopedia}
            modifier={INTELLECT}
            imageSource={skillImages.encyclopedia}
          />
          <Skill
            title='RHETORIC'
            score={skills.rhetoric}
            modifier={INTELLECT}
            imageSource={skillImages.rhetoric}
          />
          <Skill
            title='DRAMA'
            score={skills.drama}
            modifier={INTELLECT}
            imageSource={skillImages.drama}
          />
          <Skill
            title='CONCEPTUALIZATION'
            score={skills.conceptualization}
            modifier={INTELLECT}
            imageSource={skillImages.conceptualization}
          />
          <Skill
            title='VISUAL CALCULUS'
            score={skills.visualCalculus}
            modifier={INTELLECT}
            imageSource={skillImages.visualCalculus}
          />
        </div>
      </li>
      <li className='flex flex-col md:flex-row gap-2'>
        <div className='md:w-1/6'>
          <Attribute attributeName='PSYCHE' score={PSYCHE} />
        </div>
        <div className='md:w-5/6 flex flex-col md:flex-row gap-1 md:gap-2'>
          <Skill
            title='VOLITION'
            score={skills.volition}
            modifier={PSYCHE}
            imageSource={skillImages.volition}
          />
          <Skill
            title='INLAND EMPIRE'
            score={skills.inlandEmpire}
            modifier={PSYCHE}
            imageSource={skillImages.inlandEmpire}
          />
          <Skill
            title='EMPATHY'
            score={skills.empathy}
            modifier={PSYCHE}
            imageSource={skillImages.empathy}
          />
          <Skill
            title='AUTHORITY'
            score={skills.authority}
            modifier={PSYCHE}
            imageSource={skillImages.authority}
          />
          <Skill
            title='ESPRIT DE CORPS'
            score={skills.espritDeCorps}
            modifier={PSYCHE}
            imageSource={skillImages.espritDeCorps}
          />
          <Skill
            title='SUGGESTION'
            score={skills.suggestion}
            modifier={PSYCHE}
            imageSource={skillImages.suggestion}
          />
        </div>
      </li>
      <li className='flex flex-col md:flex-row gap-2'>
        <div className='md:w-1/6'>
          <Attribute attributeName='PHYSIQUE' score={PHYSIQUE} />
        </div>
        <div className='md:w-5/6 flex flex-col md:flex-row gap-1 md:gap-2'>
          <Skill
            title='ENDURANCE'
            score={skills.endurance}
            modifier={PHYSIQUE}
            imageSource={skillImages.endurance}
          />
          <Skill
            title='PAIN THRESHOLD'
            score={skills.painThreshold}
            modifier={PHYSIQUE}
            imageSource={skillImages.painThreshold}
          />
          <Skill
            title='PHYSICAL INSTRUMENT'
            score={skills.physicalInstrument}
            modifier={PHYSIQUE}
            imageSource={skillImages.physicalInstrument}
          />
          <Skill
            title='ELECTROCHEMISTRY'
            score={skills.electrochemistry}
            modifier={PHYSIQUE}
            imageSource={skillImages.electrochemistry}
          />
          <Skill
            title='SHIVERS'
            score={skills.shivers}
            modifier={PHYSIQUE}
            imageSource={skillImages.shivers}
          />
          <Skill
            title='HALF LIGHT'
            score={skills.halfLight}
            modifier={PHYSIQUE}
            imageSource={skillImages.halfLight}
          />
        </div>
      </li>
      <li className='flex flex-col md:flex-row gap-2'>
        <div className='md:w-1/6'>
          <Attribute attributeName='MOTORICS' score={MOTORICS} />
        </div>
        <div className='md:w-5/6 flex flex-col md:flex-row gap-1 md:gap-2'>
          <Skill
            title='HAND / EYE COORDINATION'
            score={skills.handEyeCoordination}
            modifier={MOTORICS}
            imageSource={skillImages.handEyeCoordination}
          />
          <Skill
            title='PERCEPTION'
            score={skills.perception}
            modifier={MOTORICS}
            imageSource={skillImages.perception}
          />
          <Skill
            title='REACTION SPEED'
            score={skills.reactionSpeed}
            modifier={MOTORICS}
            imageSource={skillImages.reactionSpeed}
          />
          <Skill
            title='SAVOIR FAIRE'
            score={skills.savoirFaire}
            modifier={MOTORICS}
            imageSource={skillImages.savoirFaire}
          />
          <Skill
            title='INTERFACING'
            score={skills.interfacing}
            modifier={MOTORICS}
            imageSource={skillImages.interfacing}
          />
          <Skill
            title='COMPOSURE'
            score={skills.composure}
            modifier={MOTORICS}
            imageSource={skillImages.composure}
          />
        </div>
      </li>
    </ul>
  );
}
