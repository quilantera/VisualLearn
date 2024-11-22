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
    const handleMouseMove = (e: any) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;
        setPosition({ x, y });
        setCursorPosition({ x: e.pageX - left, y: e.pageY - top });
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
    className="fixed w-[90%] h-auto z-40 top-[24%] left-[5%]"
    onClick={()=>onClose()}
    onMouseMove={handleMouseMove}
    onMouseEnter={() => setShowMagnifier(true)}
    onMouseLeave={() => setShowMagnifier(false)}
  >
    <img className="w-screen h-auto" src={imageUrl} alt="imagem ampliada" />

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