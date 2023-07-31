import "./github.scss";

export default function GitHub() {
  const data = [
    {
      id: 1,
      name: "C# Desktop App",
      desc: "I deployed Windows Forms in the Microsoft .NET Framework to develop a robust hardware retail management system and incorporated database integration, user authentication, and a user-friendly graphical interface. I tailored role-specific features to enhance system functionality and user experience.",
      img: "assets/desktop.png",
      repo: "https://github.com/GonzaloMenacho/RetailManagementSystem",
    },
    {
      id: 2,
      name: "Full-Stack Web App",
      desc: "I collaborated in a team to develop a searchable movie review website, utilizing SCRUM methodologies. I engineered the application's API, leveraging ASP.NET Core for backend development and React.JS for frontend operations. We implemented Elasticsearch for data storage, facilitating rapid and complex search responses.",

      img: "assets/web.png",

      featured: true,
      repo: "https://github.com/GonzaloMenacho/MovieReviewWebsite",
    },
    {
      id: 3,
      name: "Python Discord Bot",
      desc: "My team engineered a Discord bot in Python, with a focus on entertainment, social engagement, and chat moderation. We incorporated a suite of mini-games and an SQLite database for server statistics. We enabled connectivity with multiple APIs for seamless interaction with social media platforms.",
      img: "assets/discord.png",
      repo: "https://github.com/GonzaloMenacho/GonziBot",
    },
  ];
  return (
    <div className="github" id="github">
      <div className="header">
        <h1>GitHub</h1>
        <a href="https://github.com/GonzaloMenacho" target="_blank">
        <img src="assets/git.png" alt="git" className="git"  /></a>
      </div>
      <div className="container">
        {data.map((d) => (
          <a href={d.repo} target="_blank" rel="noopener noreferrer">
            <div className={d.featured ? "card featured" : "card"}>
              <div className="top">
                <img src={d.img} className="app" alt="" />
                <img src={d.icon} className="right" alt="" />
              </div>
              <div className="center">
                <h3>{d.name}</h3>
              </div>
              <div className="bottom">{d.desc}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
