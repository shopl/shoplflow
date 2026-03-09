import { useCallback } from 'react';
import type { HelperTextProps } from './HelperText.types';
import { StackContainer } from '../StackContainer';
import { Text } from '../Text';
import { BulletDot } from './HelperText.styled';

const BulletHelperText = ({ color = 'neutral700', children, ...rest }: HelperTextProps) => {
  const getChildren = () => {
    if (typeof children === 'string') {
      return (
        <Text typography={'paragraph2'} color={color} {...rest}>
          {children}
        </Text>
      );
    }

    return children;
  };

  return (
    <StackContainer.Horizontal spacing='spacing06' width='100%' justify='flex-start' minHeight='20px'>
      <BulletDot color={color} />
      {getChildren()}
    </StackContainer.Horizontal>
  );
};

const NormalHelperText = ({ color, position, children, ...rest }: HelperTextProps) => {
  const getPositionStyle = useCallback(() => {
    switch (position) {
      case 'PRESET-TOP':
        return {
          marginTop: '8px',
        };
      case 'PRESET-BOTTOM':
        return {
          marginBottom: '8px',
        };
      default:
        return;
    }
  }, [position]);

  const getChildren = () => {
    if (typeof children === 'string') {
      return (
        <Text color={color} typography={'caption_400'} {...rest}>
          {children}
        </Text>
      );
    }

    return children;
  };

  return (
    <StackContainer.Vertical width='100%' spacing='spacing04' style={getPositionStyle()}>
      {getChildren()}
    </StackContainer.Vertical>
  );
};

const HelperText = ({ type = 'NORMAL', position = 'PRESET-TOP', color = 'neutral700', ...rest }: HelperTextProps) => {
  if (type === 'BULLET') {
    return <BulletHelperText color={color} {...rest} />;
  }

  return <NormalHelperText color={color} position={position} {...rest} />;
};

export default HelperText;
