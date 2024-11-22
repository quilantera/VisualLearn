"use client"
import { useState } from "react";

interface ZoomedImageBannerProps{
    onClose: ()=> void;
    imageUrl: string;

}

export function ZoomedImageBanner({onClose, imageUrl}:ZoomedImageBannerProps){
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [showMagnifier, setShowMagnifier] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100; // Coordenadas relativas à largura do elemento
      const y = ((e.clientY - top) / height) * 100;
      setPosition({ x, y });
      setCursorPosition({ x: e.clientX - left, y: e.clientY - top });
    };
    return (
    <>
    <section
      style={{position:"fixed", top:0, left:0}}
      className="w-full h-screen overflow-auto bg-gray-900 opacity-60 flex flex-col"
    onClick={()=>onClose()}
      >
        
    </section>
        <div
          className="absolute w-screen h-screen flex justify-center items-center"
          onClick={()=>onClose()}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setShowMagnifier(true)}
          onMouseLeave={() => setShowMagnifier(false)}
        >
            <img className="w-full h-auto max-h-[90vh]" src={imageUrl} alt="imagem ampliada" />

            {showMagnifier && (
              <div
                style={{
                  position: "absolute",
                  left: `${cursorPosition.x - 200}px`,
                  top: `${cursorPosition.y - 300}px`,
                  pointerEvents: "none",
                }}
              >
              <div
                className="h-[400px] w-[400px] border-slate-50 border-2 z-[50]"
                style={{
                  backgroundImage: `url(${imageUrl})`,
                  backgroundSize: "140vw",
                  backgroundPosition: `${position.x -4}% ${position.y -4}%`,
                }}
              />
            </div>
          )}
        </div>
    </>
    )
}