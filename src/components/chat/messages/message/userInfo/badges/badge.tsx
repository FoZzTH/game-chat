import { RiShieldFill } from 'react-icons/ri';
import { LinearGradient } from './linearGradient';

type Props = {
  letter: string;
  gradientColors: string[];
};

export const Badge = ({ letter, gradientColors }: Props) => {
  const id = `${letter}-gradient`;

  return (
    <div className='relative flex items-center'>
      <LinearGradient id={id} gradientColors={gradientColors} />
      <RiShieldFill style={{ fill: `url(#${id})` }} className='w-3.5 h-3.5' />
      <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[10px]'>
        {letter}
      </p>
    </div>
  );
};
