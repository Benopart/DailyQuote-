import React from "react";
import Header from "./components/Header";
import Quote from "./components/Quote";
import Footer from "./components/Footer";

const App = () => {
  const appInfo = {
    title: "Quote of the Day",
    author: "Your Name",
    copyright: new Data().getFullYear(),
  };

  return (
    <div>
      <Header title={appInfo.title} />
      <Quote />
      <Footer author={appInfo.author} copyright={appInfo.copyright} />
    </div>
  );
};

export default App;
