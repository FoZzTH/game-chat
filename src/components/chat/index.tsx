import { Input } from './input';
import { Messages } from './messages';
import { Navigation } from './navigation';

export const Chat = () => {
  return (
    <div className='w-[22.5rem] h-[25rem] bg-black/50 rounded-2xl text-xs font-rubik'>
      <Navigation />
      <Messages />
      <Input />
    </div>
  );
};
