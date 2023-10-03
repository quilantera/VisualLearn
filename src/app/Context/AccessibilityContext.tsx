"use client";
import { createContext, useContext, ReactNode, useState } from 'react';

interface AccessibilityContextProps {
  contrast: boolean;
  setContrast: React.Dispatch<React.SetStateAction<boolean>>;
  zoom: boolean;
  setZoom: React.Dispatch<React.SetStateAction<boolean>>;
  sound: boolean;
  setSound: React.Dispatch<React.SetStateAction<boolean>>;
}

const AccessibilityContext = createContext<AccessibilityContextProps | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [contrast, setContrast] = useState(false);
  const [zoom, setZoom] = useState(false);
  const [sound, setSound] = useState(false);

  return (
    <AccessibilityContext.Provider value={{ contrast, setContrast, zoom, setZoom, sound, setSound }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}
