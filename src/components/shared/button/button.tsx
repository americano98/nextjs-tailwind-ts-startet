import clsx from 'clsx';
import { FC } from 'react';

import Link from 'components/shared/link';

import { ButtonProps } from './button.types';
import { ILinkStyle } from '../link/link.types';

// Example of the code — https://user-images.githubusercontent.com/20713191/144215307-35538500-b9f0-486d-abed-1a14825bb75c.png
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

const Button: FC<ButtonProps> = ({
  className: additionalClassName,
  to,
  size,
  theme,
  children,
  ...otherProps
}) => {
  const className = clsx(
    size && theme && styles.base,
    size && styles.size[size],
    theme && styles.theme[theme],
    additionalClassName
  );

  const Tag = to ? Link : 'button';

  return (
    <Tag className={className} to={to} {...otherProps}>
      {children}
    </Tag>
  );
};

export default Button;
