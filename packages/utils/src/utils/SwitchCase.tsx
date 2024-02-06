import type { ReactNode } from 'react';

export type SwitchCaseProps<T extends Record<string, ReactNode>> = {
  value: T extends Record<infer K, ReactNode> ? K : never;
  caseBy: T;
};

export const SwitchCase = <T extends Record<string, ReactNode>>({ value, caseBy }: SwitchCaseProps<T>) => {
  if (value in caseBy) {
    return caseBy[value];
  }
  return null;
};
