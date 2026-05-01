import React, { createContext, useContext, useState, type ReactNode } from 'react';
import type { AppContextType, AppPage } from '../types';

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<AppPage>('boot');
  const [bootComplete, setBootComplete] = useState(false);
  const [crtEnabled, setCrtEnabled] = useState(true);

  const toggleCrt = () => setCrtEnabled(v => !v);

  return (
    <AppContext.Provider value={{
      currentPage,
      setCurrentPage,
      bootComplete,
      setBootComplete,
      crtEnabled,
      toggleCrt,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): AppContextType {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
