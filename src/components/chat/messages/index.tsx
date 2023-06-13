import { Message } from './message';
import { messages } from './mock';

export const Messages = () => {
  return (
    <div className='h-[80%] overflow-y-scroll'>
      {messages.map((message, i) => {
        return (
          <Message
            key={i}
            message={{
              date: message.createdAt,
              id: message.id,
              text: message.text,
              userName: message.from,
            }}
          />
        );
      })}
    </div>
  );
};
