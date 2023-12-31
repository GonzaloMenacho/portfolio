import { useEffect,useRef } from "react"
import { init } from "ityped"
import "./intro.scss"

export default function Intro() {

  const textRef = useRef(); 

  useEffect(()=>{
    init(textRef.current, { 
      showCursor: true,
      backDelay: 2000,
      backSpeed: 50,
      typeSpeed: 50,
      strings: ["Software Engineer", "IT & Data Coordinator",  "Web Developer"],
     });
  },[]);
  return (
    <div className="intro" id="intro">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/Gonzalo Menacho.jpg" alt="" />
          </div>
        </div> 
        <div className="right">
          <div className="wrapper">
            <h2>Hi There! 👋 My Name Is</h2>
            <h1>Gonzalo Menacho</h1>
            <h3> I'm a <span ref={textRef}> </span></h3>
          </div>
        </div>
    </div>
  )
}
