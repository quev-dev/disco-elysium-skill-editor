'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { skillImages } from '@/utils/skillImages';
import { updateAttribute } from '../redux/slices/attributesSlice';
import Skill from './Skill';
import Attribute from './Attribute';

export default function SkillsContainer() {
  const dispatch = useDispatch();
  const skills = useSelector((state: RootState) => state.skills);
  const signature = useSelector((state: RootState) => state.signature.skill);
  const attributes = useSelector((state: RootState) => state.attributes);

  const INTELLECT = attributes.intellect;
  const PSYCHE = attributes.psyche;
  const PHYSIQUE = attributes.physique;
  const MOTORICS = attributes.motorics;

  const updateIntellect = (value: number) => {
    if (value < 0 && attributes.intellect + value < 1) return;
    dispatch(
      updateAttribute({
        attribute: 'intellect',
        value: attributes.intellect + value,
      })
    );
  };
  const updatePsyche = (value: number) => {
    if (value < 0 && attributes.psyche + value < 1) return;
    dispatch(
      updateAttribute({ attribute: 'psyche', value: attributes.psyche + value })
    );
  };
  const updatePhysique = (value: number) => {
    if (value < 0 && attributes.physique + value < 1) return;
    dispatch(
      updateAttribute({
        attribute: 'physique',
        value: attributes.physique + value,
      })
    );
  };
  const updateMotorics = (value: number) => {
    if (value < 0 && attributes.motorics + value < 1) return;
    dispatch(
      updateAttribute({
        attribute: 'motorics',
        value: attributes.motorics + value,
      })
    );
  };

  return (
    <ul className='flex flex-row md:flex-col gap-1 md:gap-2'>
      <li className='flex flex-col md:flex-row gap-2'>
        <div className='md:w-1/6'>
          <Attribute
            attributeName='INTELLECT'
            score={INTELLECT}
            updateFunction={updateIntellect}
          />
        </div>
        <div className='md:w-5/6 flex flex-col md:flex-row gap-1 md:gap-2'>
          <Skill
            isSignature={signature === 'logic'}
            title='LOGIC'
            score={skills.logic}
            modifier={INTELLECT}
            imageSource={skillImages.logic}
          />
          <Skill
            isSignature={signature === 'encyclopedia'}
            title='ENCYCLOPEDIA'
            score={skills.encyclopedia}
            modifier={INTELLECT}
            imageSource={skillImages.encyclopedia}
          />
          <Skill
            isSignature={signature === 'rhetoric'}
            title='RHETORIC'
            score={skills.rhetoric}
            modifier={INTELLECT}
            imageSource={skillImages.rhetoric}
          />
          <Skill
            isSignature={signature === 'drama'}
            title='DRAMA'
            score={skills.drama}
            modifier={INTELLECT}
            imageSource={skillImages.drama}
          />
          <Skill
            isSignature={signature === 'conceptualization'}
            title='CONCEPTUALIZATION'
            score={skills.conceptualization}
            modifier={INTELLECT}
            imageSource={skillImages.conceptualization}
          />
          <Skill
            isSignature={signature === 'visualCalculus'}
            title='VISUAL CALCULUS'
            score={skills.visualCalculus}
            modifier={INTELLECT}
            imageSource={skillImages.visualCalculus}
          />
        </div>
      </li>
      <li className='flex flex-col md:flex-row gap-2'>
        <div className='md:w-1/6'>
          <Attribute
            attributeName='PSYCHE'
            score={PSYCHE}
            updateFunction={updatePsyche}
          />
        </div>
        <div className='md:w-5/6 flex flex-col md:flex-row gap-1 md:gap-2'>
          <Skill
            isSignature={signature === 'volition'}
            title='VOLITION'
            score={skills.volition}
            modifier={PSYCHE}
            imageSource={skillImages.volition}
          />
          <Skill
            isSignature={signature === 'inlandEmpire'}
            title='INLAND EMPIRE'
            score={skills.inlandEmpire}
            modifier={PSYCHE}
            imageSource={skillImages.inlandEmpire}
          />
          <Skill
            isSignature={signature === 'empathy'}
            title='EMPATHY'
            score={skills.empathy}
            modifier={PSYCHE}
            imageSource={skillImages.empathy}
          />
          <Skill
            isSignature={signature === 'authority'}
            title='AUTHORITY'
            score={skills.authority}
            modifier={PSYCHE}
            imageSource={skillImages.authority}
          />
          <Skill
            isSignature={signature === 'espritDeCorps'}
            title='ESPRIT DE CORPS'
            score={skills.espritDeCorps}
            modifier={PSYCHE}
            imageSource={skillImages.espritDeCorps}
          />
          <Skill
            isSignature={signature === 'suggestion'}
            title='SUGGESTION'
            score={skills.suggestion}
            modifier={PSYCHE}
            imageSource={skillImages.suggestion}
          />
        </div>
      </li>
      <li className='flex flex-col md:flex-row gap-2'>
        <div className='md:w-1/6'>
          <Attribute
            attributeName='PHYSIQUE'
            score={PHYSIQUE}
            updateFunction={updatePhysique}
          />
        </div>
        <div className='md:w-5/6 flex flex-col md:flex-row gap-1 md:gap-2'>
          <Skill
            isSignature={signature === 'endurance'}
            title='ENDURANCE'
            score={skills.endurance}
            modifier={PHYSIQUE}
            imageSource={skillImages.endurance}
          />
          <Skill
            isSignature={signature === 'painThreshold'}
            title='PAIN THRESHOLD'
            score={skills.painThreshold}
            modifier={PHYSIQUE}
            imageSource={skillImages.painThreshold}
          />
          <Skill
            isSignature={signature === 'physicalInstrument'}
            title='PHYSICAL INSTRUMENT'
            score={skills.physicalInstrument}
            modifier={PHYSIQUE}
            imageSource={skillImages.physicalInstrument}
          />
          <Skill
            isSignature={signature === 'electrochemistry'}
            title='ELECTROCHEMISTRY'
            score={skills.electrochemistry}
            modifier={PHYSIQUE}
            imageSource={skillImages.electrochemistry}
          />
          <Skill
            isSignature={signature === 'shivers'}
            title='SHIVERS'
            score={skills.shivers}
            modifier={PHYSIQUE}
            imageSource={skillImages.shivers}
          />
          <Skill
            isSignature={signature === 'halfLight'}
            title='HALF LIGHT'
            score={skills.halfLight}
            modifier={PHYSIQUE}
            imageSource={skillImages.halfLight}
          />
        </div>
      </li>
      <li className='flex flex-col md:flex-row gap-2'>
        <div className='md:w-1/6'>
          <Attribute
            attributeName='MOTORICS'
            score={MOTORICS}
            updateFunction={updateMotorics}
          />
        </div>
        <div className='md:w-5/6 flex flex-col md:flex-row gap-1 md:gap-2'>
          <Skill
            isSignature={signature === 'handEyeCoordination'}
            title='HAND / EYE COORDINATION'
            score={skills.handEyeCoordination}
            modifier={MOTORICS}
            imageSource={skillImages.handEyeCoordination}
          />
          <Skill
            isSignature={signature === 'perception'}
            title='PERCEPTION'
            score={skills.perception}
            modifier={MOTORICS}
            imageSource={skillImages.perception}
          />
          <Skill
            isSignature={signature === 'reactionSpeed'}
            title='REACTION SPEED'
            score={skills.reactionSpeed}
            modifier={MOTORICS}
            imageSource={skillImages.reactionSpeed}
          />
          <Skill
            isSignature={signature === 'savoirFaire'}
            title='SAVOIR FAIRE'
            score={skills.savoirFaire}
            modifier={MOTORICS}
            imageSource={skillImages.savoirFaire}
          />
          <Skill
            isSignature={signature === 'interfacing'}
            title='INTERFACING'
            score={skills.interfacing}
            modifier={MOTORICS}
            imageSource={skillImages.interfacing}
          />
          <Skill
            isSignature={signature === 'composure'}
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
