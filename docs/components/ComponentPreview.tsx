import React from 'react';
import styled from '@emotion/styled';

export interface ComponentPreviewProps {
  note: string;
  children: React.ReactNode;
}

const Container = styled.div`
  position: relative;
  margin-top: 1.5rem;
`;

const Canvas = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 0.75rem;
  background-color: hsl(var(--nextra-primary-hue) 100% 39%/0.05);

  -webkit-text-size-adjust: 100%;
  tab-size: 4;
  font-variation-settings: normal;
  contain: paint;
  margin-bottom: 1rem;
  overflow-x: auto;
  border-radius: 0.75rem;
  background-color: hsl(var(--nextra-primary-hue) 100% 39%/0.05);
  padding-bottom: 1rem;
  padding-top: 3rem;
  font-size: 0.9em;
  font-weight: 500;
  -webkit-font-smoothing: auto;
`;
const FileName = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
  background-color: hsl(var(--nextra-primary-hue) 100% 39%/0.05);
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.75rem;
  --tw-text-opacity: 1;
  color: rgba(55, 65, 81, var(--tw-text-opacity));
`;

const ComponentPreview = ({ note, children }: ComponentPreviewProps) => {
  return (
    <Container>
      <FileName>{note}</FileName>
      <Canvas>{children}</Canvas>
    </Container>
  );
};

export default ComponentPreview;
