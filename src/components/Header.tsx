  "use client";
  import { useAccessibility } from "@/app/Context/AccessibilityContext";
  import * as Toggle from "@radix-ui/react-toggle";
  import { Eye, ZoomIn, Volume2 } from "lucide-react";
  import { useEffect, useState } from "react";
  import { isPressed } from "./SpeechReader";
  import * as NavigationMenu from '@radix-ui/react-navigation-menu';

  export function Header() {
    
    const { contrast, setContrast, zoom, setZoom, sound, setSound } = useAccessibility();
    
    const [isLoading, setIsLoading] = useState(true);
    const [scrollPosition, setScrollPosition] = useState<number>(0);
  
    async function handleToggleChange(state: boolean ,setState: React.Dispatch<React.SetStateAction<boolean>>, onActivate: () => void, onDeactivate: () => void) {
      await setState(!state);
      if(sound)
      if (state) {
        onDeactivate();
      } else {
        onActivate();
      }
    }
  
    useEffect(() => {
      function handleScroll() {
        setScrollPosition(window.scrollY);
      }
  
      window.addEventListener("scroll", handleScroll);
  
      if (contrast) {
        document.documentElement.classList.add("dark"); // Adiciona a classe 'darkmode'
      } else {
        document.documentElement.classList.remove("dark"); // Remove a classe 'darkmode'
      }
  
      if (zoom) {
        document.documentElement.style.fontSize = "120%"; // Ajuste o valor conforme necessário
      } else {
        document.documentElement.style.fontSize = ""; // Reset para o tamanho padrão
      }
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [contrast, zoom,sound]);
    useEffect(() => {
        if(typeof window !== "undefined") {
          setIsLoading(false);
        }  
    }, []);
  
  
    return (
      <>
    {!isLoading && 
    <NavigationMenu.Root aria-label="Area de acessibilidade">
      <NavigationMenu.List 
        className={`fixed right-8 top-4 z-20  flex gap-2 bg-primary-500 px-3 py-1 ${
          scrollPosition < 20 ? "opacity-100" : "opacity-30"
        }  rounded-full duration-200  ease-in-out  hover:opacity-100 focus:opacity-100 `}
       
        >
          <NavigationMenu.Item>
            <Toggle.Root
              onPressedChange={() => handleToggleChange(contrast, setContrast, () => isPressed(true), () => isPressed(false))}
              className="toggle rounded px-1 py-1 text-gray-50 data-[state=on]:bg-gray-100 data-[state=on]:text-violet-300  data-[state=on]:drop-shadow-md"
              aria-label="botão mudar contraste"
              tabIndex={1}
              data-state={contrast? 'on' : 'off'}
            >
              <Eye className="h-7 w-7" />
            </Toggle.Root>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Toggle.Root
              onPressedChange={() => handleToggleChange(zoom, setZoom, () => isPressed(true), () => isPressed(false))}
              className=" toggle rounded px-1 py-1 text-gray-50 data-[state=on]:bg-gray-100 data-[state=on]:text-violet-300  data-[state=on]:drop-shadow-md"
              aria-label="botão aumentar o zoom"
              tabIndex={1}
              data-state={zoom ? 'on' : 'off'}
            >
              <ZoomIn className="h-7 w-7" />
            </Toggle.Root>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Toggle.Root
              onPressedChange={() => handleToggleChange(sound, setSound, () => isPressed(true), () => isPressed(false))}
              className="toggle rounded px-1 py-1 text-gray-50 data-[state=on]:bg-gray-100 data-[state=on]:text-violet-300  data-[state=on]:drop-shadow-md"
              aria-label="botão ligar som"
              tabIndex={1}
              data-state={sound ? 'on' : 'off'}
            >
              <Volume2 className="h-7 w-7" />
            </Toggle.Root>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    }
    </>
    );
  }
  