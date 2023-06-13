import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const LANGUAGES = ['RU', 'EN', 'ZHO'];

export const Language = () => {
  return (
    <div className='text-white'>
      <button>RU</button>
      <FaChevronDown />
      <FaChevronUp />
    </div>
  );
};
