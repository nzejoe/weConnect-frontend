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
  PrivateRoute
} from "./pages";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <Router>
      <Routes>
        {/* PRIVATE ROUTES */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile/:id/"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/explore/"
          element={
            <PrivateRoute>
              <ExplorePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/trending/"
          element={
            <PrivateRoute>
              <TrendingPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/language/"
          element={
            <PrivateRoute>
              <LanguagePage />
            </PrivateRoute>
          }
        />

        {/* PUBLIC ROUTES */}
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
