import React from 'react';
import * as SC from './CardSkeleton.styled';
import { Skeleton } from '../Skeleton';

const CardSkeleton = () => {
  return (
    <SC.Wrapper data-shoplflow={'CardSkeleton'}>
      <SC.HeaderWrapper>
        <Skeleton
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '20px',
          }}
        />
        <Skeleton
          style={{
            width: '204px',
            height: '20px',
            borderRadius: '4px',
          }}
        />
      </SC.HeaderWrapper>
      <SC.ContentWrapper>
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton
            key={index}
            style={{
              height: '96px',
              borderRadius: '12px',
            }}
          />
        ))}
      </SC.ContentWrapper>
    </SC.Wrapper>
  );
};

export default CardSkeleton;
