import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import {
  HomePage,
  ProfilePage,
  NotFound,
  ExplorePage,
  TrendingPage,
  PublicRoute,
  LoginPage,
  RegisterPage,
  PasswordResetPage,
  PasswordResetComplete,
  PrivateRoute,
  AccountActivatePage,
  PasswordResetVerification,
  MessagesPage,
  DirectMessagePage,
} from "./pages";

import Chat from "./pages/Chat";

// store context
import AuthUserProvider from "./store/auth-user-context";
import PostProvider from "./store/post-context";
import UserProfileProvider from "./store/users-context";

// utils
import { baseURL } from "./utils";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

// set default base url
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthUserProvider>
      <UserProfileProvider>
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
                path="/profile/:username/"
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
                path="/messages/"
                element={
                  <PrivateRoute>
                    <MessagesPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/chat/:room/"
                element={
                  <PrivateRoute>
                    <Chat />
                  </PrivateRoute>
                }
              />
              <Route
                path="/messages/:username/"
                element={
                  <PrivateRoute>
                    <DirectMessagePage />
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
                path="/account/password_reset_verification/:uidb64/:token/"
                element={
                  <PublicRoute children={<PasswordResetVerification />} />
                }
              />
              <Route
                path="/account/password_reset_complete/"
                element={<PublicRoute children={<PasswordResetComplete />} />}
              />
              <Route
                path="*"
                element={<PublicRoute children={<NotFound />} />}
              />
            </Routes>
          </Router>
        </PostProvider>
      </UserProfileProvider>
    </AuthUserProvider>
  );
}

export default App;
