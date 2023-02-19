'use client';

import { FC, PropsWithChildren, useState } from 'react';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import MobileMenu from 'components/shared/mobile-menu';
import SEO from 'components/shared/seo';

const LayoutMain: FC<PropsWithChildren> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleHeaderBurgerClick = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  return (
    <>
      <SEO />
      <Header isMobileMenuOpen={isMobileMenuOpen} onBurgerClick={handleHeaderBurgerClick} />
      <main>{children}</main>
      <Footer />
      <MobileMenu isOpen={isMobileMenuOpen} />
    </>
  );
};

export default LayoutMain;
