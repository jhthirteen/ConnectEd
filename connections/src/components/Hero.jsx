import ButtonLink from './ButtonLink';

const Hero = () => {
    return (
        <header className="flex-1 flex flex-col items-center justify-center-bg-gray-200">
          <h1 className="text-white text-6xl font-bold mt-12 mb-8">ConnectEd.</h1>
          <h2 className="text-white text-4xl font-bold mb-36">Bringing you Closer to New Sounds</h2>

          <div className="flex justify-center space-x-8">
            <ButtonLink text='Artists' color='blue'/>
            <ButtonLink text='Songs' color='green' />
            <ButtonLink text='Playlists' color='gray' />
          </div>
        </header>
    );
};
export default Hero;