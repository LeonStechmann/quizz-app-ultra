import Cards from "../../pages/cards/Cards";
import Profile from "../../pages/profile/Profile";
import Create from "../../pages/create/Create";
import Bookmark from "../../pages/bookmark/Bookmark";

export default function Main({ page, cards }) {
  if (page === "home") {
    return (
      <main className="app__main">
        <Cards cards={cards} />
      </main>
    );
  }
  if (page === "profile") {
    return (
      <main className="app__main">
        <Profile />
      </main>
    );
  }
  if (page === "create") {
    return (
      <main className="app__main">
        <Create />
      </main>
    );
  }
  if (page === "bookmark") {
    <main className="app__main">
      <Bookmark />
    </main>;
  }
}
