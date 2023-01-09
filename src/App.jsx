import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import AaronSwing1 from "./assets/aaron-swing/aaron-swing-1.png";
import AaronSwing2 from "./assets/aaron-swing/aaron-swing-2.png";
import AaronSwing3 from "./assets/aaron-swing/aaron-swing-3.png";
import AaronSwing4 from "./assets/aaron-swing/aaron-swing-4.png";
import AaronSwing5 from "./assets/aaron-swing/aaron-swing-5.png";
import AaronSwing6 from "./assets/aaron-swing/aaron-swing-6.png";
import AaronSwing7 from "./assets/aaron-swing/aaron-swing-7.png";
import AaronSwing8 from "./assets/aaron-swing/aaron-swing-8.png";
import AaronSwing9 from "./assets/aaron-swing/aaron-swing-9.png";
import AaronSwing10 from "./assets/aaron-swing/aaron-swing-10.png";
import AaronSwing11 from "./assets/aaron-swing/aaron-swing-11.png";
import AaronSwing12 from "./assets/aaron-swing/aaron-swing-12.png";
import AaronSwing13 from "./assets/aaron-swing/aaron-swing-13.png";
import AaronSwing14 from "./assets/aaron-swing/aaron-swing-14.png";
import AaronSwing15 from "./assets/aaron-swing/aaron-swing-15.png";
import AaronSwing16 from "./assets/aaron-swing/aaron-swing-16.png";
import AaronSwing17 from "./assets/aaron-swing/aaron-swing-17.png";
import AaronSwing18 from "./assets/aaron-swing/aaron-swing-18.png";
import AaronSwing19 from "./assets/aaron-swing/aaron-swing-19.png";
import './App.css'
import judgeAudio from './assets/judge-audio.mp3'
import PicContainer from './PicContainer';

function App() {
  const [judgeSwing, setJudgeSwing] = useState(0);
  const [rollPictures,setRollPictures] = useState(false)
  const [audioPlayed,setAudioPlayed] = useState(false)
  let img = document.querySelector(".aaron-swing");

  const swings = [AaronSwing1,AaronSwing2,AaronSwing3,AaronSwing4,AaronSwing5,AaronSwing6,AaronSwing7,AaronSwing8,AaronSwing9,AaronSwing10,AaronSwing11,AaronSwing12,AaronSwing13,AaronSwing14,AaronSwing15,AaronSwing16,AaronSwing17,AaronSwing18,AaronSwing19]
  useEffect(() => {
    let interval
    if(judgeSwing<19){
      interval = setInterval(() => {
       setJudgeSwing(prevState => prevState + 1);
       img.src = swings[judgeSwing]
      }, 50);
    }
    else{
      clearInterval(interval);
      setRollPictures(true)
    }
      
    return () => clearInterval(interval);
  }, [judgeSwing]);



  return (
    <div className="App">
      <div className="title-container">
      <h1>Aaron Judge</h1>
      <h2>Yankee Captain</h2>
      <h3>
      Interested in this domain? Contact 
      <a href='mailto: sean@dutydomains.com'>{" "} sean@dutydomains.com</a >
      </h3>
      </div>
      <div className="background"></div>
      <div className="main">
        <audio className="judge-audio" src={judgeAudio} autoPlay={true} />
        {rollPictures ? <PicContainer /> : null}
        <img className="aaron-swing" src={AaronSwing1} alt="aaron" />
      </div>
    </div>
  );
}

export default App
