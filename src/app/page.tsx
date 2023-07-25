'use client';

import { Provider } from 'react-redux';
import { store } from '../redux/store';
import ReduxTest from '@/components/ReduxTest';

export default function Home() {
  return (
    <Provider store={store}>
      <header className='p-8'>
        <h1 className='text-4xl'>Disco Elysium Skill Editor</h1>
      </header>
      <main className='p-8'>
        <h2></h2>
        <ReduxTest />
      </main>
      <footer className='p-8'>
        <p>
          This is an unofficial, fan-made site which mimics the attributes and skills page
          from{' '}
          <a
            target='_blank'
            rel='noreferrer'
            href='https://store.steampowered.com/app/632470/Disco_Elysium__The_Final_Cut/'
          >
            Disco Elysium. You can use it to create and edit a visual mimic of the
            player's stats.
          </a>
        </p>
      </footer>
    </Provider>
  );
}
