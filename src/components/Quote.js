import React, { useState } from "react";
import quotes from "../quotes";

const Quote = () => {
  const [currentQuote, setCurrentQuote] = useState(
    "Click the button to get a quote."
  );
  const [previousQuoteIndex, setPreviousQuoteIndex] = useState(-1);

  const getRandomQuote = () => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    while (randomIndex === previousQuoteIndex) {
      randomIndex = Math.floor(Math.random() * quotes.length);
    }
    setPreviousQuoteIndex(randomIndex);
    setCurrentQuote(quotes[randomIndex].quote);
  };

  return (
    <div>
      <p>{currentQuote}</p>
      <button onClick={getRandomQuote}>Get Quote</button>
    </div>
  );
};

export default Quote;
