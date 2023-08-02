'use client';

import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Points from '@/components/Points';
import ReduxTest from '@/components/ReduxTest';
import SkillContainer from '@/components/SkillsContainer';

export default function Home() {
  return (
    <Provider store={store}>
      <Header />
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
      <Footer />
    </Provider>
  );
}
