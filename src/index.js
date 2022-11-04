import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SpeechProvider } from '@speechly/react-client';
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition from 'react-speech-recognition';

const root = ReactDOM.createRoot(document.getElementById('root'));

const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(process.env.REACT_APP_SPEECHLY_API);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

root.render(
  <React.StrictMode>
    <SpeechProvider appId={process.env.REACT_APP_SPEECHLY_API}>
      <App />
    </SpeechProvider>
  </React.StrictMode>
);

reportWebVitals();
