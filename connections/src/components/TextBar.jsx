import { useState } from 'react';
import ArtistHeader from '../components/ArtistHeader';

const TextBar = () => {

    const [inputValue, setInputValue] = useState('');

    const handleUpdate = (e) => {
        setInputValue(e.target.value);
    };

    return(
        <div className='flex flex-col h-screen'>
            <ArtistHeader />
            <div className='flex items-center justify-center w-full'>
                <div className='w-1/2 p-4 rounded-lg'>
                    <input
                        className='w-full px-3 py-2 rounded-lg border border-white-300 bg-transparent placeholder-white focus:outline-none text-white'
                        type='text'
                        placeholder='Enter an artist...'
                        value={inputValue}
                        onChange={handleUpdate}
                    />
                </div>
            </div>
        </div>
    );
};
export default TextBar;