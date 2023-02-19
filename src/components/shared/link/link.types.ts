import { PropsWithChildren } from 'react';

type LinkSize = 'default' | 'sm' | 'md' | 'lg';
type LinkTheme = 'default' | 'blue';

export interface ILinkStyle {
  base: string;
  size: Record<LinkSize, string>;
  theme: Record<LinkTheme, string>;
}

export interface LinkProps extends PropsWithChildren {
  className?: string;
  to?: string;
  size?: LinkSize;
  theme?: LinkTheme;
}
