"use client"
import { createContext, useContext, ReactNode, useState, useEffect } from 'react';

interface AccessibilityContextProps {
  contrast: boolean;
  setContrast: React.Dispatch<React.SetStateAction<boolean>>;
  zoom: boolean;
  setZoom: React.Dispatch<React.SetStateAction<boolean>>;
  sound: boolean;
  setSound: React.Dispatch<React.SetStateAction<boolean>>;
  isReady: boolean;
  setIsReady: React.Dispatch<React.SetStateAction<boolean>>;
}

const AccessibilityContext = createContext<AccessibilityContextProps | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  
  const [contrast, setContrast] =  useState( () => {
    if (typeof window !== "undefined") {
    const storedValue = localStorage.getItem('contrast');
    return storedValue ? JSON.parse(storedValue) : false;
    }
  });

  const [zoom, setZoom] = useState(() => {
    if (typeof window !== "undefined") {
    const storedValue = localStorage.getItem('zoom');
    return storedValue ? JSON.parse(storedValue) : false;
    }
  });

  const [sound, setSound] = useState( () => {
    if (typeof window !== "undefined") {
    const storedValue = localStorage.getItem('sound');
    return storedValue ? JSON.parse(storedValue) : false;
    }
  });
  const [isReady, setIsReady] = useState(()=> {
    if (typeof window !== "undefined") {
      return true;
    }
    return false;
    
  })

  useEffect(() => {
    localStorage.setItem('contrast', JSON.stringify(contrast));
    localStorage.setItem('zoom', JSON.stringify(zoom));
    localStorage.setItem('sound', JSON.stringify(sound));
  }, [contrast, zoom, sound]);

  return (
    <AccessibilityContext.Provider value={{ contrast, setContrast, zoom, setZoom, sound, setSound, isReady, setIsReady}}>
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
