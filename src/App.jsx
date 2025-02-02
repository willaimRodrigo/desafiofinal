import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { RouterMain } from "./components/routes/RouterMain";

import GlobalStyles from "./GlobalStyles";


function App() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js")
        .then(() => console.log("Service Worker registrado!"))
        .catch((err) => console.error("Erro ao registrar:", err));
    });
  }


  return (
    <>
        <BrowserRouter>
          <GlobalStyles />
          <Header />
          <RouterMain />
        </BrowserRouter>

    </>
  )
}

export default App
