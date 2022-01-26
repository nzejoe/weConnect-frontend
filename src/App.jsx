import { useState, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Base, HomePage, ProfilePage, NotFound } from "./pages";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabIndex = useCallback((index)=>{
    setTabIndex(index)
  }, [])

  return (
    <Router>
      <Base indexHandler={handleTabIndex}>
        <Routes>
          <Route path="/" element={<HomePage tabIndex={tabIndex}/>} />
          <Route path="/profile/:id/" element={<ProfilePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Base>
    </Router>
  );
}

export default App;
