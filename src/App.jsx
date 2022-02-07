import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
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
  PrivateRoute,
  AccountActivatePage,
} from "./pages";

import AuthUserProvider from "./store/auth-user-context";
import PostProvider from "./store/post-context";

// utils
import { baseURL } from "./utils";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

// set default base url
axios.defaults.baseURL = baseURL;

function App() {
  return (
    <AuthUserProvider>
      <PostProvider>
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
              path="/account/activate_user/:uidb64/:token/"
              element={<PublicRoute children={<AccountActivatePage />} />}
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
      </PostProvider>
    </AuthUserProvider>
  );
}

export default App;
