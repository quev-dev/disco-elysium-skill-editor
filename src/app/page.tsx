'use client';

import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Points from '@/components/Points';
import SkillContainer from '@/components/SkillsContainer';
import SidePanel from '@/components/SidePanel';

export default function Home() {
  return (
    <Provider store={store}>
      <Header />
      <article className='py-8 px-12 md:w-2/3 md:mx-auto md:pb-16 lg:w-1/2 xl:w-5/12'>
        <h2 className='text-2xl md:text-3xl'>Skill Editor Guide</h2>
        <p className='mb-1'>
          To change the score for each skill, click on the skill card and view the side
          panel — it will be to the right side on desktop and beneath the skill cards on
          mobile.
        </p>
        <p>
          On the side panel, you can click the "Mark as Signature" button to give the
          skill a +1 bonus. You can also click the arrows to update its score, and you can
          click "INFO" to read more about the skill.
        </p>
      </article>
      <main className='py-2'>
        <Points />
        <ul className='flex flex-col 2xl:flex-row justify-center items-center'>
          <li id='skill-container' className='2xl:px-24 py-8 2xl:w-2/3'>
            <SkillContainer />
          </li>
          <li
            id='side-panel-container'
            className='w-full md:max-w-max 2xl:px-24 py-8 2xl:w-1/3'
          >
            <SidePanel />
          </li>
        </ul>
      </main>
      <Footer />
    </Provider>
  );
}
