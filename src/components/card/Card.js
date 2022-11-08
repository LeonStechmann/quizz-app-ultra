import "./Card.css";
import { useState } from "react";

function Card({ cards }) {
  const [showAnswer, setShowAnswer] = useState(false);
  // showAnswer mit ! , damit der boolean geswitched wird.

  const handleToggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <article className="card">
      <section className="card__box">
        <h2 className="card__title">Quizz-Karte</h2>
        <p className="card__question">{cards.question}</p>
        <p className={showAnswer ? "card__answer" : "card__answer--hide"}>
          {cards.answer}
        </p>
        <button className="card__button" onClick={handleToggleAnswer}>
          {!showAnswer ? "Show Answer" : "Hide answer"}
        </button>
      </section>
    </article>
  );
}

export default Card;
