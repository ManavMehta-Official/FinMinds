// components/TextToSpeech.js
import React, { useState, useRef, useEffect } from 'react';
import { Progress } from "@/components/ui/progress";
import { ResetIcon, PlayIcon, StopIcon } from '@radix-ui/react-icons';

const TextToSpeech = ({ textRef }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const speechRef = useRef(null);
  const fullText = useRef('');

  useEffect(() => {
    const textContent = textRef.current.innerText;
    fullText.current = textContent; // Store the full text for reading
  }, [textRef]);

  const handleSpeech = () => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.pause();
        setIsPaused(true);
        setIsSpeaking(false);
      } else {
        startSpeaking(fullText.current);
      }
    } else {
      alert('Text-to-speech is not supported in this browser.');
    }
  };

  const startSpeaking = (text) => {
    speechRef.current = new SpeechSynthesisUtterance(text);

    speechRef.current.onend = handleEnd;
    speechRef.current.onboundary = (event) => {
      // Update progress based on the current character index
      setProgress((event.charIndex / text.length) * 100);
    };

    window.speechSynthesis.speak(speechRef.current);
    setIsSpeaking(true);
    setIsPaused(false);
  };

  const handleEnd = () => {
    setIsSpeaking(false);
    setIsPaused(false);
    setProgress(0);
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
    setProgress(0);
  };

  const handleResume = () => {
    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      setIsSpeaking(true);
    }
  };

  return (
    <div className='bg-slate-200 rounded-full px-8 py-3 flex flex-row justify-center items-center gap-5 align-middle mb-10'>
      <button onClick={handleSpeech}>
        {isSpeaking ? 
            <div className='bg-black p-2 rounded-full'>
                <StopIcon className='text-white bg-black rounded-full' /> 
            </div>
        :
            <div className='bg-black p-2 rounded-full'>
                <PlayIcon className='text-white bg-black rounded-full' /> 
            </div>
        }
      </button>
      <button onClick={handleStop} disabled={!isSpeaking && !isPaused}>
        <div className='bg-black p-2 rounded-full'>
            <ResetIcon className='text-white bg-black rounded-full' /> 
        </div>
      </button>
      <button onClick={handleResume} disabled={!isPaused}>
        <div className='bg-black px-4 py-1 rounded-full text-white text-sm'>
            Resume
        </div>
      </button>
      <Progress value={progress} />
    </div>
  );
};

export default TextToSpeech;
