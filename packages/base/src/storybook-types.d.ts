/**
 * Type declarations for Storybook packages when using moduleResolution "node".
 * Storybook 10 uses package.json "exports", which require node16/nodenext/bundler to resolve.
 * This shim allows TypeScript to find types without changing moduleResolution for the whole project.
 */
declare module '@storybook/react-vite' {
  import type { ComponentType } from 'react';
  export type Meta<T = unknown> = {
    title?: string;
    component?: ComponentType<T> | unknown;
    argTypes?: Record<string, unknown>;
    [key: string]: unknown;
  };
  export type StoryFn<T = unknown> = ComponentType<T> & {
    args?: Partial<T>;
    argTypes?: Record<string, unknown>;
    parameters?: Record<string, unknown>;
    play?: (context?: any) => void | Promise<void>;
  };
  export type StoryObj<T = unknown> = {
    args?: Partial<T> | Record<string, unknown>;
    argTypes?: Record<string, unknown>;
    parameters?: Record<string, unknown>;
    play?: (context?: any) => void | Promise<void>;
    render?: (args: any) => unknown;
    [key: string]: unknown;
  };
}

declare module 'storybook/test' {
  export const expect: {
    (actual: unknown): {
      toHaveTextContent: (text: string) => void;
      toHaveValue: (value: string) => void;
      toHaveAttribute: (name: string, value?: string) => void;
      toStrictEqual: (expected: unknown) => void;
      toBe: (expected: unknown) => void;
      toBeNull: () => void;
    };
  };
  export const within: (element: HTMLElement) => {
    getByRole: (role: string, options?: unknown) => HTMLElement;
    findByText: (text: string) => Promise<HTMLElement>;
    getByText: (text: string) => HTMLElement;
  };
  export const userEvent: {
    click: (el: HTMLElement) => Promise<void>;
    type: (el: HTMLElement, text: string) => Promise<void>;
  };
}
