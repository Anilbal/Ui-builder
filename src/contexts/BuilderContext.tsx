import React, { createContext, useContext, useState, type ReactNode } from 'react';

interface BuilderContextType {
  activeComponent: string | null;
  setActiveComponent: (componentName: string | null) => void;
}

const BuilderContext = createContext<BuilderContextType | undefined>(undefined);

export const BuilderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  return (
    <BuilderContext.Provider value={{ activeComponent, setActiveComponent }}>
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
