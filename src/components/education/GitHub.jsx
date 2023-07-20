import "./github.scss"

export default function GitHub() {

  const data = [
    {
      id: 1,
      name: "Street Light Simulator",
      icon: "assets/git.png",
      desc:
        "ASMASMASMASMASMASMASMASMASMASMASMASM ",
      img:
        "assets/door.jpg",
    },
    {
      id: 2,
      name: "PC Hardware Retailer",
      icon: "assets/git.png",
      desc:
        "CSharpCSharpCSharpCSharpCSharpCSharp",
      img:
        "assets/downarrow.png",

      featured: true,

    },
    {
      id: 3,
      name: "Web Portfolio",
      icon: "assets/git.png",
      desc:
        "webbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb ",
      img:
        "assets/screen.png"
    },
  ];
  return (
    <div className="github" id="github">
      <h1>GitHub</h1>
      <div className="container">
        {data.map(d => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/downarrow.png" className="left" alt="" />
              <img src={d.img} className="app" alt="" />
              <img src={d.icon} className="right" alt="" />
            </div>
            <div className="center">

              <h3>{d.name}</h3>
            </div>
            <div className="bottom">
              {d.desc}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
