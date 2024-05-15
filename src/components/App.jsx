import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Fallback from "../components/Fallback/Fallback";
import Error from "./Error/Error";
import Layot from "./Layout/Layout";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));
const SignUpPage = lazy(() => import("../pages/SignUpPage/SignUpPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));

const App = () => {
  return (
    <Layot>
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </Layot>
  );
};

export default App;
