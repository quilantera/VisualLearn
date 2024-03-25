"use client"

import { useAccessibility } from '@/app/Context/AccessibilityContext';
import React, { useEffect, useState } from 'react';

export function stateSpeak(text:string,rate:number = 1.6){
  speechSynthesis.cancel();
  speaksText(text,rate);
}

 function speaksText (text:string,rate:number = 1.6){
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = 'pt-BR';
  speech.rate = rate;
  speechSynthesis.speak(speech);
}
export default function SpeechReader() {
  const { sound, isReady,setIsReady} = useAccessibility();
  const [selectedElement, setSelectedElement] = useState(null);
  useEffect(()=>{
    setIsReady(!isReady);
  },[]);
  useEffect(() => {
    const tags = ['svg', 'path','rect', 'fill', 'line','circle','polyline','polygon']
    const elementsTags = ['p', 'h1', 'h2', 'h3', 'h4', 'a'];
    const handleFocus = (event:any) => {
      if (selectedElement && selectedElement !== event.currentTarget) {
        speechSynthesis.cancel();
      }
    
      setSelectedElement(event.currentTarget);
      
      const parent: HTMLElement = event.currentTarget;
      const parentText = parent.textContent;
      const parentAriaLabel = parent.ariaLabel;
      const children = parent.querySelectorAll(elementsTags.join(', ')) ;
      
       if (sound > 0 ) {
         if (parentAriaLabel) {
          speaksText(parentAriaLabel,1+(0.4*sound));
         
         }
         else if (parentText) {
          speaksText(parentText,1+(0.4*sound));
         }
      children.forEach((child) => {
        const ariaLabel = child.ariaLabel;
        const text = child.textContent|| null;
        if (ariaLabel) {
          speaksText(ariaLabel,1+(0.4*sound));
        }
        else if (text) {
          speaksText(text,1+(0.4*sound));
        }
      });
    
    };
  }
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
    
  },[selectedElement, sound, isReady]);
  

  return <></>;
}