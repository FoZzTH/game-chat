import { useEffect, useState } from 'react';
import { SiBitcoinsv } from 'react-icons/si';

import { AdminBadge, ModeratorBadge } from './badges';
import { rand } from '@/utils';

type Props = {
  userName: string;
};

const USER = {
  level: 1,
  isAdmin: false,
  isModerator: false,
};

export const UserInfo = ({ userName }: Props) => {
  const [user, setUser] = useState(USER);

  useEffect(() => {
    const role = rand(1, 3);

    setUser({
      level: rand(1, 10),
      isAdmin: role === 1,
      isModerator: role === 2,
    });
  }, []);

  return (
    <div className='flex mx-3 items-center'>
      <SiBitcoinsv className='w-3.5 h-3.5 text-[#DD8A26]' />
      <div className='mx-1 text-[#999999]'>{userName}</div>
      {user.isModerator && <ModeratorBadge />}
      {user.isAdmin && <AdminBadge />}
      <div className='mx-1 text-[#23B838]'>{user.level}</div>
    </div>
  );
};
