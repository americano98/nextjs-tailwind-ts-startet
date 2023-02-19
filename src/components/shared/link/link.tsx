/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import { FC } from 'react';
import NextLink from 'next/link';
import { ILinkStyle, LinkProps } from './link.types';

// Example of the code — https://user-images.githubusercontent.com/20713191/144221096-1939c382-4ab8-4d28-b0e6-7bbe3a8f8556.png
const styles: ILinkStyle = {
  // TODO: Add base styles
  base: '',
  // TODO: Add sizes. Better to write down all sizes and go from higher to lower, e.g. "xl", "lg", "md", "sm", "xs"
  //       The name of the size cannot be lower than the font size that being used, e.g. "sm" size cannot have font-size "xs"
  //       Check out an example by a link above for better understanding
  size: {
    default: '',
    sm: '',
    md: '',
    lg: '',
  },
  // TODO: Add themes. Better to name the theme using this pattern: "${color-name}-${theme-type}", e.g. "black-filled"
  //       If there is no dividing between theme types, then feel free to use just color names, e.g. "black"
  //       Check out an example by a link above for better understanding
  theme: {
    default: '',
    blue: '',
  },
};

const Link: FC<LinkProps> = ({
  className: additionalClassName,
  size = 'default',
  theme = 'default',
  to,
  children,
  ...props
}) => {
  const className = clsx(
    size && theme && styles.base,
    size && styles.size[size],
    theme && styles.theme[theme],
    additionalClassName
  );

  if (to?.startsWith('/')) {
    return (
      <NextLink className={className} href={to} {...props}>
        {children}
      </NextLink>
    );
  }

  return (
    <a className={className} href={to} {...props}>
      {children}
    </a>
  );
};

export default Link;
