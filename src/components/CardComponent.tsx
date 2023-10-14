import React from 'react';
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
interface CardProps {
    ariaLabel: string;
    title: string;
    imageSrc: StaticImageData;
    linkHref: string;
    buttonText: string;
  }

const CardComponent = ({ ariaLabel, title, imageSrc, linkHref, buttonText }: CardProps) => {
  return (
    <div
      tabIndex={0}
      aria-label={ariaLabel}
      className="w-[18rem] py-3 bg-slate-50 rounded-xl flex flex-col gap-4 items-center shadow-lg hover:scale-105 duration-200 dark:bg-zinc-800 dark:border-2 dark:border-white"
    >
      <h2 className="mt-2 font-semibold text-zinc-800 text-2xl tracking-[0.5px] dark:text-slate-100">{title}</h2>
      <Image src={imageSrc} alt={`imagem ${ariaLabel}`} width={1000} height={1000} className="h-36 w-36 rounded-md" />
      <Link
        tabIndex={0}
        href={linkHref}
        className="rounded-md bg-primary-400 px-4 py-2 text-base font-medium tracking-[2px] text-white duration-300 ease-in-out hover:bg-blue-900 dark:border-2 dark:border-white dark:bg-zinc-900 dark:font-semibold dark:hover:bg-white dark:hover:text-black"
      >
        <span>{buttonText}</span>
      </Link>
    </div>
  );
};

export default CardComponent;
