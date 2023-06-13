import { RiShieldFill } from 'react-icons/ri';

export const ModeratorBadge = () => {
  return (
    <div>
      <svg width='0' height='0'>
        <linearGradient
          id='orange-gradient'
          x1='100%'
          y1='100%'
          x2='0%'
          y2='0%'
        >
          <stop stopColor='#FF5C00' offset='0%' />
          <stop stopColor='#FFB800' offset='100%' />
        </linearGradient>
      </svg>
      <RiShieldFill
        style={{ fill: 'url(#orange-gradient)' }}
        className='w-3 h-3'
      />
    </div>
  );
};
