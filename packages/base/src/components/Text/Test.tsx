import React, { useRef } from 'react';
import { Button } from '../Button';

const Test = () => {
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <div>
      <Button buttonSize='s' buttonType='ghost' as='a' ref={ref}>
        hihi
      </Button>
    </div>
  );
};

export default Test;
