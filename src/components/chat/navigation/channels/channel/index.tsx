type Props = {
  name: string;
};

export const Channel = ({ name }: Props) => {
  return <div className='p-2 text-center text-[#23B838]'>{name}</div>;
};
