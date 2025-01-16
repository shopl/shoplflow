import { StyledTitle } from './Title.styled';
import type { TitleProps } from './Title.types';

const Title = ({ title }: TitleProps) => {
  return <StyledTitle data-shoplflow={'Title'}>{title}</StyledTitle>;
};

export default Title;
