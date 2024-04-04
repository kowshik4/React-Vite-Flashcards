import React, { useState } from 'react';
import './App.css';

function App() {
  const [cards, setCards] = useState([
    {question: 'Question 1', answer: 'Answer 1'},
    {question: 'Question 2', answer: 'Answer 2'},
    // Add more cards as needed
  ]);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const nextCard = () => {
    setCurrentCardIndex(Math.floor(Math.random() * cards.length));
    setIsFlipped(false);
  }

  return (
    <>
    <h1>Card Set Title</h1>
    <p>Short description. Total number of cards: {cards.length}</p>
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {cards[currentCardIndex].question}
        </div>
        <div className="flip-card-back">
          {cards[currentCardIndex].answer}
        </div>
      </div>
    </div>

    <button onClick={nextCard}>Next</button>
    </>
  );
}

export default App;