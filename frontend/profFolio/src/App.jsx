import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import ProfileDetails from "./components/ProfileDetails";
import ForgotPassword from "./components/ForgotPassword";
import Error from "./components/Error";
import Publication from "./components/Publication";
import Article from "./components/Article";
import Workshop from "./components/Workshop";
import Patent from "./components/Patent";
// import { ErrorBoundary } from "react-error-boundary";
import Dashboard from "./components/Dashboard";

function App() {
  function NotFound() {
    return <Error message="Page not found." />;
  }
  return (
    // <ErrorBoundary fallback={<div>Something went wrong</div>}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="profile" element={<ProfileDetails />} />
          <Route path="publication" element={<Publication />} />
          <Route path="articles" element={<Article />} />
          <Route path="workshop" element={<Workshop />} />
          <Route path="patent" element={<Patent />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    // </ErrorBoundary>
  );
}

export default App;

// New Router handling techq use the latest

// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Root />}>
//       <Route path="dashboard" element={<Dashboard />} />
//       {/* ... etc. */}
//     </Route>
//   )
// );

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
