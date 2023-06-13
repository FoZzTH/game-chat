import { SiBitcoinsv } from 'react-icons/si';
import { ModeratorBadge } from './badges/moderator';
import { AdminBadge } from './badges/admin';

type Props = {
  userName: string;
};

export const UserInfo = ({ userName }: Props) => {
  const getLvl = () => {
    return 3;
  };

  return (
    <div className='flex mx-3 mt-2 items-center'>
      <SiBitcoinsv className='w-3 h-3 text-[#DD8A26]' />
      <div className='mx-1 text-[#999999]'>{userName}</div>
      <ModeratorBadge />
      <AdminBadge />
      <div className='mx-1 text-[#23B838]'>{getLvl()}</div>
    </div>
  );
};
