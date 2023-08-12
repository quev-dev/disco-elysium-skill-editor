'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { skillImages } from '@/utils/skillImages';
import { updateAttribute } from '../redux/slices/attributesSlice';
import { setSelectedSkill } from '../redux/slices/selectedSkillSlice';

import Skill from './Skill';
import Attribute from './Attribute';

export default function SkillsContainer() {
  const dispatch = useDispatch();
  const skills = useSelector((state: RootState) => state.skills);
  const signature = useSelector((state: RootState) => state.signature.skill);
  const attributes = useSelector((state: RootState) => state.attributes);
  const selectedSkill = useSelector((state: RootState) => state.selectedSkill);

  const INTELLECT = attributes.intellect;
  const PSYCHE = attributes.psyche;
  const PHYSIQUE = attributes.physique;
  const MOTORICS = attributes.motorics;

  const handleSkillClick = (skillName: string) => {
    dispatch(setSelectedSkill(skillName));
  };

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
    dispatch(updateAttribute({ attribute: 'psyche', value: attributes.psyche + value }));
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
    <ul className='flex flex-row md:flex-col gap-1 md:gap-1'>
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
            updateFunction={() => handleSkillClick('logic')}
            isSelected={selectedSkill === 'logic'}
            isSignature={signature === 'logic'}
            title='LOGIC'
            score={skills.logic}
            modifier={INTELLECT}
            imageSource={skillImages.logic}
          />
          <Skill
            updateFunction={() => handleSkillClick('encyclopedia')}
            isSelected={selectedSkill === 'encyclopedia'}
            isSignature={signature === 'encyclopedia'}
            title='ENCYCLOPEDIA'
            score={skills.encyclopedia}
            modifier={INTELLECT}
            imageSource={skillImages.encyclopedia}
          />
          <Skill
            updateFunction={() => handleSkillClick('rhetoric')}
            isSelected={selectedSkill === 'rhetoric'}
            isSignature={signature === 'rhetoric'}
            title='RHETORIC'
            score={skills.rhetoric}
            modifier={INTELLECT}
            imageSource={skillImages.rhetoric}
          />
          <Skill
            updateFunction={() => handleSkillClick('drama')}
            isSelected={selectedSkill === 'drama'}
            isSignature={signature === 'drama'}
            title='DRAMA'
            score={skills.drama}
            modifier={INTELLECT}
            imageSource={skillImages.drama}
          />
          <Skill
            updateFunction={() => handleSkillClick('conceptualization')}
            isSelected={selectedSkill === 'conceptualization'}
            isSignature={signature === 'conceptualization'}
            title='CONCEPTUALIZATION'
            score={skills.conceptualization}
            modifier={INTELLECT}
            imageSource={skillImages.conceptualization}
          />
          <Skill
            updateFunction={() => handleSkillClick('visualCalculus')}
            isSelected={selectedSkill === 'visualCalculus'}
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
            updateFunction={() => handleSkillClick('volition')}
            isSelected={selectedSkill === 'volition'}
            isSignature={signature === 'volition'}
            title='VOLITION'
            score={skills.volition}
            modifier={PSYCHE}
            imageSource={skillImages.volition}
          />
          <Skill
            updateFunction={() => handleSkillClick('inlandEmpire')}
            isSelected={selectedSkill === 'inlandEmpire'}
            isSignature={signature === 'inlandEmpire'}
            title='INLAND EMPIRE'
            score={skills.inlandEmpire}
            modifier={PSYCHE}
            imageSource={skillImages.inlandEmpire}
          />
          <Skill
            updateFunction={() => handleSkillClick('empathy')}
            isSelected={selectedSkill === 'empathy'}
            isSignature={signature === 'empathy'}
            title='EMPATHY'
            score={skills.empathy}
            modifier={PSYCHE}
            imageSource={skillImages.empathy}
          />
          <Skill
            updateFunction={() => handleSkillClick('authority')}
            isSelected={selectedSkill === 'authority'}
            isSignature={signature === 'authority'}
            title='AUTHORITY'
            score={skills.authority}
            modifier={PSYCHE}
            imageSource={skillImages.authority}
          />
          <Skill
            updateFunction={() => handleSkillClick('espritDeCorps')}
            isSelected={selectedSkill === 'espritDeCorps'}
            isSignature={signature === 'espritDeCorps'}
            title='ESPRIT DE CORPS'
            score={skills.espritDeCorps}
            modifier={PSYCHE}
            imageSource={skillImages.espritDeCorps}
          />
          <Skill
            updateFunction={() => handleSkillClick('suggestion')}
            isSelected={selectedSkill === 'suggestion'}
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
            updateFunction={() => handleSkillClick('endurance')}
            isSelected={selectedSkill === 'endurance'}
            isSignature={signature === 'endurance'}
            title='ENDURANCE'
            score={skills.endurance}
            modifier={PHYSIQUE}
            imageSource={skillImages.endurance}
          />
          <Skill
            updateFunction={() => handleSkillClick('painThreshold')}
            isSelected={selectedSkill === 'painThreshold'}
            isSignature={signature === 'painThreshold'}
            title='PAIN THRESHOLD'
            score={skills.painThreshold}
            modifier={PHYSIQUE}
            imageSource={skillImages.painThreshold}
          />
          <Skill
            updateFunction={() => handleSkillClick('physicalInstrument')}
            isSelected={selectedSkill === 'physicalInstrument'}
            isSignature={signature === 'physicalInstrument'}
            title='PHYSICAL INSTRUMENT'
            score={skills.physicalInstrument}
            modifier={PHYSIQUE}
            imageSource={skillImages.physicalInstrument}
          />
          <Skill
            updateFunction={() => handleSkillClick('electrochemistry')}
            isSelected={selectedSkill === 'electrochemistry'}
            isSignature={signature === 'electrochemistry'}
            title='ELECTROCHEMISTRY'
            score={skills.electrochemistry}
            modifier={PHYSIQUE}
            imageSource={skillImages.electrochemistry}
          />
          <Skill
            updateFunction={() => handleSkillClick('shivers')}
            isSelected={selectedSkill === 'shivers'}
            isSignature={signature === 'shivers'}
            title='SHIVERS'
            score={skills.shivers}
            modifier={PHYSIQUE}
            imageSource={skillImages.shivers}
          />
          <Skill
            updateFunction={() => handleSkillClick('halfLight')}
            isSelected={selectedSkill === 'halfLight'}
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
            updateFunction={() => handleSkillClick('handEyeCoordination')}
            isSelected={selectedSkill === 'handEyeCoordination'}
            isSignature={signature === 'handEyeCoordination'}
            title='HAND / EYE COORDINATION'
            score={skills.handEyeCoordination}
            modifier={MOTORICS}
            imageSource={skillImages.handEyeCoordination}
          />
          <Skill
            updateFunction={() => handleSkillClick('perception')}
            isSelected={selectedSkill === 'perception'}
            isSignature={signature === 'perception'}
            title='PERCEPTION'
            score={skills.perception}
            modifier={MOTORICS}
            imageSource={skillImages.perception}
          />
          <Skill
            updateFunction={() => handleSkillClick('reactionSpeed')}
            isSelected={selectedSkill === 'reactionSpeed'}
            isSignature={signature === 'reactionSpeed'}
            title='REACTION SPEED'
            score={skills.reactionSpeed}
            modifier={MOTORICS}
            imageSource={skillImages.reactionSpeed}
          />
          <Skill
            updateFunction={() => handleSkillClick('savoirFaire')}
            isSelected={selectedSkill === 'savoirFaire'}
            isSignature={signature === 'savoirFaire'}
            title='SAVOIR FAIRE'
            score={skills.savoirFaire}
            modifier={MOTORICS}
            imageSource={skillImages.savoirFaire}
          />
          <Skill
            updateFunction={() => handleSkillClick('interfacing')}
            isSelected={selectedSkill === 'interfacing'}
            isSignature={signature === 'interfacing'}
            title='INTERFACING'
            score={skills.interfacing}
            modifier={MOTORICS}
            imageSource={skillImages.interfacing}
          />
          <Skill
            updateFunction={() => handleSkillClick('composure')}
            isSelected={selectedSkill === 'composure'}
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
