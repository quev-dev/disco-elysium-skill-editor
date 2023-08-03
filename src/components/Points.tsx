'use client';

import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export default function Points() {
  const attributes = useSelector((state: RootState) => state.attributes);
  const totalPoints =
    attributes.intellect +
    attributes.psyche +
    attributes.physique +
    attributes.motorics -
    4;

  const inGameLimit = 8;

  return (
    <article className='mt-8 mx-12 mb-4 flex flex-col gap-2 md:w-2/3 md:mx-auto md:mb-8 lg:w-1/2 xl:w-5/12'>
      <aside>
        <p>
          Spend up to <b>8</b> points on attributes. You can go over the limit
          in this app, though you will not be able to obtain those attributes
          within the official game.
        </p>
      </aside>
      <div className='text-center text-2xl'>
        {totalPoints <= inGameLimit && (
          <p className='text-c-white'>
            {totalPoints}/{inGameLimit}
          </p>
        )}
        {totalPoints > inGameLimit && (
          <p className='text-c-accent'>
            {totalPoints}/{inGameLimit}
          </p>
        )}
      </div>
    </article>
  );
}
