import React from "react";
import Header from "./components/Header";
import Quote from "./components/Quote";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const appInfo = {
    title: "Quote of the Day",
    author: "Behnam Arabi",
    copyright: new Date().getFullYear(),
  };

  return (
    <html>
      <body>
        <div id="wrapper">
          <Header title={appInfo.title} />

          <main>
            <div>
              <section>
                <Quote />
              </section>
            </div>
          </main>
          <Footer author={appInfo.author} copyright={appInfo.copyright} />
        </div>
      </body>
    </html>
  );
};

export default App;
