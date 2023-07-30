'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { updateAttribute } from '../redux/slices/attributesSlice';
import { updateSkill } from '../redux/slices/skillsSlice';

export default function ReduxTest() {
  const attributes = useSelector((state: RootState) => state.attributes);
  const skills = useSelector((state: RootState) => state.skills);
  const dispatch = useDispatch();

  const increaseIntellect = () =>
    dispatch(
      updateAttribute({ attribute: 'intellect', value: attributes.intellect + 1 })
    );
  const increasePsyche = () =>
    dispatch(updateAttribute({ attribute: 'psyche', value: attributes.psyche + 1 }));
  const increasePhysique = () =>
    dispatch(updateAttribute({ attribute: 'physique', value: attributes.physique + 1 }));
  const increaseMotorics = () =>
    dispatch(updateAttribute({ attribute: 'motorics', value: attributes.motorics + 1 }));

  const increaseLogic = () =>
    dispatch(updateSkill({ skill: 'logic', value: skills.logic + 1 }));
  const increaseEncyclopedia = () =>
    dispatch(updateSkill({ skill: 'encyclopedia', value: skills.encyclopedia + 1 }));
  const increaseRhetoric = () =>
    dispatch(updateSkill({ skill: 'rhetoric', value: skills.rhetoric + 1 }));
  const increaseDrama = () =>
    dispatch(updateSkill({ skill: 'drama', value: skills.drama + 1 }));
  const increaseConceptualization = () =>
    dispatch(
      updateSkill({ skill: 'conceptualization', value: skills.conceptualization + 1 })
    );
  const increaseVisualCalculus = () =>
    dispatch(updateSkill({ skill: 'visualCalculus', value: skills.visualCalculus + 1 }));

  const increaseVolition = () =>
    dispatch(updateSkill({ skill: 'volition', value: skills.volition + 1 }));
  const increaseInlandEmpire = () =>
    dispatch(updateSkill({ skill: 'inlandEmpire', value: skills.inlandEmpire + 1 }));
  const increaseEmpathy = () =>
    dispatch(updateSkill({ skill: 'empathy', value: skills.empathy + 1 }));
  const increaseAuthority = () =>
    dispatch(updateSkill({ skill: 'authority', value: skills.authority + 1 }));
  const increaseEspritDeCorps = () =>
    dispatch(updateSkill({ skill: 'espritDeCorps', value: skills.espritDeCorps + 1 }));
  const increaseSuggestion = () =>
    dispatch(updateSkill({ skill: 'suggestion', value: skills.suggestion + 1 }));

  const increaseEndurance = () =>
    dispatch(updateSkill({ skill: 'endurance', value: skills.endurance + 1 }));
  const increasePainThreshold = () =>
    dispatch(updateSkill({ skill: 'painThreshold', value: skills.painThreshold + 1 }));
  const increasePhysicalInstrument = () =>
    dispatch(
      updateSkill({ skill: 'physicalInstrument', value: skills.physicalInstrument + 1 })
    );
  const increaseElectrochemistry = () =>
    dispatch(
      updateSkill({ skill: 'electrochemistry', value: skills.electrochemistry + 1 })
    );
  const increaseShivers = () =>
    dispatch(updateSkill({ skill: 'shivers', value: skills.shivers + 1 }));
  const increaseHalfLight = () =>
    dispatch(updateSkill({ skill: 'halfLight', value: skills.halfLight + 1 }));

  const increaseHandEyeCoordination = () =>
    dispatch(
      updateSkill({ skill: 'handEyeCoordination', value: skills.handEyeCoordination + 1 })
    );
  const increasePerception = () =>
    dispatch(updateSkill({ skill: 'perception', value: skills.perception + 1 }));
  const increaseReactionSpeed = () =>
    dispatch(updateSkill({ skill: 'reactionSpeed', value: skills.reactionSpeed + 1 }));
  const increaseSavoirFaire = () =>
    dispatch(updateSkill({ skill: 'savoirFaire', value: skills.savoirFaire + 1 }));
  const increaseInterfacing = () =>
    dispatch(updateSkill({ skill: 'interfacing', value: skills.interfacing + 1 }));
  const increaseComposure = () =>
    dispatch(updateSkill({ skill: 'composure', value: skills.composure + 1 }));

  return (
    <ul className='flex flex-row gap-8'>
      <li className='mb-8 w-1/6'>
        <h3 className='text-3xl'>Attributes</h3>
        <ul>
          <li className='flex flex-col gap-2'>
            <button onClick={increaseIntellect}>+1 Intellect</button>
            <button onClick={increasePsyche}>+1 Psyche</button>
            <button onClick={increasePhysique}>+1 Physique</button>
            <button onClick={increaseMotorics}>+1 Motorics</button>
          </li>
        </ul>
      </li>
      <li className='w-5/6'>
        <h3 className='text-3xl'>Skills</h3>
        <ul className='flex flex-row gap-4 text-base'>
          <li className='flex flex-col gap-2'>
            <h4>Intellect</h4>
            <button onClick={increaseLogic}>+1 Logic</button>
            <button onClick={increaseEncyclopedia}>+1 Encyclopedia</button>
            <button onClick={increaseRhetoric}>+1 Rhetoric</button>
            <button onClick={increaseDrama}>+1 Drama</button>
            <button onClick={increaseConceptualization}>+1 Conceptualization</button>
            <button onClick={increaseVisualCalculus}>+1 Visual Calculus</button>
          </li>
          <li className='flex flex-col gap-2'>
            <h4>Psyche</h4>
            <button onClick={increaseVolition}>+1 Volition</button>
            <button onClick={increaseInlandEmpire}>+1 Inland Empire</button>
            <button onClick={increaseEmpathy}>+1 Empathy</button>
            <button onClick={increaseAuthority}>+1 Authority</button>
            <button onClick={increaseEspritDeCorps}>+1 Esprit De Corps</button>
            <button onClick={increaseSuggestion}>+1 Suggestion</button>
          </li>
          <li className='flex flex-col gap-2'>
            <h4>Physique</h4>
            <button onClick={increaseEndurance}>+1 Endurance</button>
            <button onClick={increasePainThreshold}>+1 Pain Threshold</button>
            <button onClick={increasePhysicalInstrument}>+1 Physical Instrument</button>
            <button onClick={increaseElectrochemistry}>+1 Electrochemistry</button>
            <button onClick={increaseShivers}>+1 Shivers</button>
            <button onClick={increaseHalfLight}>+1 Half Light</button>
          </li>
          <li className='flex flex-col gap-2'>
            <h4>Motorics</h4>
            <button onClick={increaseHandEyeCoordination}>
              +1 Hand / Eye Coordination
            </button>
            <button onClick={increasePerception}>+1 Perception</button>
            <button onClick={increaseReactionSpeed}>+1 Reaction Speed</button>
            <button onClick={increaseSavoirFaire}>+1 Savoir Faire</button>
            <button onClick={increaseInterfacing}>+1 Interfacing</button>
            <button onClick={increaseComposure}>+1 Composure</button>
          </li>
        </ul>
      </li>
    </ul>
  );
}
