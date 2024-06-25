import TextBar from '../components/TextBar';
import bgImage from '../assets/artistBackdrop.png'

const ArtistsRec = () =>{
    const bgImg = {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    return(
        <> {/*Empty container to return a single element*/}
            <div className='min-h-screen flex flex-col' style={bgImg}>
                <TextBar />
            </div>
        </>
    );
};
export default ArtistsRec;