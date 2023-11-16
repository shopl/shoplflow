import type React from 'react';

const ICON_SYMBOL = Symbol('$$shopl.isShoplIcon');

export type EnabledIconSource = React.FunctionComponent<React.SVGProps<SVGSVGElement>> & {
  [ICON_SYMBOL]?: boolean;
};

export type IconSource = React.FunctionComponent<React.SVGProps<SVGSVGElement>> & {
  [ICON_SYMBOL]: true;
};
export function isShoplIcon(arg: EnabledIconSource): arg is IconSource {
  return typeof arg === 'function' && arg[ICON_SYMBOL] === true;
}

export function createIcon(source: EnabledIconSource): IconSource {
  source[ICON_SYMBOL] = true;
  return source as IconSource;
}
