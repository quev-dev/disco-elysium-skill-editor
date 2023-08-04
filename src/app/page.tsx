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

      <p className='text-center md:mb-4'>-</p>

      <main className='py-2'>
        <Points />
        <ul className='flex flex-col 2xl:flex-row justify-center items-center'>
          <li id='skill-container' className='2xl:px-24 py-8 2xl:w-2/3'>
            <SkillContainer />
          </li>
          <li id='side-panel-container' className='2xl:px-24 py-8 2xl:w-1/3'>
            <SidePanel />
          </li>
        </ul>
      </main>

      <p className='text-center mt-12 xl:mt-20'>-</p>

      <Footer />
    </Provider>
  );
}
