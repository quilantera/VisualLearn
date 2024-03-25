"use client";
import Image from "next/image";

import profile from "../assets/profile.jpg";
import { BookA, BookDashed, GraduationCap, School } from "lucide-react";
import { EloCard } from "./EloCard";
import { useAccessibility } from "@/app/Context/AccessibilityContext";
interface UserWithSchoolAndActivities {
    email: string;
    nome: string;
    urlAvatar: string | null;
    papel: string;
    escola: {
        nome: string;
    } | null;
    atividadesAluno: {
        dataEntrega: Date | null;
        nota: number | null;
    }[];
}
interface Turmas {
    nome: string;
    anoEscolar: Date;
}
interface PrimeiroCardProps {
    usuario: UserWithSchoolAndActivities;
    turma?: Turmas;
}
function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function PrimeiroCard({ usuario, turma }: PrimeiroCardProps) {
    const { zoom } = useAccessibility();
    return (
        <article
            tabIndex={0}
            aria-label="Card de Perfil"
            className={`flex  sm:h-fit  sm:flex-col  sm:px-2 sm:py-4 w-full min-h-[10.2rem] min-w[400px] items-center rounded-md  shadow-md bg-white py-[20px] px-[32px]  dark:bg-gray-900 dark:border-2 dark:border-slate-50
            ${zoom >= 2 ? "h-fit  flex-col  px-2 py-4" : ""}`}
        >
            <div
                className={`w-3/5 flex  sm:w-full sm:flex-col sm:items-center 
         ${zoom >= 2 ? "w-full flex-col items-center" : ""}`}
            >
                <div
                    className={` flex  sm:w-full sm:justify-center ${
                        zoom >= 2
                            ? "h-[9.4rem] w-full justify-center"
                            : " relative w-[14rem] h-full min-w-40"
                    }`}
                >
                    <div
                        className={`inset-0 h-[9.52rem] w-[9.52rem]  rounded-full top-[-3rem] sm:static    z-0 flex items-center justify-center bg-gradient-to-r from-[#620e9a] to-[#00fffc]  dark:from-[#581ca7] dark:to-[#ffffff]
                ${zoom >= 2 ? "static " : "absolute"}`}
                    >
                        <div
                            className={`h-36 w-36  z-20 flex items-center justify-center p-[4px] bg-white dark:bg-gray-900 rounded-full `}
                        >
                            {usuario.urlAvatar ? (
                                <img
                                    src={usuario.urlAvatar!}
                                    alt={"Imagem de perfil"}
                                    className={`w-full rounded-full  z-20 duration-200 ease-in-out hover:shadow-[0px_0px_12px_#E2E8F0]`}
                                />
                            ) : (
                                <Image
                                    src={profile}
                                    alt={"Imagem de perfil"}
                                    width={140}
                                    height={140}
                                    className={`w-full rounded-full z-20 duration-200 ease-in-out hover:shadow-[0px_0px_12px_#E2E8F0]`}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div
                    className={` flex flex-col gap-1 h-full justify-center items-center w-full whitespace-nowrap sm:pr-1 sm:pt-1 pr-[24px] 
            ${zoom >= 3 ? "pr-1 pt-1" : ""} `}
                >
                    <div
                        className={`flex sm:flex-col sm:justify-center w-full items-center  gap-8 sm:gap-1 ${
                            zoom >= 2
                                ? "flex-col items-center justify-center gap-[4px]"
                                : ""
                        }`}
                    >
                        <h1
                            className={` text-2xl  font-semibold  h-fit  pb-1 text-blue-950 dark:text-white text-shadow`}
                        >
                            {" "}
                            Olá , {usuario.nome} !
                        </h1>
                        {turma && (
                            <div
                                className={`flex  items-center   font-semibold gap-1 text-slate-700 dark:text-slate-50 text-shadow hover:text-shadow2 ${
                                    zoom >= 3 ? "mb-7" : "mb-2"
                                }`}
                            >
                                <BookA
                                    className={`${
                                        zoom >= 2 ? "h-6 w-6" : "sm:h-5 sm:w-5"
                                    }`}
                                />
                                <h2 className={`text-xl`}> {turma.nome}</h2>
                            </div>
                        )}
                    </div>
                    <div
                        className={` w-full flex sm:items-center sm:justify-center ${
                            zoom >= 2 ? "items-center justify-center" : ""
                        }`}
                    >
                        <div className={`flex flex-col gap-1`}>
                            <div
                                className={`flex  items-center gap-1 text-gray-300 dark:text-slate-50`}
                            >
                                <GraduationCap
                                    className={`${
                                        zoom >= 2 ? "h-6 w-6" : "sm:h-5 sm:w-5"
                                    }`}
                                />
                                <h2 className={`text-base sm:text-sm `}>
                                    {" "}
                                    {capitalizeFirstLetter(
                                        usuario.papel.toLowerCase()
                                    )}
                                </h2>
                            </div>
                            <div
                                className={`flex items-center gap-1 text-gray-300 dark:text-slate-50`}
                            >
                                <School
                                    className={`${
                                        zoom >= 2 ? "h-6 w-6" : "sm:h-5 sm:w-5"
                                    }`}
                                />
                                <h2
                                    className={` pt-[2px]  text-base sm:text-sm sm:pt-0 leading-none h-fit`}
                                >
                                    {" "}
                                    {capitalizeFirstLetter(
                                        usuario.escola!.nome
                                    )}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={` rounded  bg-gray-100  dark:bg-gray-500 sm:w-full sm:h-[1px] sm:mt-[20px] ${
                    zoom >= 2 ? "w-full h-[0.1rem] my-4" : " w-[0.1rem] h-[150px]"
                }`}
            />
            <div
                className={` w-full flex sm:mt-5  items-center justify-end sm:justify-center h-full  gap-3 px-4 ${
                    zoom >= 2 ? "justify-center " : "justify-end "
                } `}
            >
                {usuario.papel == "ALUNO" && (
                    <>
                        <h2
                            className={`font-semibold text-2xl sm:text-xl text-blue-950 text-shadow dark:text-slate-50`}
                        >
                            {" "}
                            Seu Ranking:{" "}
                        </h2>
                        <EloCard lessons={usuario.atividadesAluno!} />
                    </>
                )}
            </div>
        </article>
    );
}
