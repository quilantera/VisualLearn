import imageDefault from "@/assets/astronauta-lendo-livro_1366-939.png";
import Image, { StaticImageData } from "next/image";
interface ActionCardImageProps{
    urlImage?: string;
    StaticImageData?: StaticImageData;
    altImage: string;
}
export function ActionCardImage({urlImage,StaticImageData,altImage}:ActionCardImageProps) {
 
    if(urlImage) {
        return (
            <img 
                src={urlImage}
                className=" h-40 w-[90%] self-center object-cover rounded-md"
                alt={altImage}
            />
        )
    }else {
        return(
            <Image
                src={StaticImageData ? StaticImageData : imageDefault}
                className=" h-40 w-[90%] object-cover self-center rounded-md" 
                alt={altImage}    
                width={200}    
                height={200}    
            />
        )
    }
}