import React from "react";

const developers = [
  {
    name: "Hashim",
    role: "Software Engineer",
    price: "$60/hr",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    skills: ["MERN", "Agentic AI", "Machine Learning"],
    extra: "+4",
    description:
      "Full Stack Developer with strong experience in AI and Agentic worked with too many companies",
  },
  {
    name: "Mudasir",
    role: "AI Engineer",
    price: "$100/hr",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
    skills: ["Deep Learning", "Agentic AI", "Power BI"],
    extra: "+4",
    description:
      "3 Years experience in AI and Agentic created many handy and useful products for corprative companies",
  },
  {
    name: "Nazeer",
    role: "Data Scientist",
    price: "$150/hr",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
    skills: ["Scicit Learning", "Stats", "Data visualization"],
    extra: "+4",
    description:
      "Strong grip on Data Science giving services to the national body for years",
  },
  {
    name: "Inamullah",
    role: "Android Developer",
    price: "$200/hr",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80",
    skills: ["Maven", "Kotlin", "JetPack Compose"],
    extra: "+4",
    description:
      "2 years experience in Android Development handled lot projects and also created full flage application for many enterprise companies",
  },
];

function App() {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: Arial, Helvetica, sans-serif;
          background: #d7a8d6;
          color: #333;
        }

        .app {
          min-height: 100vh;
          background: #d7a8d6;
        }

        /* Navbar */
        .navbar {
          height: 80px;
          background: linear-gradient(
            90deg,
            #101827 0%,
            #121827 50%,
            #20154a 100%
          );
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 7.5%;
          color: white;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .logo-icon {
          font-size: 35px;
          color: #ff8b3d;
          line-height: 1;
        }

        .logo-text {
          font-family: Georgia, serif;
          font-size: 29px;
          font-weight: bold;
          color: white;
        }

        .logo-text span {
          color: #29a9e8;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          font-family: Georgia, serif;
          font-size: 16px;
          transition: 0.2s;
        }

        .nav-links a:hover {
          color: #55baff;
        }

        .get-started {
          background: linear-gradient(90deg, #35b8f0, #6573ed);
          padding: 12px 24px;
          border-radius: 25px;
          font-family: Arial, sans-serif !important;
          font-weight: bold;
        }

        /* Cards Section */
        .profiles-section {
          min-height: 620px;
          padding: 11px 8px 90px;
        }

        .cards-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .card {
          background: #fff;
          min-height: 519px;
          border-radius: 5px;
          padding: 25px 20px 0;
          position: relative;
          box-shadow: 0 8px 18px rgba(70, 40, 80, 0.12);
          text-align: center;
          overflow: hidden;
        }

        .price {
          position: absolute;
          top: 25px;
          right: 25px;
          font-size: 17px;
          font-weight: bold;
          color: #444;
        }

        .profile-image {
          width: 114px;
          height: 114px;
          object-fit: cover;
          border-radius: 50%;
          margin-top: 18px;
          border: 1px solid #eee;
        }

        .name {
          margin-top: 24px;
          font-family: Georgia, serif;
          font-size: 22px;
          font-weight: bold;
          color: #3b3b3b;
        }

        .role {
          margin-top: 6px;
          font-size: 15px;
          color: #999;
        }

        .building {
          margin-top: 4px;
          font-size: 14px;
        }

        .skills {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 19px;
        }

        .skill {
          min-height: 43px;
          padding: 8px 14px;
          border: 1px solid #d9dfe5;
          border-radius: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          color: #555;
          line-height: 13px;
          background: white;
        }

        .extra {
          width: 43px;
          height: 43px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #5a9fd7;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          font-weight: bold;
        }

        .description {
          min-height: 80px;
          margin-top: 20px;
          padding: 0 8px;
          font-size: 14px;
          line-height: 22px;
          color: #777;
        }

        .profile-button {
          margin-top: 4px;
          border-top: 1px solid #e5e5e5;
          padding-top: 17px;
          color: #555;
          font-size: 14px;
          font-weight: bold;
        }

        /* Footer */
        .footer {
          height: 155px;
          background: #0900ff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer h2 {
          font-family: Georgia, serif;
          color: #000;
          font-size: 32px;
        }

        /* Tablet */
        @media (max-width: 1100px) {
          .navbar {
            padding: 0 30px;
          }

          .cards-container {
            grid-template-columns: repeat(2, 1fr);
            padding: 0 20px;
          }

          .profiles-section {
            padding-bottom: 50px;
          }
        }

        /* Mobile */
        @media (max-width: 650px) {
          .navbar {
            height: auto;
            min-height: 75px;
            padding: 15px 20px;
            flex-direction: column;
            gap: 18px;
          }

          .logo-text {
            font-size: 25px;
          }

          .nav-links {
            gap: 15px;
            flex-wrap: wrap;
            justify-content: center;
          }

          .nav-links a {
            font-size: 13px;
          }

          .get-started {
            padding: 9px 16px;
          }

          .cards-container {
            grid-template-columns: 1fr;
            padding: 0 12px;
          }

          .profiles-section {
            padding-top: 12px;
          }

          .card {
            min-height: 500px;
          }

          .footer h2 {
            font-size: 25px;
          }
        }
      `}</style>

      <div className="app">

        {/* Navbar */}
        <header className="navbar">
          <div className="logo">
            <div className="logo-icon">⚡</div>

            <div className="logo-text">
              Tech<span>Nova</span>
            </div>
          </div>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#skills">Skills</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>

            <a href="#started" className="get-started">
              Get Started
            </a>
          </nav>
        </header>

        {/* Profiles */}
        <main className="profiles-section">
          <div className="cards-container">

            {developers.map((developer, index) => (
              <div className="card" key={index}>

                <div className="price">
                  {developer.price}
                </div>

                <img
                  src={developer.image}
                  alt={developer.name}
                  className="profile-image"
                />

                <h2 className="name">
                  {developer.name}
                </h2>

                <p className="role">
                  {developer.role}
                </p>

                <div className="building">
                  🏢
                </div>

                <div className="skills">
                  {developer.skills.map((skill, skillIndex) => (
                    <div className="skill" key={skillIndex}>
                      {skill}
                    </div>
                  ))}

                  <div className="extra">
                    {developer.extra}
                  </div>
                </div>

                <p className="description">
                  {developer.description}
                </p>

                <div className="profile-button">
                  VIEW PROFILE
                </div>

              </div>
            ))}

          </div>
        </main>

        {/* Footer */}
        <footer className="footer">
          <h2>This is footer</h2>
        </footer>

      </div>
    </>
  );
}

export default App;
