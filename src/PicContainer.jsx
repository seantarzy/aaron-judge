import React from 'react';
import JudgeWithMom from "./assets/judge-and-mom.png" ;
import JudgeFielding from "./assets/judge-fielding.png" ;
import JudgeHr from "./assets/judge-hr.png" ;
import JudgeTrot from "./assets/judge-trot.png" ;
import PicCard from './PicCard';
function PicContainer(props) {
    console.log("container")
    let images = [
      {
        img: JudgeFielding,
        text: "gold glove",
        link: "https://www.youtube.com/watch?v=mSMFfAymnxQ",
      },
      {
        img: JudgeHr,
        text: "AL home run leader",
        link: "https://www.npr.org/2022/10/04/1125991553/aaron-judge-62-home-runs-record",
      },
      {
        img: JudgeWithMom,
        text: "Family Man",
        link: "https://fansided.com/2022/10/05/aaron-judge-mom-watching-62/",
      },
    ];
    return (
        <div className='pic-container'>
            {images.map((image,idx)=>{
             return  <PicCard img={image.img} text={image.text} link={image.link} key={idx}/>
            })}
            
        </div>
    );
}

export default PicContainer;