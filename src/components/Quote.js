import React, { useState } from "react";
import quotes from "../quotes";

const Quote = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(-1);
  const [previousQuoteIndex, setPreviousQuoteIndex] = useState(-1);

  const getRandomQuote = () => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    while (randomIndex === previousQuoteIndex) {
      randomIndex = Math.floor(Math.random() * quotes.length);
    }
    setPreviousQuoteIndex(randomIndex);
    setCurrentQuoteIndex(randomIndex);
  };

  const currentQuote =
    currentQuoteIndex !== -1
      ? quotes[currentQuoteIndex].quote
      : "Click the button to get a quote!";
  const currentAuthor =
    currentQuoteIndex !== -1 ? quotes[currentQuoteIndex].author : "";

  return (
    <div>
      <p>"{currentQuote}"</p>
      {currentAuthor && <p> - {currentAuthor}</p>}

      <button onClick={getRandomQuote}>Get Quote</button>
    </div>
  );
};

export default Quote;
