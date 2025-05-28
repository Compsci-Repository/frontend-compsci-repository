import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ClassesPage, ContentListPage, HomePage } from "./view/pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:semester" element={<ClassesPage />} />
        <Route
          path="/:semester/:subject/:category"
          element={<ContentListPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
