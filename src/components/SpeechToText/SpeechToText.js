import { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './SpeechToText.css';

export default function SpeechToText() {  
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    finalTranscript,
    interimTranscript
  } = useSpeechRecognition();

  const listenContinuously = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: 'en-GB'
    });
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition.</span>;
  }

  return (
    <div className='speech-container'>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={listenContinuously}>listen</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <h3>your speech</h3>
      <p>{transcript}</p>
    </div>
  );
}
