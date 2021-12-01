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
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);

  // Shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  // Handle a choice
  const handleChoice = (card) => {
    firstChoice ? setSecondChoice(card) : setFirstChoice(card);
  };

  return (
    <div>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
