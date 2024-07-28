import PropTypes from "prop-types";
export default function CrewCard({ member }) {
  return (
    <div className="crewCard">
      <div className="crewInfoContainer">
        <div className="picInfo">
          <img className="memberPic" src={member.img} alt={member.name} />
          <div className="crewInfo">
            <p className="crewName">{member.name}</p>
            <p className="crewRole">{member.role}</p>
            <div className="links">
              <a
                href={member.linkdin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/src/assets/linkdin.svg" />
              </a>
              <a href={member.site} target="_blank" rel="noopener noreferrer">
                {member.type === "designer" ? (
                  <img src="/src/assets/suitcase.svg" />
                ) : (
                  <img src="/src/assets/github 2.svg" />
                )}
              </a>
            </div>
          </div>
        </div>

        <div className="crewDescription">
          <p>{member.description}</p>
        </div>
      </div>
    </div>
  );
}
CrewCard.propTypes = {
  member: PropTypes.shape({
    img: PropTypes.string, // Assuming img is optional. If it's required, add .isRequired
    name: PropTypes.string.isRequired,
    role: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string.isRequired,
    linkdin: PropTypes.string.isRequired,
    site: PropTypes.string.isRequired,
  }).isRequired,
};
