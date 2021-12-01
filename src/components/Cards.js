import { useState } from "react";
import SingleCard from "./SingleCard";

const cardImages = [
  { src: "/img/card1.jpg" },
  { src: "/img/card2.jpg" },
  { src: "/img/card3.jpg" },
  { src: "/img/card4.jpg" },
  { src: "/img/card5.jpg" },
  { src: "/img/card6.jpg" },
];

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // Shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);

  return (
    <div>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
