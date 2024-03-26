"use client"
import React, { ReactNode, useEffect } from 'react';
import ClickSound from '@/components/ClickSound';
import { useAccessibility } from './AccessibilityContext';
const ClickableWrapper = ({ children }: { children: ReactNode }) => {
 const { isReady,sound } = useAccessibility();
  useEffect(() => {
    const handleClick = () => {
        if(sound > 0){
      const clickSound = new Audio("/onClick.mp3");
      clickSound.play();}
    };

    const clickableElements = document.querySelectorAll('body *');
    const elementsTags = ['button', 'a'];
    clickableElements.forEach(element => {
        const isClickable = elementsTags.includes(element.tagName.toLowerCase());
        if(isClickable)
            element.addEventListener('click', handleClick);
    });

    return () => {
      clickableElements.forEach(element => {
        const isClickable = elementsTags.includes(element.tagName.toLowerCase());
        if(isClickable)
            element.removeEventListener('click', handleClick);
      });
    };
  }, [isReady, sound]);

  return (
    <>
      {children}
      <ClickSound />
    </>
  );
};

export default ClickableWrapper;
