'use client';

import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Points from '@/components/Points';
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
      <main className='py-2'>
        <ReduxTest />
        <Points />
        <ul className='flex flex-col 2xl:flex-row justify-center items-center'>
          <li id='skill-container' className='2xl:px-24 py-8 2xl:w-2/3'>
            <SkillContainer />
          </li>
          <li id='side-panel-container' className='2xl:px-24 py-12 2xl:w-1/3'>
            <p>Hi</p>
          </li>
        </ul>
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
