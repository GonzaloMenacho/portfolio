import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import { useEffect, useState } from "react"
import {
  cSharpPortfolio, assemblyPortfolio, webPortfolio
} from "../../data";

export default function Portfolio() {

  const [selected, setSelected] = useState("cSharp");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "web",
      title: "C# Desktop App",
    },
    {
      id: "cSharp",
      title: "Full-Stack Web App",
    },
    {
      id: "python",
      title: "Python Discord Bot",
    }
  ];

  useEffect(() => {

    switch (selected) {
      case "cSharp": setData(cSharpPortfolio);
        break;
      case "web": setData(assemblyPortfolio);
        break;
      case "python": setData(webPortfolio);
        break;
      default:
        setData(cSharpPortfolio);
    }

  }, [selected])

  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      <ul>
        {list.map(item => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id} />
        ))}
      </ul>
      <div className="container">
        {data.map(d => (
          <div className="item">
            <img 
            src = {d.img}
            alt="" 
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
