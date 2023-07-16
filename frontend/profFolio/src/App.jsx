import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
function App() {
  return (
    <>
      <Outlet />

      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router> */}
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
        // children: [
        //   {
        //     path: "login",
        //     element: <Login />,
        //     errorElement: <Error />,
        //     children: [
        //       {
        //         path: "register",
        //         element: <Register />,
        //         errorElement: <Error />,
        //       },
        //       {
        //         path: "/forgotpassword",
        //       },
        //     ],
        //   },
        // ],
      },
    ],
  },
]);

export default App;
export { appRouter };
