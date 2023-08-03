import Image from 'next/image';
import iconExternalLink from '../content/svgs/external-link.svg';

export default function Footer() {
  return (
    <footer className='p-12 md:p-16 md:w-2/3 md:mx-auto lg:w-1/2 xl:w-5/12'>
      <h6 className='font-bold'>Disco Elysium's Official Pages</h6>

      <ul className='mb-4'>
        <li>
          <p>
            If you'd like to learn more about the game, you can visit its
            official sites through the links below:
          </p>
        </li>
        <li className='flex flex-col'>
          <a
            className='flex flex-row items-center gap-1 max-w-max'
            target='_blank'
            rel='noreferrer'
            href='https://discoelysium.com/'
          >
            <Image src={iconExternalLink} width={12} height={12} alt='' />
            <p>Official Website</p>
          </a>
          <a
            className='flex flex-row items-center gap-1 max-w-max'
            target='_blank'
            rel='noreferrer'
            href='https://store.steampowered.com/app/632470/Disco_Elysium__The_Final_Cut/'
          >
            <Image src={iconExternalLink} width={12} height={12} alt='' />
            <p>Steam Page</p>
          </a>
        </li>
      </ul>
      <h6 className='font-bold'>Source Code</h6>
      <p>
        You can view the source code for this fan-made project through its
        GitHub repository:{' '}
      </p>
      <a
        className='flex flex-row items-center gap-1 max-w-max'
        target='_blank'
        rel='noreferrer'
        href='https://github.com/quev-dev/disco-elysium-skill-editor'
      >
        <Image src={iconExternalLink} width={12} height={12} alt='' />
        <p>disco-elysium-skill-editor</p>
      </a>
    </footer>
  );
}
