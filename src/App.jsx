import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Base, HomePage, ProfilePage, NotFound } from "./pages";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {

  return (
    <Router>
      <Base >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile/:id/" element={<ProfilePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Base>
    </Router>
  );
}

export default App;
