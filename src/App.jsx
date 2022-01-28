import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Base, HomePage, ProfilePage, NotFound, ExplorePage, TrendingPage } from "./pages";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {

  return (
    <Router>
      <Base >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile/:id/" element={<ProfilePage />} />
          <Route path="/explore/" element={<ExplorePage/>} />
          <Route path="/trending/" element={<TrendingPage/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Base>
    </Router>
  );
}

export default App;
