import type { ColorTokens } from '../styles';
import { colorTokens } from '../styles';

interface LoadingSpinnerProps {
  color?: ColorTokens;
  /**
   * 스피너의 가로·세로 크기(px)입니다.
   * @default 24
   */
  size?: number;
}

const LoadingSpinner = ({ color = 'neutral0', size = 24 }: LoadingSpinnerProps) => {
  return (
    <svg width={size} height={size} stroke={colorTokens[color]} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <style>
        {`
          .spinner { transform-origin: center; animation: spinner_rotation 2s linear infinite; }
          .spinner circle { stroke-linecap: round; animation: spinner_dash 1.5s ease-in-out infinite; }
          @keyframes spinner_rotation { 100% { transform: rotate(360deg); } }
          @keyframes spinner_dash { 
            0% { stroke-dasharray: 0 150; stroke-dashoffset: 0; }
            47.5% { stroke-dasharray: 42 150; stroke-dashoffset: -16; }
            95%, 100% { stroke-dasharray: 42 150; stroke-dashoffset: -59; }
          }
        `}
      </style>
      <g className='spinner'>
        <circle cx='12' cy='12' r='9.5' fill='none' strokeWidth='2'></circle>
      </g>
    </svg>
  );
};

export default LoadingSpinner;
