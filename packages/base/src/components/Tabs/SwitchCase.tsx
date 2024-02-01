import type { SwitchCaseProps } from './Tabs.types';

export const SwitchCase = ({ value, caseBy }: SwitchCaseProps) => {
  const Component = caseBy[value] || null;

  return <>{Component}</>;
};
