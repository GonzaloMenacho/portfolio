import { useState } from "react";
import "./works.scss"

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: "./assets/downarrow.png",
      title: "Education",
      desc:
        "Fgcu dummy text Fgcu dummy text Fgcu dummy text Fgcu dummy text Fgcu dummy text Fgcu dummy text",
      img:
        "screen.png"
    },
    {
      id: "2",
      icon: "./assets/placeholder.png",
      title: "Experience",
      desc:
        "Working dummy text Fgcu dummy text Fgcu dummy text Fgcu dummy text Fgcu dummy text Fgcu dummy text",
      img:
        "screen.png"
    },
    {
      id: "3",
      icon: "./assets/down.gif",
      title: "Indeed",
      desc:
        "Indeed dummy text Fgcu dummy text Fgcu dummy text Fgcu dummy text Fgcu dummy text Fgcu dummy text",
      img:
        "screen.png"
    },
  ];

  const handleClick = (way)=> {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 :2) :
    setCurrentSlide(currentSlide<data.length - 1 ? currentSlide + 1: 0);
  }
  return <div className="works" id="works">
    <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
      {data.map((d) => (
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>
                  {d.desc}
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src="assets/intro image.jpg" alt="" />
            </div>
          </div>
          
        </div>))}
    </div>
    <img src="assets/downarrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")} />
    <img src="assets/downarrow.png" className="arrow right" alt="" onClick={()=>handleClick()} />
  </div>

}
