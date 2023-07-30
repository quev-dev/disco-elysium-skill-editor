'use client';

import { Provider } from 'react-redux';
import { store } from '../redux/store';
import ReduxTest from '@/components/ReduxTest';
import Attribute from '@/components/Attribute';
import SkillContainer from '@/components/SkillsContainer';

export default function Home() {
  return (
    <Provider store={store}>
      <header className='px-8 py-2'>
        <h1 className='text-4xl text-center m-4 mb-8 md:m-12 md:mb-4'>
          Disco Elysium Skill Editor
        </h1>
        <p>
          {' '}
          This is an unofficial, fan-made site which mimics the attributes and skills page
          from the critically-acclaimed RPG called{' '}
          <a
            target='_blank'
            rel='noreferrer'
            href='https://store.steampowered.com/app/632470/Disco_Elysium__The_Final_Cut/'
          >
            Disco Elysium
          </a>
          . You can use it to create and edit a visual mimic of the player's stats.
        </p>
      </header>
      <main className='px-1 md:px-8 py-2'>
        <ReduxTest />
        <div className='flex flex-row'>
          <SkillContainer />
        </div>
      </main>
      <footer className='p-8 md:p-16'>
        <p>
          You can view the source code for this fan-made project through its GitHub
          repository:
        </p>
        <a href='https://github.com/quev-dev/disco-elysium-skill-editor'>
          disco-elysium-skill-editor
        </a>
      </footer>
    </Provider>
  );
}
