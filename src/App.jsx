import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { RouterMain } from "./components/routes/RouterMain";

import GlobalStyles from "./GlobalStyles";


function App() {
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
