"use client"
import { useAccessibility } from '@/app/Context/AccessibilityContext';
import React, { useEffect } from 'react';

export function isPressed(pressed: boolean){
  if(pressed){
    const speech = new SpeechSynthesisUtterance("pressionado");
    speech.lang = 'pt-BR';
    speech.rate = 1.6;
    speechSynthesis.speak(speech);
  }
  else{
    const speech = new SpeechSynthesisUtterance("Não pressionado");
    speech.lang = 'pt-BR';
    speech.rate = 1.6;
    speechSynthesis.speak(speech);
  }
  
 
}
export default function SpeechReader() {
  const tags =['svg', 'path', 'fill', 'line','circle','polyline','polygon']
  const { contrast, setContrast, zoom, setZoom, sound, setSound } = useAccessibility();

  useEffect(() => {
    const elements = document.querySelectorAll('body *');
    const handleFocus = (event: any ) => {
        const text = event.currentTarget.textContent;
        const ariaLabel = event.currentTarget.getAttribute('aria-label');
      if(sound){
          if(ariaLabel){
            const speech = new SpeechSynthesisUtterance(ariaLabel);
            speech.lang = 'pt-BR';
            speech.rate = 1.6;
            speechSynthesis.speak(speech);
          } if (text) {
            const speech = new SpeechSynthesisUtterance(text);
            speech.lang = 'pt-BR';
            speech.rate = 1.6;
            speechSynthesis.speak(speech);
          }
        };
      } 

    elements.forEach(element => { 
        const isIcon = tags.includes(element.tagName.toLowerCase())// Verifica se possui a classe 'icon'
        if (isIcon) return;
      element.addEventListener("focus", handleFocus);
    });

    return () => {
        elements.forEach((element) => {
            const isIcon = tags.includes(element.tagName.toLowerCase())// Verifica se possui a classe 'icon'
            if (isIcon) return;
            element.removeEventListener("focus", handleFocus);
          });
        }
  }, [sound, tags]);

  
  return <></>;
}



