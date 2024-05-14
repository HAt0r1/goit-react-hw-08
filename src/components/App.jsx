import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Fallback from "../components/Fallback/Fallback";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));

const App = () => {
  <>
    <Suspense fallback={<Fallback />}></Suspense>
  </>;
};

export default App;
