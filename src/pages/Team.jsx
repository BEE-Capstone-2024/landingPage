import CrewCard from "../components/CrewCard";

export default function Team() {
  const team = [
    {
      img: "/src/assets/crews/Anthony.svg",
      name: "Anthony Okoduwa",
      role: "UX/UI Designer",
      description: `With a background in international relations and diplomacy, I am passionate about designing intuitive interfaces, researching user needs and creating more efficient designs for a better user experience.
      
  `,
      type: "designer",
      linkdin:
        "https://www.linkedin.com/in/anthony-okoduwa/?originalSubdomain=ca",
      site: "https://www.behance.net/anthonyokoduwa7",
    },
    {
      img: "/src/assets/crews/Anjali.svg",
      name: "Anjali Rajesh",
      role: "UI/UX Designer",
      description: `With my animation and graphic design background, I've spent the last 7 years crafting user-friendly interfaces and experiences for products. Today, I’m practicing AI in design and refining my UX skills.
  `,
      type: "designer",
      linkdin:
        "https://www.linkedin.com/in/anjali-rajeshh/?originalSubdomain=ca",
      site: "https://www.behance.net/anjalirajesh",
    },
    {
      img: "/src/assets/crews/Naoya.svg",
      name: "Naoya Sasaki",
      role: "Project Manager, UI/UX Designer",
      description: `Through my background in system engineering, I align design ideas with development execution. I organize processes and refine UI and UX details, while properly managing the time, project and team.
  `,
      type: "designer",
      linkdin: "https://www.linkedin.com/in/naoyasasaki/?originalSubdomain=ca",
      site: "https://www.naoyasasaki.com",
    },
    {
      img: "/src/assets/crews/Tia.svg",
      name: "Tia Le Santoi",
      role: "Lead UI/UX Designer",
      description: `I have a background in animation, digital marketing and PR. I am passionate about user-friendly, simple design with strengths in organization, leadership and communication of ideas in UI and UX projects.
  `,
      type: "designer",
      linkdin: "https://www.linkedin.com/in/tialesanto/?originalSubdomain=ca",
      site: "https://www.behance.net/tialesanto",
    },
    {
      img: "/src/assets/crews/Patricia.svg",
      name: "Patricia Clemente",
      role: "UI/UX Designer",
      description: `Passionate about graphic design, marketing, content creation and now UI/UX design, I bring people’s visions to life. I aim to create effective and efficient solutions that enhance daily experiences..
  `,
      type: "designer",
      linkdin: "https://www.linkedin.com/in/pat-clemente/?originalSubdomain=ca",
      site: "https://patclem98.wixsite.com/e-portfolio",
    },
  ];
  const devs = [
    {
      img: "/src/assets/crews/Alberth.svg",
      name: "Alberth Rodriguez",
      role: "Full Stack Developer",
      description: `Empowered by industrial engineering, finance and human resources experience, I streamline operations and craft solutions through my programming skills to drive positive change and simplify people’s lives.
    `,
      type: "devs",
      linkdin: "https://www.linkedin.com/in/alfaroso/?originalSubdomain=ca",
      site: "https://github.com/ALFAROSO",
    },
    {
      img: "/src/assets/crews/Andy.svg",
      name: "Ching-Chen, Su",
      role: "Full Stack Developer",
      description: `A former strength and conditioning coach, I’ve recently ventured into the realm of program development, focusing on the front-end aspect and gaining more knowledge on backend development.
    `,
      type: "devs",
      linkdin: "https://www.linkedin.com/in/andysu2693",
      site: "https://github.com/andysu1126",
    },
    {
      img: "/src/assets/crews/Emre.svg",
      name: "Emre Aydin",
      role: " Co-Lead Full Stack Developer",
      description: `I began my career as a programmer and transitioned to an Account Manager role. Now, I've returned to programming, eagerly delving into both back-end and front-end development for mobile applications.

    `,
      type: "devs",
      linkdin: "https://www.linkedin.com/in/eemraydin/?originalSubdomain=ca",
      site: "https://github.com/eemraydin",
    },
    {
      img: "/src/assets/crews/Masa.svg",
      name: "Masahiro Kanamaru",
      role: " Co-Lead Full Stack Developer",
      description: `Starting as a Software Engineer, I have developed 
a package software that helps design electronic devices. Driven by curiosity and helping users, I aim to solve more problems as a full-stack developer.


`,
      type: "devs",
      linkdin:
        "https://www.linkedin.com/in/masahiro-kanamaru/?originalSubdomain=ca",
      site: "https://github.com/s1120258",
    },
  ];
  return (
    <div className="teamPageContainer">
      <img
        className="homeImage"
        src="/src/assets/images/teamPageFeatureImg.png"
        alt="group photo"
      />
      <div className="shaper">
        <div className="teamContentContainer">
          <div className="teamSectionOne">
            <img src="/src/assets/seedling.svg" />
            <h2>Team Bee</h2>
            <p>
              <span>GreenCircle</span> was made possible with our talented &
              hardworking designers and developers.
            </p>
          </div>

          <div className="teamSectionThree">
            <div className="teamCards">
              <div>
                {team.map((member) => (
                  <CrewCard member={member} key={member.name} />
                ))}
              </div>
              <div>
                {devs.map((member) => (
                  <CrewCard member={member} key={member.name} />
                ))}
              </div>
            </div>

            {/* <button className="smallDownLoad">Download Proposal</button> */}
            <a
              href="/src/assets/GreenCircle_Project Proposal.pdf"
              download="Proposal.pdf"
              className="smallDownLoad noneDisplay"
            >
              Download Proposal
            </a>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
// <div className="teamPageContainer">
//   <img
//     className="homeImage"
//     src="/src/assets/images/homePageImage.png"
//     alt="group photo"
//   />
//   <div className="teamContentContainer">
//     <div className="teamSectionOne">
//       <img src="/src/assets/seedling.svg" />
//       <h2>Team Bee</h2>
//       <p>
//         <span>GreenCircle</span> was made possible with our talented &
//         hardworking designers and developers.
//       </p>
//     </div>

//     <div className="teamSectionThree">
//       <div className="teamCards">
//         <div>
//           {team.map((member) => (
//             <CrewCard member={member} key={member.name} />
//           ))}
//         </div>
//         <div>
//           {devs.map((member) => (
//             <CrewCard member={member} key={member.name} />
//           ))}
//         </div>
//       </div>

//       {/* <button className="smallDownLoad">Download Proposal</button> */}
//       <a
//         href="/src/assets/GreenCircle_Project Proposal.pdf"
//         download="Proposal.pdf"
//         className="smallDownLoad"
//       >
//         Download Proposal
//       </a>
//     </div>
//   </div>
// </div>
