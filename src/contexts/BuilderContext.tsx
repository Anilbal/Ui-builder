import React, { createContext, useContext, useState, type ReactNode } from 'react';

interface NavLink {
  label: string;
  href: string;
}

interface NavbarData {
  brand: string;
  links: NavLink[];
  ctaText: string;
}

interface BuilderContextType {
  activeComponent: string | null;
  setActiveComponent: (componentName: string | null) => void;
  navbarData: NavbarData;
  setNavbarData: React.Dispatch<React.SetStateAction<NavbarData>>;
}

const defaultNavbarData: NavbarData = {
  brand: 'Brand',
  links: [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  ctaText: 'Get Started',
};

const BuilderContext = createContext<BuilderContextType | undefined>(undefined);

export const BuilderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);
  const [navbarData, setNavbarData] = useState<NavbarData>(defaultNavbarData);

  return (
    <BuilderContext.Provider value={{ 
      activeComponent, 
      setActiveComponent,
      navbarData,
      setNavbarData
    }}>
      {children}
    </BuilderContext.Provider>
  );
};

export const useBuilder = () => {
  const context = useContext(BuilderContext);
  if (context === undefined) {
    throw new Error('useBuilder must be used within a BuilderProvider');
  }
  return context;
};
