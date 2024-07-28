export default function Home() {
  return (
    <div className="homePageContainer">
      <img
        className="homeImage"
        src="/src/assets/images/homePageImage.png"
        alt="group photo"
      />
      <div className="contentContainer">
        <div className="sectionOne">
          <h1>Making A Difference Is One Tap Away</h1>
          <p className="description">
            Join cleanups, count waste and see your impact instantly with
            GreenCircle!
          </p>
          <div className="featureGroups">
            <img
              className="featureImages"
              id="feature1"
              src="/src/assets/images/feature1.png"
            />
            <img
              className="featureImages"
              id="feature2"
              src="/src/assets/images/feature3.png"
            />
            <img
              className="featureImages"
              id="feature3"
              src="/src/assets/images/feature2.png"
            />
          </div>
        </div>
        <div className="sectionTwo">
          <h3 id="lineSecTwo">
            What You Can Do With <span>GreenCircle</span>
          </h3>
          <div className="cards">
            <div className="card">
              <div className="featureIcon">
                <img src="/src/assets/map.svg" alt="map icon" />
              </div>
              <div className="featureDescription">
                <h4>Find Cleanups Nearby</h4>
                <p>Discover cleanup events in your area</p>
              </div>
            </div>
            <div className="card">
              <div className="featureIcon">
                <img src="/src/assets/tap.svg" alt="counter icon" />
              </div>
              <div className="featureDescription">
                <h4>Use Waste Counter</h4>
                <p>Tap to count your collected waste</p>
              </div>
            </div>
            <div className="card">
              <div className="featureIcon">
                <img src="/src/assets/achievement.svg" alt="trophy icon" />
              </div>
              <div className="featureDescription">
                <h4>View Achievements</h4>
                <p>Track your overall impact in real-time</p>
              </div>
            </div>
            <div className="card">
              <div className="featureIcon">
                <img src="/src/assets/book.svg" alt="tips icon" />
              </div>
              <div className="featureDescription">
                <h4>Stay Informed & Aware</h4>
                <p>Learn about our planet and your role</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sectionThree">
          <div className="sectionThree__left">
            <img src="/src/assets/phone.svg" alt="phone image" />
          </div>
          <div className="sectionThree__right">
            <h1>Let’s Do Our Part For A Better Home</h1>
            <div className="sectionThree__right--inputCard">
              <form>
                <div className="inputField">
                  <div className="labelWrapper">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div className="inputField">
                  <div className="labelWrapper">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <button type="submit">Connect With The Team </button>
              </form>
            </div>
          </div>
          <a
            href="/src/assets/GreenCircle_Project Proposal.pdf"
            download="Proposal.pdf"
            className="smallDownLoad noneDisplay"
          >
            Download Proposal
          </a>
        </div>
      </div>
    </div>
  );
}
