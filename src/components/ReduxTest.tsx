'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { updateAttribute } from '../redux/slices/attributesSlice';
import { updateSkill } from '../redux/slices/skillsSlice';

export default function ReduxTest() {
  const attributes = useSelector((state: RootState) => state.attributes);
  const skills = useSelector((state: RootState) => state.skills);
  const dispatch = useDispatch();

  const scoreIntellect = attributes.intellect;
  const scorePsyche = attributes.psyche;
  const scorePhysique = attributes.physique;
  const scoreMotorics = attributes.motorics;

  const skillLogic = skills.logic;
  const skillEncyclopedia = skills.encyclopedia;
  const skillRhetoric = skills.rhetoric;

  const skillVolition = skills.volition;
  const skillEmpathy = skills.empathy;
  const skillAuthority = skills.authority;

  const increaseIntellect = () => {
    const updatedIntellect = scoreIntellect + 1;
    dispatch(updateAttribute({ attribute: 'intellect', value: updatedIntellect }));
  };
  const increasePsyche = () => {
    const updatedPsyche = scorePsyche + 1;
    dispatch(updateAttribute({ attribute: 'psyche', value: updatedPsyche }));
  };

  const increaseLogic = () => {
    const updatedLogic = skillLogic + 1;
    dispatch(updateSkill({ skill: 'logic', value: updatedLogic }));
  };
  const increaseVolition = () => {
    const updatedVolition = skillVolition + 1;
    dispatch(updateSkill({ skill: 'volition', value: updatedVolition }));
  };

  return (
    <>
      <div className='mb-8'>
        <h3 className='text-3xl'>Attribute Scores</h3>
        <ul>
          <li>{scoreIntellect} - Intellect</li>
          <li>{scorePsyche} - Psyche</li>
          <li>{scorePhysique} - Physique</li>
          <li>{scoreMotorics} - Motorics</li>
          <li className='flex flex-row gap-2'>
            <button onClick={increaseIntellect}>+1 Intellect</button>
            <button onClick={increasePsyche}>+1 Psyche</button>
          </li>
        </ul>
      </div>
      <div>
        <h3 className='text-3xl'>Skill Scores</h3>
        <ul className='flex flex-row gap-8'>
          <li>
            <h4>Intellect</h4>
            <p>{scoreIntellect + skillLogic} - Logic</p>
            <p>{scoreIntellect + skillEncyclopedia} - Encyclopedia</p>
            <p>{scoreIntellect + skillRhetoric} - Rhetoric</p>
            <button onClick={increaseLogic}>+1 Logic</button>
          </li>
          <li>
            <h4>Psyche</h4>
            <p>{scorePsyche + skillVolition} - Volition</p>
            <p>{scorePsyche + skillEmpathy} - Empathy</p>
            <p>{scorePsyche + skillAuthority} - Authority</p>
            <button onClick={increaseVolition}>+1 Volition</button>
          </li>
        </ul>
      </div>
    </>
  );
}
