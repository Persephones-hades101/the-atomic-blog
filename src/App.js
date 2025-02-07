import { useEffect, useState } from "react";


import { ContextProvider, useContext_ } from "./ContextProvider";

import Header from "./Header"
import Main from "./Main"
import Archive from "./Archive"
import Footer from "./Footer"







function App() {
  const [isFakeDark, setIsFakeDark] = useState(false);


  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return (

    <section>
      <button
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        className="btn-fake-dark-mode"
      >
        {isFakeDark ? "☀️" : "🌙"}
      </button>
      <ContextProvider>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </ContextProvider>

    </section>


  );
}













export default App;
