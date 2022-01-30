import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  HomePage,
  ProfilePage,
  NotFound,
  ExplorePage,
  TrendingPage,
  LanguagePage,
  PublicRoute,
  LoginPage,
  RegisterPage,
  PasswordResetPage,
  PasswordResetComplete,
} from "./pages";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile/:id/" element={<ProfilePage />} />
        <Route path="/explore/" element={<ExplorePage />} />
        <Route path="/trending/" element={<TrendingPage />} />
        <Route path="/language/" element={<LanguagePage />} />
        <Route
          path="/account/login/"
          element={<PublicRoute children={<LoginPage />} />}
        />
        <Route
          path="/account/register/"
          element={<PublicRoute children={<RegisterPage />} />}
        />
        <Route
          path="/account/password_reset/"
          element={<PublicRoute children={<PasswordResetPage />} />}
        />
        <Route
          path="/account/password_reset_complete/"
          element={<PublicRoute children={<PasswordResetComplete />} />}
        />
        <Route path="*" element={<PublicRoute children={<NotFound />} />} />
      </Routes>
    </Router>
  );
}

export default App;
