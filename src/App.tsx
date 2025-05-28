import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home_Page from "./view/pages/HomePage";
import Classes from "./view/pages/Classes";
import { ContentListPage } from "./view/pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home_Page />} />
        <Route path="/disciplinas" element={<Classes />} />
        <Route
          path="/:semester/:subject/:category"
          element={<ContentListPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
