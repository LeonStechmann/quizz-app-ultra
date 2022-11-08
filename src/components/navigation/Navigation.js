import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Navigation.css";

function Navigation({ page, setPage }) {
  return (
    <footer>
      <nav className="nav">
        <ul className="nav__list">
          <li
            className={page === "home" ? "nav__li nav__li--current" : "nav__li"}
          >
            <FontAwesomeIcon icon={faHouse} onClick={() => setPage("home")} />
          </li>
          <li
            className={
              page === "create" ? "nav__li nav__li--current" : "nav__li"
            }
          >
            <FontAwesomeIcon icon={faPlus} onClick={() => setPage("create")} />
          </li>
          <li
            className={
              page === "bookmark" ? "nav__li nav__li--current" : "nav__li"
            }
          >
            <FontAwesomeIcon
              icon={faBookmark}
              onClick={() => setPage("bookmark")}
            />
          </li>
          <li
            className={
              page === "profile" ? "nav__li nav__li--current" : "nav__li"
            }
          >
            <FontAwesomeIcon icon={faUser} onClick={() => setPage("profile")} />
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Navigation;
