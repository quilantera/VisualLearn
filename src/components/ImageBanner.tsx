"use client";

import {useState} from "react"
import { ZoomedImageBanner } from "./ZoomedImageBanner";
import imgProfile  from "@/assets/profile.jpg"
import Image from "next/image";
import image1 from "@/assets/image0.png";
import image2 from "@/assets/foto1.png";
interface ImageBannerProps {
    imageUrl: string;
    imageDescription?: string;
    referenceImage?: string;
    openZoomImage: () => void;
}

export function ImageBanner({imageUrl, imageDescription ="imagem exemplo", referenceImage, openZoomImage}: ImageBannerProps){
    

   
    return (
    <>
 
        <div className="w-full my-10 p-5" style={{boxShadow:"0 0px 3px #aaaaaace " }} role={'button'}  tabIndex={0} onClick={()=> openZoomImage()} aria-label={imageDescription}>
         
         {/* <img
            src={imageUrl}
            alt={referenceImage}
            className="w-full h-full rounded"
            > */}


            <Image 
            src={imageUrl == "0" ? image1 : image2 }
            alt={imageDescription }
            className="w-full h-full rounded" 
            width={800}
            height={800}/>

          {referenceImage && <span className="w-full text-center p-[8px] text-base">{referenceImage}</span>}
      </div>
      
      </>
    )
}
