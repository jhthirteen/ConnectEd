const App = () => {
  
  const bgImg = {
    backgroundImage: "url('/assets/backdrop.jpeg')"
  }
  
  return (
     <> {/*Empty container to return a single element*/}
      <div className="min-h-screen flex flex-col">
        <nav className="bg-gray-800 p-4 text-white">
          <div className="container mx-auto flex justify-start space-x-8">
            <a href="/about" className="text-white px-4 py-2">Our Mission</a>
            <a href="/user" className="text-white px-4 py-2">My Account</a>
          </div>
        </nav>

        <header className="flex-1 flex flex-col items-center justify-center-bg-gray-200">
          <h1 className="text-5xl font-bold mt-16 mb-16">Connect Ed.</h1>
          <h2 className="text-4xl font-bold mb-16">Connecting Minds, Creating Opportunities</h2>

          <div className="flex justify-center space-x-8">
            <div className="border p-6">
              <button className="bg-blue-500 text-white px-8 py-4 rounded">Learn</button>
            </div>
            <div className="border p-6">
              <button className="bg-green-500 text-white px-8 py-4 rounded">Connect</button>
            </div>
          </div>
        </header>
      </div>
      </>
  );
};
export default App;