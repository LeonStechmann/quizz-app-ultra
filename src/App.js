import "./App.css";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Main from "./components/main/Main";
import { useState } from "react";
import { database } from "./database";

function App() {
  const [page, setPage] = useState("home");
  const [cards, setCards] = useState(database);

  return (
    <div className="App">
      <Header />
      <Main cards={cards} page={page} />
      <Navigation page={page} setPage={setPage} />
    </div>
  );
}

export default App;
