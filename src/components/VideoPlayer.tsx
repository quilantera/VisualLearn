'use client'
import { PauseIcon, PlayIcon, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
  urlVideo: string;
}

export function VideoPlayer({ urlVideo }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [duration, setDuration] = useState<number>(0);
  const playerRef = useRef<ReactPlayer | null>(null);

  const togglePlay = () => {
    setIsPlaying(prevIsPlaying => !prevIsPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = parseFloat(e.target.value);
    if (playerRef.current) {
     
      setPlayedSeconds(seekTime);
      playerRef.current.seekTo(seekTime)
    }
  };

  const handleBackward = () => {
    if (playerRef.current) {
      const newTime = Math.max(playedSeconds - 5, 0);
      setPlayedSeconds(newTime);
      playerRef.current.seekTo(newTime);
    }
  };

  const handleForward = () => {
    if (playerRef.current) {
      const newTime = Math.min(playedSeconds + 5, playerRef.current.getDuration());
      setPlayedSeconds(newTime);
      playerRef.current.seekTo(newTime);
    }
  };

  const handleMute = () => {
    setMuted(prevMuted => !prevMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setMuted(false);
  };
  function handleDuration (duration: number){
    setDuration(duration);
  }


  const handleProgress = (state: any) => {
    if (state.playedSeconds) {
      setPlayedSeconds(state.playedSeconds);
    }
  };

  return (
    <div className='w-full flex flex-col items-center px-4 py-6'>
        <ReactPlayer
          ref={playerRef}
          url={urlVideo}
          controls
          className="overflow-hidden shadow-lg "
          tabIndex={-1}
          width={'80%'}
          playing={isPlaying}
          muted={muted}
          volume={volume}
          height={'29rem'}
          onProgress={handleProgress}
          onDuration={handleDuration}
          config={{
            youtube: {
              playerVars: { 
                showinfo: 0, 
                controls:0,
                showRelatedVideos:0
              }
            },
            facebook: {
              appId: '12345'
            }
          }}
        />
      <div className="flex flex-col gap-1 w-full items-center">
      <div className="bg-gray-900 flex w-[80%] px-2 py-1">
         
         <span className='w-1/12 text-center text-white'> {Math.floor(playedSeconds)}s </span> 
          
          <input
            id="seekInput"
            type="range"
            min={0}
            max={duration!}
            step={1}
            value={playedSeconds}
            onChange={handleSeek}
            aria-label="Barra de Progresso"
            className="ml-2 w-10/12 "
          />
          <span className='w-1/12 text-center px-2 text-white'> {Math.floor(duration)}s </span>
        </div>
        <div className='relative w-[80%] mt-2 flex justify-center'>
            <div 
              className='flex gap-5 py-4 px-6 bg-slate-200 rounded drop-shadow-lg shadow' 
              aria-label='Controles do Vídeo'
              role='group'
              >
            <button onClick={handleBackward} aria-label='Retroceder 5 Segundos' className=" bg-green-700 hover:bg-green-900 hover:scale-105 dark:bg-gray-700 dark:border-green-700 dark:border-4 text-white shadow-md duration-300 font-bold py-2 px-4 rounded">
                <SkipBack/>
              </button>
              <button onClick={togglePlay} aria-label={isPlaying ? 'Pausar Vídeo' : 'Iniciar Vídeo'} className=" bg-sky-700 hover:bg-sky-900 hover:scale-105 dark:bg-gray-700 dark:border-sky-700 dark:border-4 text-white shadow-md duration-300 font-bold py-2 px-4 rounded">
                {isPlaying ? <PauseIcon/> : <PlayIcon/>}
              </button>
              <button onClick={handleForward}  aria-label='Avançar 5 Segundos' className=" bg-green-700 hover:bg-green-900 hover:scale-105 dark:bg-gray-700 dark:border-green-700 dark:border-4 text-white shadow-md duration-300 font-bold py-2 px-4 rounded">
                <SkipForward/>
              </button>
            </div>
            <div className="flex  absolute right-1 top-4">
            <input
                  id="volumeInput"
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={muted ? 0 : volume}
                  onChange={handleVolumeChange}
                  aria-label="Controle de Volume"
                  className="ml-2 w-20"
                  
                />
              <button onClick={handleMute} aria-label='botão ligar volume'  className="mx-2 bg-yellow-700 hover:bg-yellow-900 hover:scale-105 dark:bg-gray-700 dark:border-yellow-700 dark:border-4 text-white shadow-md duration-300  font-bold py-2 px-4 rounded">
                  {muted ? <VolumeX/> : <Volume2/>}
                </button>
                
            </div>
        </div>
        
      </div>
      
     
     
    </div>
  );
}
