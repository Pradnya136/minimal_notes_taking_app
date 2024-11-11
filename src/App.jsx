import { useEffect, useState } from "react";
import "./App.css";
import Laptop from "./Laptop";
import Mobile from "./Mobile";
import Notes_M from "./components/Notes/Notes_M";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider} from "./useContext";
import UseContext from "./useContext";

function App() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const { selected, setSelected } = UseContext();

  useEffect(() => {
    setSelected(localStorage.getItem("selected") || "");
    // eslint-disable-next-line
  }, [selected]);
  const checkScreenSize = () => {
    setScreenSize(window.innerWidth);
  };

  window.addEventListener("resize", checkScreenSize);
  return (
    <Provider>
      <div className="App">
        {screenSize > 500 ? (
          <Laptop />
        ) : (
          <Router>
            <Routes>
              <Route path="/" element={<Mobile />} />
              <Route path="/notes" element={<Notes_M />} />
            </Routes>
          </Router>
        )}
      </div>
    </Provider>
  );
}

export default App;
