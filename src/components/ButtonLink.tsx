import Link from "next/link";

interface ButtonLinkProps{
    linkUrl: string;
    bgColor?: string;
    textColor?: string;
    linkText?: string;
}
export function ButtonLink({linkUrl, bgColor, textColor,linkText}: ButtonLinkProps) {
    return(
        <Link 
            href={linkUrl}
            className={`h-fit self-end rounded-md ${bgColor && bgColor}   ${textColor && textColor } bg-blue-900 text-white  text-shadow px-6 py-2 text-base font-normal duration-300 ease-in-out hover:bg-blue-950 dark:border-2 dark:border-white dark:bg-black dark:font-semibold dark:hover:bg-white dark:hover:text-black`}
         >
            {linkText ? linkText : "Iniciar"}
        </Link>
    )
}