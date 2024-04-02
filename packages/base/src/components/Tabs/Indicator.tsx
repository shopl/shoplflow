import { StyledIndicator } from './Indicator.styled';

export const Indicator = ({ layoutId }: { layoutId: string }) => {
  return <StyledIndicator layoutId={layoutId} transition={{ duration: 0.2 }} />;
};
