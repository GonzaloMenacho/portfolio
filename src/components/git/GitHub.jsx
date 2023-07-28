import "./github.scss"

export default function GitHub() {

  const data = [
    {
      id: 1,
      name: "C# Desktop App",
      icon: "assets/git.png",
      desc:
        "I deployed Windows Forms in the Microsoft .NET Framework to develop a robust hardware retail management system and incorporated database integration, user authentication, and a user-friendly graphical interface. I tailored role-specific features to enhance system functionality and user experience.",
      img:
        "assets/door.jpg",
    },
    {
      id: 2,
      name: "Full-Stack Web App",
      icon: "assets/git.png",
      desc:
        "I collaborated in a team to develop a searchable movie review website, utilizing SCRUM methodologies. I engineered the application's API, leveraging ASP.NET Core for backend development and React.JS for frontend operations. We implemented Elasticsearch for data storage, facilitating rapid and complex search responses.",
        
      img:
        "assets/downarrow.png",

      featured: true,

    },
    {
      id: 3,
      name: "Python Discord Bot",
      icon: "assets/git.png",
      desc:
        "My team engineered a multi-functional Discord bot in Python, with a focus on entertainment, social engagement, and chat moderation. We incorporated a suite of mini-games and an SQLite database for server statistics, improving user interaction and data management. We enabled connectivity with multiple APIs for seamless interaction with social media platforms.",
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
