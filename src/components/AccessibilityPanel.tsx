  "use client";
  import { useAccessibility } from "@/app/Context/AccessibilityContext";
  import * as Toggle from "@radix-ui/react-toggle";
  import { Eye, ZoomIn, Volume2, Accessibility } from "lucide-react";
  import { useEffect, useState } from "react";
  import { stateSpeak } from "./SpeechReader";
  import * as NavigationMenu from '@radix-ui/react-navigation-menu';

  interface AccessibilityPanelProps{
    visibleOnScroll?: boolean;
  }
  export function AccessibilityPanel({visibleOnScroll = false}: AccessibilityPanelProps) {
    
    const { contrast, setContrast, zoom, setZoom, sound, setSound,isReady, setIsReady } = useAccessibility();
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [windowWidth, setWindowWidth] = useState(1000);

  useEffect(() => {
    function handleResize() {
      
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const maxZoom = windowWidth < 780 ? 2 : 4;

    async function handleToggleChange(state: number , setState: React.Dispatch<React.SetStateAction<number>>, max:number = 2) {
      let stateAux = state;
      if( state >= 0 && state < max){
        await setState(state +1);
        stateAux = state + 1;
      }
      else {
        await setState(0);
        stateAux = 0;
      }
      if(sound > 0)
      if (stateAux > 0) {
        stateSpeak(`nivel ${stateAux}`,1+(0.4*sound))
      } else {
        stateSpeak(`desligado`,1+(0.4*sound))
      }
    }
    async function handleContrastChange(state: boolean ,setState: React.Dispatch<React.SetStateAction<boolean>>) {
      const auxState = !state;
      await setState(!state);
      if(sound > 0)
      if (auxState ) {
        stateSpeak(`pressionado`,1+(0.4*sound))
      } else {
        stateSpeak(`não pressionado`,1+(0.4*sound))
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
        document.documentElement.style.fontSize = `${100 + (zoom) * 34}%`; // Ajuste o valor conforme necessário
      } else {
        document.documentElement.style.fontSize = ""; // Reset para o tamanho padrão
      }
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [contrast, zoom, sound]);
    useEffect(() => {
        if(typeof window !== "undefined") {
          setIsLoading(false);
        }  
    }, [isReady]);
    useEffect(() =>{
      setIsReady(!isReady);
    },[]);
  
    return (
      <>
      <button onClick={()=>{setIsVisible(state => !state)}} className={`hidden sm:block fixed top-4 right-4 p-3 bg-white rounded shadow-lg dark:bg-gray-900 dark:border dark:border-slate-50`}><Accessibility/> </button>
    {!isLoading && 

   
    <NavigationMenu.Root >
      <NavigationMenu.List 
        aria-label="Area de acessibilidade"
        className={` sm:fixed sm:top-4 sm:h-fit
          ${isVisible ? "sm:right-5": "sm:right-[-100vw]"}
         z-20  self-center justify-self-center flex h-full gap-3 rounded-3xl sm:gap-1 sm:px-4  bg-zinc-300 dark:border dark:border-slate-50  dark:bg-gray-900 px-8 py-[8px] shadow-md ${
          scrollPosition > 20 && !visibleOnScroll ? "opacity-30" : "opacity-100"
        }  rounded duration-200 sm:duration-700  ease-in-out  hover:opacity-100 focus:opacity-100 `}
       
        >
          <NavigationMenu.Item>
            <Toggle.Root
              onPressedChange={() => handleContrastChange(contrast, setContrast)}
              className="flex  h-full w-[4.20rem] sm:w-[4rem] flex-col items-center justify-center rounded-lg bg-white dark:bg-gray-900 dark:border dark:border-slate-50 px-1 text-primary-500 dark:text-white shadow-md drop-shadow-md duration-300 hover:scale-105 data-[state=on]:bg-primary-500 data-[state=on]:text-zinc-50 dark:data-[state=on]:bg-yellow-500 dark:data-[state=on]:text-gray-900"
              aria-label="botão mudar contraste"
              data-state={contrast ? 'on' : 'off'}
            >
              <Eye className="h-7 w-7 sm:h-5 sm:w-5" absoluteStrokeWidth={true} tabIndex={-1}/>
              <span className="  text-[0.7rem] font-semibold leading-none pb-1">
                Contraste
              </span>
            </Toggle.Root>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
          <Toggle.Root
          onPressedChange={() => handleToggleChange(zoom, setZoom,maxZoom)}
          className="flex h-full relative w-[4.20rem] sm:w-[4rem] flex-col items-center justify-center rounded-lg bg-white dark:bg-gray-900 dark:border dark:border-slate-50 px-1 text-primary-500 dark:text-white shadow-md drop-shadow-md duration-300 hover:scale-105 data-[state=on]:bg-primary-500 data-[state=on]:text-zinc-50 dark:data-[state=on]:bg-yellow-500 dark:data-[state=on]:text-gray-900"
          aria-label="botão aumentar o zoom"
          data-state={zoom > 0 ?'on' : 'off'}
        >
          <ZoomIn className="h-6 w-6 sm:h-5 sm:w-5" />
          <span className=" text-[0.7rem] font-semibold leading-none pb-1">
            Zoom
          </span>
          {zoom >= 1&&
           <span className={`absolute font-semibold top-[-10px] right-[-10px] text-[0.6rem] sm:text-[0.4rem] sm:border
            p-[0.3rem] bg-cyan-900 dark:bg-yellow-300 border-[2px] border-slate-100 dark:border-slate-900 rounded-full shadow-md `}>
            X {zoom}
            </span>}
        </Toggle.Root>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
          <Toggle.Root
           onPressedChange={() => handleToggleChange(sound, setSound, 3)}
          className="flex   h-full relative w-[4.20rem] sm:w-[4rem] flex-col items-center justify-center rounded-lg bg-white dark:bg-gray-900 dark:border dark:border-slate-50 px-1 text-primary-500 dark:text-white shadow-md drop-shadow-md duration-300 hover:scale-105 data-[state=on]:bg-primary-500 data-[state=on]:text-zinc-50 dark:data-[state=on]:bg-yellow-500 dark:data-[state=on]:text-gray-900 "
          aria-label="botão ligar som"
          data-state={sound >0 ? 'on' : 'off'}
        >
          <Volume2 className="h-6 w-6 sm:h-5 sm:w-5  " />
          <span className="  text-[0.7rem] font-semibold leading-none pb-1">
            Leitor
          </span>
          {sound >= 1 && 
          <span className={` absolute font-semibold top-[-10px] right-[-10px] text-[0.6rem] p-[0.3rem]  sm:text-[0.4rem] sm:border
           bg-cyan-900 dark:bg-yellow-300 border-[2px] border-slate-100 dark:border-slate-900 rounded-full shadow-md `}>
            X {sound}
          </span>}
        </Toggle.Root>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    }
    </>
    );
  }
      