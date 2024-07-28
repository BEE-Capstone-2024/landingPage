import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <a href="/">
        <img src="/src/assets/logo.svg" alt="logo" id="navSvgSmall" />
        <img src="/src/assets/largeLogo.svg" alt="logo" id="navSvgLarge" />
      </a>

      <ul className="navItems">
        <div className="navGroup">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <a
              id="dw"
              href="/src/assets/GreenCircle_Project Proposal.pdf"
              download="Proposal.pdf"
              className="desktopDownLoad"
            >
              Download Proposal
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
}
