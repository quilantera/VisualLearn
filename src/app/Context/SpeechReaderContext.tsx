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

export default function SpeechProvider({ children }: { children: ReactNode }) {
  const { sound, isReady, setIsReady } = useAccessibility();
  const [selectedElement, setSelectedElement] = useState<HTMLElement | null>(null);

  const stateSpeak = (text: string, rate: number = 1.6): void => {
    speechSynthesis.cancel();
    speaksText(text, rate);
  };

  const handleSpeechStart = (element: HTMLElement) => {
    element.classList.add("highlight");
    element.scrollIntoView({ behavior: "smooth", block: "center" });

  };

  const handleSpeechEnd = (element: HTMLElement) => {
    element.classList.remove("highlight");
  };

  const speaksAndHighlight = (text: string, rate: number = 1.6, element: HTMLElement) => {
    if (text && element) {
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = 'pt-BR';
      speech.rate = rate;
      speech.onstart = () => handleSpeechStart(element);
      speech.onend = () => handleSpeechEnd(element);
      speechSynthesis.speak(speech);
    }
  };

  // useEffect(() => {
  //   setIsReady(!isReady);
  // }, []);

  useEffect(() => {
    const tagsToExclude = ['svg', 'path', 'rect', 'fill', 'line', 'circle', 'polyline', 'polygon'];
    const elementsTags = ['p', 'h1', 'h2', 'h3', 'h4', 'a'];

    const handleFocus = (event: any) => {
      if (selectedElement && selectedElement !== event.currentTarget) {
        speechSynthesis.cancel();
      }

      setSelectedElement(event.currentTarget);

      const parent: HTMLElement = event.currentTarget;
      const parentText = parent.textContent;
      const parentAriaLabel = parent.getAttribute('aria-label');
      const children: HTMLElement[] | null = Array.from(parent.querySelectorAll(elementsTags.join(', ')));
      parent.scrollIntoView({ behavior: "smooth", block: "center" });
      if (sound > 0) {
        if (parentAriaLabel) {
          speaksText(parentAriaLabel, 0.8 + (0.7 * sound));
        }else if(parent.classList.contains("reader-text")){
          console.log("passou");
        } else if (parentText) {
          speaksText(parentText, 0.8 + (0.7 * sound));
        }

        children.forEach((child: HTMLElement, index: number) => {
          const ariaLabel = child.getAttribute('aria-label');
          const text = child.textContent || '';
          if (ariaLabel) {
            speaksAndHighlight(ariaLabel, 1 + (0.4 * sound), child);
          } else if (text) {
            speaksAndHighlight(text, 1 + (0.4 * sound), child);
          }
        });
      }
    };

    const elements = document.querySelectorAll('body *');
    elements.forEach(element => {
      const isIcon = tagsToExclude.includes(element.tagName.toLowerCase());
      if (!isIcon) {
        element.addEventListener("focus", handleFocus);
      }
    });

    return () => {
      elements.forEach(element => {
        const isIcon = tagsToExclude.includes(element.tagName.toLowerCase());
        if (!isIcon) {
          element.removeEventListener("focus", handleFocus);
        }
      });
    };
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
