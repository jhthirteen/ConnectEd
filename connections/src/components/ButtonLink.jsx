import { useNavigate } from 'react-router-dom';

const ButtonLink = ({ text, color }) => {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate(`/${text}`);
    };

    const dsc = `${color === 'blue' ? 'bg-blue-500' : color === 'green' ? 'bg-green-500' : 'bg-gray-800'} text-white px-8 py-4 rounded`;

    return (
        <button onClick={handleClick} className={dsc}>{text}</button>
    );
};
export default ButtonLink