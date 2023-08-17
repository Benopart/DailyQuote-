import React, { useState } from "react";
import quotes from "../quotes";

const Quote = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(-1);
  const [previousQuoteIndex, setPreviousQuoteIndex] = useState(-1);
  const [buttonLabel, setButtonLabel] = useState("Get Quote");
  const [quoteVisible, setQuoteVisible] = useState(false);

  const getRandomQuote = () => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    while (randomIndex === previousQuoteIndex) {
      randomIndex = Math.floor(Math.random() * quotes.length);
    }
    setPreviousQuoteIndex(randomIndex);
    setCurrentQuoteIndex(randomIndex);

    if (!quoteVisible) {
      setQuoteVisible(true);
      if (buttonLabel === "Get Quote") {
        setButtonLabel("Get Another Quote");
      }
    }
  };

  const currentQuote =
    currentQuoteIndex !== -1
      ? quotes[currentQuoteIndex].quote
      : "Click the button to get a quote!";
  const currentAuthor =
    currentQuoteIndex !== -1 ? quotes[currentQuoteIndex].author : "";

  return (
    <div>
      {quoteVisible ? (
        <blockquote>
          <p>
            <strong>{currentQuote}</strong>
          </p>
          {currentAuthor && (
            <footer>
              <small>~ {currentAuthor} ~</small>
            </footer>
          )}
        </blockquote>
      ) : (
        <p>Click the button to get a quote!</p>
      )}
      <p>
        <button onClick={getRandomQuote}>{buttonLabel}</button>
      </p>
    </div>
  );
};

export default Quote;
