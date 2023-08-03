export default function Header() {
  return (
    <header className='py-8 px-12 md:w-2/3 md:mx-auto md:pb-16 lg:w-1/2 xl:w-5/12'>
      <h1 className='text-4xl md:text-5xl text-center m-4 mb-8 md:mt-16 md:mb-4 font-bold'>
        Disco Elysium Skill Editor
      </h1>
      <p className='mb-2'>
        {' '}
        This is an unofficial, fan-made site which mimics the attributes and
        skills page from the critically-acclaimed RPG called{' '}
        <a
          target='_blank'
          rel='noreferrer'
          href='https://store.steampowered.com/app/632470/Disco_Elysium__The_Final_Cut/'
        >
          Disco Elysium
        </a>
        .
      </p>
      <p className='mb-2'>
        You can use this web app to create and edit a visual mimic of the
        player's stats.
      </p>
      <p>
        I hope players of the game find this app to be fun to use, and that it
        inspires more people to play it!
      </p>
    </header>
  );
}
