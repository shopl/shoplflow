import React from 'react';

export function withHoc<P>(WrappedComponent: React.ComponentType<P>) {
  const Controlled = (props: P & {}) => {
    return <WrappedComponent {...props} />;
  };

  return Controlled;
}
