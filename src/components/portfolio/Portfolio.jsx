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
      id: "cSharp",
      title: "C# / .NET",
    },
    {
      id: "assembly",
      title: "Assembly",
    },
    {
      id: "web",
      title: "React JS",
    }
  ];

  useEffect(() => {

    switch (selected) {
      case "cSharp": setData(cSharpPortfolio);
        break;
      case "assembly": setData(assemblyPortfolio);
        break;
      case "web": setData(webPortfolio);
        break;
      default:
        setData(cSharpPortfolio);
    }

  }, [selected])

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
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
