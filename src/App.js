import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import SpeechToText from './components/SpeechToText/SpeechToText';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <SpeechToText />
      <Footer />
    </div>
  );
}

export default App;
