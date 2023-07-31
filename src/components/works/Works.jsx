import { useState } from "react";
import "./works.scss"

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      title: "IT & Data Coordinator",
      location:"New Horizons of Southwest Florida",
      desc:
        "I directed database development initiatives, optimized performance parameters, and ensured the confidentiality, accessibility, and usability of critical information for designated personnel. \n Gathered requirements from stakeholders, then led and executed a comprehensive redesign of the company's website.\n Elevated organizational competency through the execution of staff training programs in cybersecurity and information security awareness.\n Conceived and deployed strategic policies and procedures that minimized the organization's cyber risk footprint and enhancing operational efficiency.",
      img:
        "./assets/nh.png"
    },
    {
      id: "2",
      title: "Software Engineer",
      location:"CallMiner",
      desc:
        "For my capstone project, I collaborated in a team to develop a searchable movie review website, utilizing SCRUM methodologies.\nEngineered the application's API, leveraging ASP.NET Core for backend development and React.JS for frontend operations.\nImplemented Elasticsearch for data storage, facilitating rapid and complex search responses.",
      img:
        "./assets/CallMiner.jfif"
    },
    {
      id: "3",
      title: "Bachelor of Science in Software Engineering",
      location:"Florida Gulf Coast University",
      desc:
        "GPA: 3.87\nInstitutional Honors: Magna Cum Laude\nDean's List\n Relevant Coursework:\n Object-Oriented Programming | Software Security | Data Structures and Algorithms | Data Engineering | Operating Systems | Digital Systems and Architecture | Software Specifications | Computer & IoT Networks | Software Testing",
      img:
        "./assets/fgcu.png"
    },
  ];

  const handleClick = (way)=> {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 :2) :
    setCurrentSlide(currentSlide<data.length - 1 ? currentSlide + 1: 0);
  }
  return (
    
    <div className="works" id="works">
      <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  
                  <h1>{d.title}</h1>
                  <h2>{d.location}</h2>
                  <p dangerouslySetInnerHTML={{ __html: d.desc.replace(/\n/g, '<br /><br />').replace(/\|/g, '<br />') }} />
                </div>
              </div>
              <div className="right">
              <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src="assets/downarrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")} />
      <img src="assets/downarrow.png" className="arrow right" alt="" onClick={()=>handleClick()} />
    </div>
  );
}
