import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home_Page from "./view/pages/HomePage";
import Classes from "./view/pages/Classes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home_Page />} />
        <Route path="/disciplinas" element={<Classes />} />
      </Routes>
    </Router>
  );
}

export default App;
