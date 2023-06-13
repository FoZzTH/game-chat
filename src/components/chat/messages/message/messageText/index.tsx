type Props = {
  text: string;
};

export const MessageText = ({ text }: Props) => {
  return <div className='mx-3 mb-3 break-words'>{text}</div>;
};
