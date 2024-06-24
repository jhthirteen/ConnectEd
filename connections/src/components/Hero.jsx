const Hero = () => {
    return (
        <header className="flex-1 flex flex-col items-center justify-center-bg-gray-200">
          <h1 className="text-white text-6xl font-bold mt-12 mb-8">ConnectEd.</h1>
          <h2 className="text-white text-4xl font-bold mb-36">Bringing you Closer to New Sounds</h2>

          <div className="flex justify-center space-x-8">
            <button className="bg-blue-500 text-white px-8 py-4 rounded">Artists</button>
            <button className="bg-green-500 text-white px-8 py-4 rounded">Songs</button>
            <button className='bg-gray-800 text-white px-8 py-4 rounded'>Playlists</button>
          </div>
        </header>
    );
};
export default Hero;