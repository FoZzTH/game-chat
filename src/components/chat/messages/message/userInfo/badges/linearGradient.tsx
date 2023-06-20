type Props = {
  id: string;
  gradientColors: string[];
};

const getGradientStep = (gradientColors: string[]) => {
  return Math.round((100 / (gradientColors.length - 1)) * 100) / 100;
};

export const LinearGradient = ({ id, gradientColors }: Props) => {
  return (
    <svg width='0' height='0'>
      <linearGradient id={id} x1='100%' y1='100%' x2='0%' y2='0%'>
        {gradientColors.map((color, i) => {
          return (
            <stop
              key={i}
              stopColor={color}
              offset={`${getGradientStep(gradientColors) * i}%`}
            />
          );
        })}
      </linearGradient>
    </svg>
  );
};
