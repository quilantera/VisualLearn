// SpeechContext.tsx
"use client"
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { useAccessibility } from './AccessibilityContext';

interface SpeechContextType {
  stateSpeak: (text: string, rate?: number) => void;
}

const SpeechContext = createContext<SpeechContextType | undefined>(undefined);
export const speaksText = (text: string, rate: number = 1.6): void => {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = 'pt-BR';
  speech.rate = rate;
  speechSynthesis.speak(speech);
};

export default function SpeechProvider ({ children }: { children: ReactNode }){
    const { sound, isReady, setIsReady } = useAccessibility();
  const [selectedElement, setSelectedElement] = useState<HTMLElement | null>(null);

  const stateSpeak = (text: string, rate: number = 1.6): void => {
    speechSynthesis.cancel();
    speaksText(text, rate);
  };

  
  useEffect(() => {
    setIsReady(!isReady);
  }, []);

  useEffect(() => {
    const tags = ['svg', 'path', 'rect', 'fill', 'line', 'circle', 'polyline', 'polygon'];
    const elementsTags = ['p','h1','h2','h3','h4','a'];

    const handleFocus = (event:any) => {
      if (selectedElement && selectedElement !== event.currentTarget) {
        speechSynthesis.cancel();
      }

      setSelectedElement(event.currentTarget);

      const parent = event.currentTarget;
      const parentText = parent.textContent;
      const parentAriaLabel = parent.getAttribute('aria-label');
      const children = parent.querySelectorAll(elementsTags.join(', '));

      if (sound > 0) {
        if (parentAriaLabel) {
          speaksText(parentAriaLabel, 1 + (0.4 * sound));
        }
        else if (parentText) {
          speaksText(parentText, 1 + (0.4 * sound));
        }
        children.forEach((child:HTMLElement) => {
          const ariaLabel = child.getAttribute('aria-label');
          const text = child.textContent || null;
          if (ariaLabel) {
            speaksText(ariaLabel, 1 + (0.4 * sound));
          }
          else if (text) {
            speaksText(text, 1 + (0.4 * sound));
          }
        });
      }
    };

    const elements = document.querySelectorAll('body *');
    elements.forEach(element => {
      const isIcon = tags.includes(element.tagName.toLowerCase());
      if (isIcon) return;
      element.addEventListener("focus", handleFocus);
    });

    return () => {
      elements.forEach(element => {
        const isIcon = tags.includes(element.tagName.toLowerCase());
        if (isIcon) return;
        element.removeEventListener("focus", handleFocus);
      });
    }

  }, [selectedElement, sound, isReady]);

  const value: SpeechContextType = {
    stateSpeak,
  };

  return (
    <SpeechContext.Provider value={value}>
      {children}
    </SpeechContext.Provider>
  );
};

export const useSpeech = (): SpeechContextType => {
    const context = useContext(SpeechContext);
    if (!context) {
      throw new Error('useSpeech must be used within a SpeechProvider');
    }
    return context;
  };
  