import "./topbar.scss";
import { PhoneIphone, MailOutline, LinkedIn } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active ")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Gonzalo Menacho
          </a>
          <a href="tel:239-209-8367" className="link">
            <div className="itemContainer">
              <PhoneIphone className="icon" />
              <span>239-209-8367</span>
            </div>
          </a>
          <a href="mailto:menachoga@gmail.com" className="link">
            <div className="itemContainer">
              <MailOutline className="icon" />
              <span>menachoga@gmail.com</span>
            </div>
          </a>
          <a href="https://www.linkedin.com" className="link" target="_blank">
            <div className="itemContainer">
              <LinkedIn className="icon" />
              <span>LinkedIn</span>
            </div>
          </a>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
