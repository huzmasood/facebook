import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { PersonImages } from "../../Images";
import "./topbar.css";

export default function Topbar({ navigation }) {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Social App</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friends, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink" onClick={() => navigation("home")}>
            Homepage
          </span>
          <span className="topbarLink" onClick={() => navigation("profile")}>
            Timeline
          </span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img alt="" src={PersonImages.person1} className="topbarImg" />
      </div>
    </div>
  );
}
