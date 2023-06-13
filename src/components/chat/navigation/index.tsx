import { Channels } from './channels';
import { Language } from './language';

export const Navigation = () => {
  return (
    <nav className='h-[10%] bg-black/[.33] rounded-tl-2xl rounded-tr-2xl flex flex-row text-base'>
      {/* <Channels /> */}
      <Language />
    </nav>
  );
};
