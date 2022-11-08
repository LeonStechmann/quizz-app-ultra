import Card from "../../components/card/Card";

export default function Cards({ cards }) {
  return (
    <div>
      {cards.map(({ id, ...cards }) => {
        return <Card key={id} cards={cards} />;
      })}
    </div>
  );
}
