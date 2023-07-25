'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { updateAttribute } from '../redux/slices/attributesSlice';

export default function ReduxTest() {
  const attributes = useSelector((state: RootState) => state.attributes);
  const dispatch = useDispatch();

  const scoreIntellect = attributes.intellect;
  const scorePsyche = attributes.psyche;
  const scorePhysique = attributes.physique;
  const scoreMotorics = attributes.motorics;

  const increaseIntellect = () => {
    const updatedIntellect = scoreIntellect + 1;
    dispatch(updateAttribute({ attribute: 'intellect', value: updatedIntellect }));
  };

  return (
    <div>
      <h3>Scores</h3>
      <ul>
        <li>{scoreIntellect} - Intellect</li>
        <li>{scorePsyche} - Psyche</li>
        <li>{scorePhysique} - Physique</li>
        <li>{scoreMotorics} - Motorics</li>
      </ul>
      <button onClick={increaseIntellect}>increase brain size</button>
    </div>
  );
}
