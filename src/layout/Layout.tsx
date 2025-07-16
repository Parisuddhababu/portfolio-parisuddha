import React, { Suspense } from 'react';
import Header from './Header';

interface LayoutProps {
  collapsed: boolean;
  mobileMenu: boolean;
  setMobileMenu: (val: boolean) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  setMenuCollapsed: (val: boolean) => void;
  setResetState: () => void;
  children: React.ReactNode;
  userType: string;
}

const LayoutComponent: React.FC<LayoutProps> = ({
  mobileMenu,
  setMobileMenu,
  darkMode,
  setDarkMode,
  children
}) => {
  return (
    <React.Fragment>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-white text-xl">Loading...</div>
          </div>
        }>
          {children}
        </Suspense>
      </main>
    </React.Fragment>
  );
};

export default LayoutComponent;
