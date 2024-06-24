import bgImage from './assets/bg.png';
import Navbar from './components/Navbar';
import Hero from './components/Hero'

const App = () => {
  
  const bgImg = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  
  return (
     <> {/*Empty container to return a single element*/}
      <div className="min-h-screen flex flex-col" style={bgImg}>
        <Navbar />

        <Hero />
      </div>
      </>
  );
};
export default App;