import { useSelector, useDispatch } from 'react-redux';
import { updateAttribute } from '../redux/slices/attributesSlice';
import { RootState } from '../redux/store';

const dispatch = useDispatch();
const attributes = useSelector((state: RootState) => state.attributes);

export const updateIntellect = (value: number) => {
  if (value < 0 && attributes.intellect + value < 1) return;
  dispatch(
    updateAttribute({
      attribute: 'intellect',
      value: attributes.intellect + value,
    })
  );
};
export const updatePsyche = (value: number) => {
  if (value < 0 && attributes.psyche + value < 1) return;
  dispatch(
    updateAttribute({ attribute: 'psyche', value: attributes.psyche + value })
  );
};
export const updatePhysique = (value: number) => {
  if (value < 0 && attributes.physique + value < 1) return;
  dispatch(
    updateAttribute({
      attribute: 'physique',
      value: attributes.physique + value,
    })
  );
};
export const updateMotorics = (value: number) => {
  if (value < 0 && attributes.motorics + value < 1) return;
  dispatch(
    updateAttribute({
      attribute: 'motorics',
      value: attributes.motorics + value,
    })
  );
};
