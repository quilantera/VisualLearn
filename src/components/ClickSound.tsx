import React, { useRef } from 'react';

const ClickSound = () => {
    const clickSoundRef = useRef<HTMLAudioElement>(null);

  const playClickSound = () => {
    if (clickSoundRef.current) {
      clickSoundRef.current.play();
    }
  };

  return (
    <audio ref={clickSoundRef} src="onClick.mp3" preload="auto" />
  );
};

export default ClickSound;
