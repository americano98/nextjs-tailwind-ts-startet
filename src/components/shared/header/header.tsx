import { FC } from 'react';
import { HeaderProps } from './header.types';

// TODO: Implement mobile menu functionality and delete eslint comment below, example — https://user-images.githubusercontent.com/20713191/144221747-70dc933e-a5bd-4586-9019-08117afc13e0.png
// eslint-disable-next-line no-unused-vars
const Header: FC<HeaderProps> = ({ isMobileMenuOpen = false, onBurgerClick }) => (
  <header className="safe-paddings">
    <div className="container">Header!</div>
  </header>
);

export default Header;
