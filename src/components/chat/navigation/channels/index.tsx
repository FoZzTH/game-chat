import { Channel } from './channel';

const CHANNELS = [
  { name: 'Общий' },
  { name: 'Клан' },
  { name: 'Друзья' },
  { name: 'Новости' },
];

export const Channels = () => {
  return (
    <div>
      <div className='w-64 h-full uppercase flex flex-nowrap'>
        {CHANNELS.map((channel, i) => (
          <Channel name={channel.name} key={i} />
        ))}
      </div>
      <div>{'>'}</div>
    </div>
  );
};
