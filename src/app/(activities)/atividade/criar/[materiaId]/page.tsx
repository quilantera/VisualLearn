"use client";
import { useSession } from "next-auth/react"
import { NavAtividades } from "@/components/NavAtividades";
import { useRef, useState } from "react";
import { AtividadeProfessor } from "@/components/AtividadeProfessor";
import { PainelAtividades } from "@/components/PainelAtividades";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { storage } from "@/utils/firebaseConfig";
import { Popup } from "@/components/Popup"; 
import axios from "axios";
export interface Atividade {
    nome: string;
    questoes: Questoes[];
}
export interface Questoes {
    pergunta: string;
    texto?: string;
    urlImage?: string;
    descricaoImagem?: string;
    urlVideo?: string;
    respostas: string[];
    respostaCorreta: number;
    // Campo opcional para URL da imagem
}


export default function CriarAtividade({
    params,
}: {
    params: { materiaId: string };
}) {
    const [isImageOpen, setIsImageOpen] = useState<boolean>(false);
    const [isTextOpen, setIsTextOpen] = useState<boolean>(false);
    const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
    const [popupType, setPopupType] = useState({ message:"", type:""});
    const { data: session } = useSession();
    
    const perguntaRef = useRef<HTMLDivElement>(null);
    const handleEnviarAtividade = async () =>{
        setPopupType({message:"Enviando Atividade", type:"loading"});
        console.log(atividade);
        try {
            //https://blind-study.vercel.app/api/atividades/create
            const response = await axios.post(`https://blind-study.vercel.app/api/atividades/create`, {
                idUsuario: session!.id,
                idDisciplina: params.materiaId,
                atividade: atividade ,
              } 
            );
        
            console.log(response.data);
            setPopupType({message:"Enviado Com sucesso!", type:"success"});
          } catch (erro) {
            console.error('Erro na requisição:', erro);
            setPopupType({message:"Erro ao enviar atividade!", type:"error"});
          }
    }
    const handleImageClick = () => {
        setIsImageOpen(!isImageOpen);
        if(!isImageOpen) {
            setNovaPergunta({ ...novaPergunta, urlImage: "", descricaoImagem:""})
        }
        // Lógica adicional para lidar com a abertura/fechamento da seção de imagem
      };
    
      const handleTextClick = () => {
        setIsTextOpen(!isTextOpen);
        if(!isTextOpen){
            setNovaPergunta({ ...novaPergunta, texto: "" });
        }
        // Lógica adicional para lidar com a abertura/fechamento da seção de texto
      };
    
      const handleVideoClick = () => {
        setIsVideoOpen(!isVideoOpen);
        if(!isVideoOpen) {
        setNovaPergunta({ ...novaPergunta, urlVideo:""});
        }
        // Lógica adicional para lidar com a abertura/fechamento da seção de vídeo
      };

      const verificarPerguntaPreenchida = (pergunta: Questoes) => {
        const temTexto = pergunta.texto?.trim() !== '' && pergunta.texto !== undefined;
        const temImagem = pergunta.urlImage?.trim() !== '' && pergunta.urlImage !== undefined;
        const temVideo = pergunta.urlVideo?.trim() !== '' && pergunta.urlVideo !== undefined;
        if(temTexto){
            setIsTextOpen(true);
        }
        if(temImagem){
            setIsImageOpen(true);
        }
        if(temVideo){
            setIsVideoOpen(true);
        }
      };
    const [atividade, setAtividade] = useState<Atividade>({
        nome: "",
        questoes: [],
    });
    const [fotoProvisoria, setFotoProvisoria] = useState<File>();
    const [index, setIndex] = useState<number>(0);
    const [navegacaoAberta, setNavegacaoAberta] = useState(true);

    const handleFotoProvisoria = async (file: File) =>{
        if(!file){
            return ;
        }
        await setFotoProvisoria(file);
        return URL.createObjectURL(file!)
    }
    const toggleNavegacao = () => {
        setNavegacaoAberta(!navegacaoAberta);
    };
    const [novaPergunta, setNovaPergunta] = useState<Questoes>({
        pergunta: "",
        texto: "",
        urlImage: "",
        descricaoImagem: "",
        urlVideo: "",
        respostas: [],
        respostaCorreta: 0,
    });
    const  handleSelecionarAtividade = async (index: number) => {
        setPopupType({message:"",type:""});
        
        const atividadeSelecionada = atividade.questoes[index];
        setIndex(index);
        atividadeSelecionada.urlImage  ? setIsImageOpen(true) : setIsImageOpen(false); 
        atividadeSelecionada.urlVideo ?setIsVideoOpen(true):setIsVideoOpen(false);
        atividadeSelecionada.texto ? setIsTextOpen(true):  setIsTextOpen(false);
    
        setFotoProvisoria(undefined);
        await setNovaPergunta(atividadeSelecionada);
        verificarPerguntaPreenchida(atividadeSelecionada);
        perguntaRef.current?.focus();
    };

    const adicionarAlternativa = () => {
        let novaResposta = novaPergunta.respostas;
        novaResposta.push("");
        setNovaPergunta({ ...novaPergunta, respostas: novaResposta });
    };

    const removerAlternativa = (index: number) => {
        const novasRespostas = novaPergunta.respostas;
        novasRespostas.splice(index, 1);
        setNovaPergunta({ ...novaPergunta, respostas: novasRespostas });
    };

    const handleNomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAtividade({ ...atividade, nome: event.target.value });
    };

    const handlePerguntaChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setNovaPergunta({ ...novaPergunta, pergunta: event.target.value });
    };

    const handleTextoChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setNovaPergunta({ ...novaPergunta, texto: event.target.value });
    };

    const handleUrlImageChange = async (imageURL: string) => {
       await setNovaPergunta({ ...novaPergunta, urlImage: imageURL});
    };

    const handleDescricaoImagemChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setNovaPergunta({
            ...novaPergunta,
            descricaoImagem: event.target.value,
        });
    };

    const handleUrlVideoChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setNovaPergunta({ ...novaPergunta, urlVideo: event.target.value });
    };

    const handleRespostasChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        const novasRespostas = [...novaPergunta.respostas];
        novasRespostas[index] = event.target.value;
        setNovaPergunta({ ...novaPergunta, respostas: novasRespostas });
    };
    const handleRespostaCorreta = (index: number) => {
        setNovaPergunta({ ...novaPergunta, respostaCorreta: index });
    };

    const handleSalvarPergunta = async () => {
        try {
            setPopupType({message:"salvando",type:"loading"})
            if (fotoProvisoria) {
                await uploadImage();
                console.log(novaPergunta)
                setFotoProvisoria(undefined);
            }
    
            if (index === atividade.questoes.length - 1 || atividade.questoes.length === 0) {
                setAtividade({
                    ...atividade,
                    questoes: [...atividade.questoes, novaPergunta],
                });
    
                setIsImageOpen(false);
                setIsVideoOpen(false);
                setIsTextOpen(false);
    
                setNovaPergunta({
                    pergunta: "",
                    texto: "",
                    urlImage: "",
                    descricaoImagem: "",
                    urlVideo: "",
                    respostas: [],
                    respostaCorreta: 0,
                });
                await setIndex(atividade.questoes.length);
                perguntaRef.current?.focus();
            } else {
                const novasQuestoes = [...atividade.questoes];
                novasQuestoes[index] = novaPergunta;
    
                setAtividade({
                    ...atividade,
                    questoes: novasQuestoes,
                });
    
                setIndex(atividade.questoes.length - 1);
    
                setNovaPergunta({
                    pergunta: "",
                    texto: "",
                    urlImage: "",
                    descricaoImagem: "",
                    urlVideo: "",
                    respostas: [],
                    respostaCorreta: 0,
                });
               
                handleSelecionarAtividade(atividade.questoes.length - 1);
                
            }
        } catch (error) {
            console.error('Error handling question:', error);
            // Handle error as needed
        }
    };
    
    const handleRemoverPergunta = (indexToRemove: number) => {
        if (atividade.questoes.length > 0) {
            const novasQuestoes = atividade.questoes.filter(
                (_, index) => index !== indexToRemove
            );

            setAtividade({
                ...atividade,
                questoes: novasQuestoes,
            });
            setIndex(index > 0 ? index - 1 : 0);
            perguntaRef.current?.focus();
        }
    };
    async function uploadImage(): Promise<void> {
        return new Promise((resolve, reject)  => {
            try {
                if (fotoProvisoria) {
                    const nomeFoto = fotoProvisoria.name;
                    const storageRef = ref(storage, `images/${nomeFoto}`);
                    const uploadTask = uploadBytesResumable(storageRef, fotoProvisoria);
                    
                    uploadTask.on(
                        'state_changed',
                        (snapshot) => {
                            // Handle progress
                            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                            console.log('Upload is ' + progress + '% done');
                        },
                        (error) => {
                            // Handle error
                            reject(error);
                        },
                        async () => {
                            // Handle successful upload
                            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                            console.log('File available at', downloadURL);
                             await handleUrlImageChange(downloadURL);
                            resolve(); // Resolve the promise when upload is complete
                        }
                    );
                } else {
                    reject(new Error('No image to upload'));
                }
            } catch (error) {
                // Handle exceptions
                reject(error);
            }
        });
    }
    
      
    return (
        <section className=" w-full flex min-h-screen ">
            {popupType.type !== ""  && <Popup message={popupType.message} state={popupType.type} onClose={() => setPopupType({message:"",type:""})}/>}
            <NavAtividades
                atividade={atividade}
                index={index}
                navegacaoAberta={navegacaoAberta}
                toggleNavegacao={toggleNavegacao}
                handleSelecionarAtividade={handleSelecionarAtividade}
                handleSalvarPergunta={handleSalvarPergunta}
                handleEnviarAtividade={handleEnviarAtividade}
            />
            <AtividadeProfessor.Root navegacaoAberta={navegacaoAberta}>
                <AtividadeProfessor.Header 
                    useRef={perguntaRef} 
                    nomeAtividade={atividade.nome}
                    totalAtividade={atividade.questoes?.length}
                    atividadeAtual={index}
                    handleNomeChange={handleNomeChange}
                />
                <AtividadeProfessor.Content>
                    <AtividadeProfessor.Pergunta
                        tituloPergunta={novaPergunta.pergunta}
                        handlePerguntaChange={handlePerguntaChange}
                    />
                    {isTextOpen && (
                        <AtividadeProfessor.Texto
                            textoPergunta={novaPergunta.texto}
                            handleTextoChange={handleTextoChange}
                        />
                    )}
                    {isImageOpen && (
                        <AtividadeProfessor.Imagem
                            handleImageDescricao={handleDescricaoImagemChange}
                            handleFotoProvisoria ={handleFotoProvisoria}
                            imagemLink={novaPergunta?.urlImage}
                            imagemDescricao={novaPergunta?.descricaoImagem}
                        />
                    )}

                    {isVideoOpen && (
                        <AtividadeProfessor.Video
                            handleVideoChange={handleUrlVideoChange}
                            urlVideo={novaPergunta?.urlVideo}
                        />
                    )}
                    <AtividadeProfessor.Respostas
                        respostas={novaPergunta?.respostas}
                        respostaCorreta={novaPergunta?.respostaCorreta}
                        handleRespostasChange={handleRespostasChange}
                        handleRespostaCorreta={handleRespostaCorreta}
                        handleRemoverAlternativa={removerAlternativa}
                        handleAdicionarAlternativa={adicionarAlternativa}
                    />
                    <AtividadeProfessor.Footer
                        currentIndex={index}
                        handleAdicionarQuestao={handleSalvarPergunta}
                        handleRemoverQuestao={handleRemoverPergunta}
                    />
                </AtividadeProfessor.Content>
            </AtividadeProfessor.Root>
            <PainelAtividades
                isImageOpen={isImageOpen}
                isTextOpen={isTextOpen}
                isVideoOpen={isVideoOpen}
                onImageClick={handleImageClick}
                onTextClick={handleTextClick}
                onVideoClick={handleVideoClick}
            />

        </section>
    );
}
