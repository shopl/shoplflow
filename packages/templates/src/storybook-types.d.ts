/**
 * Type declarations for @storybook/react when using moduleResolution "node".
 * Storybook uses package.json "exports", which require node16/nodenext/bundler to resolve.
 * This shim allows TypeScript to find types without changing moduleResolution.
 */
declare module '@storybook/react' {
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
    play?: (context?: unknown) => void | Promise<void>;
  };
  export type StoryObj<T = unknown> = {
    args?: Partial<T> | Record<string, unknown>;
    argTypes?: Record<string, unknown>;
    parameters?: Record<string, unknown>;
    play?: (context?: unknown) => void | Promise<void>;
    render?: (args: unknown) => unknown;
    [key: string]: unknown;
  };
  export const Preview: ComponentType<{ children?: React.ReactNode }>;
}
