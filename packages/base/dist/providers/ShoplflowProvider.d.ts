import React from 'react';
interface ShoplflowProviderProps {
    domain?: 'HADA' | 'SHOPL';
    children: React.ReactNode;
}
declare const ShoplflowProvider: ({ children, domain }: ShoplflowProviderProps) => React.JSX.Element;
export default ShoplflowProvider;
