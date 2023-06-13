import { RiShieldFill } from 'react-icons/ri';

export const AdminBadge = () => {
  return (
    <div className='relative justify-center'>
      <svg width='0' height='0'>
        <linearGradient id='green-gradient' x1='100%' y1='100%' x2='0%' y2='0%'>
          <stop stopColor='#64DD17' offset='0%' />
          <stop stopColor='#23B838' offset='100%' />
        </linearGradient>
      </svg>
      <RiShieldFill
        style={{ fill: 'url(#green-gradient)' }}
        className='w-3 h-3'
      />
      <span className='absolute text-black bottom-0 top-0'>A</span>
    </div>
  );
};
