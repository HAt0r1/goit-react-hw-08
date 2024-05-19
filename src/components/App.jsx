import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Fallback from "../components/Fallback/Fallback";

import Layot from "./Layout/Layout";
import RestrictedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";
import Loader from "./Loader/Loader";
import { selectIsRefreshing } from "../redux/auth/selectors";
import { useSelector, useDispatch } from "react-redux";
import { refreshUser } from "../redux/auth/operations";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));
const SignUpPage = lazy(() => import("../pages/SignUpPage/SignUpPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));

const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Layot>
          <Suspense fallback={<Fallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/contacts"
                element={<PrivateRoute component={<ContactsPage />} />}
              />
              <Route
                path="/signup"
                element={<RestrictedRoute component={<SignUpPage />} />}
              />
              <Route
                path="/login"
                element={<RestrictedRoute component={<LoginPage />} />}
              />
              <Route path="*" element={<Error />} />
            </Routes>
          </Suspense>
        </Layot>
      )}
    </>
  );
};

export default App;
