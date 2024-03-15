"use client"
import { createContext, useContext, ReactNode, useState, useEffect } from 'react';

interface AccessibilityContextProps {
  contrast: boolean;
  setContrast: React.Dispatch<React.SetStateAction<boolean>>;
  zoom: number;
  setZoom: React.Dispatch<React.SetStateAction<number>>;
  sound: number;
  setSound: React.Dispatch<React.SetStateAction<number>>;
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
    return storedValue ? parseInt(JSON.parse(storedValue)) : 0;
    }return 0;
  });

  const [sound, setSound] = useState( () => {
    if (typeof window !== "undefined") {
    const storedValue = localStorage.getItem('sound');
    return storedValue ? parseInt(JSON.parse(storedValue)) : 0;
    }return 0;
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