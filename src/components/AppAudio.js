import React, {useEffect} from 'react';
import knockSound from '../assets/Call.mp3';

const AppAudio = () => {
    const audio = new Audio(knockSound)
    const audioEndListener = () => {
        audio.currentTime = 0;
        audio.play();
    };
    audio.addEventListener('ended', audioEndListener, false);

    useEffect(() => {
        audio.play()
       /* return () => {
            audio.pause();
            audio.currentTime = 0;
            audio.removeEventListener('ended', audioEndListener);
        }*/
    })
    return (
        <div>
            Sonando llamada
        </div>
    );
};

export default AppAudio;