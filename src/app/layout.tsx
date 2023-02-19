import LayoutMain from 'layouts/layout-main/layout-main';

import 'styles/main.css';

// eslint-disable-next-line react/prop-types
const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <head />
    <body>
      <LayoutMain>{children}</LayoutMain>
    </body>
  </html>
);

export default RootLayout;
