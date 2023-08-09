import { React, useState } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Routes,
// } from "react-router-dom";
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
import Header from "./components/Header";
import Body from "./components/Body";
import HomeCard from "./components/HomeCard";
import RecentPublication from "./components/RecentPublication";
import Footer from "./components/Footer";
import UserPublication from "./components/UserPublication";

function App() {
  function NotFound() {
    return <Error message="Page not found." />;
  }
  return (
    // <ErrorBoundary fallback={<div>Something went wrong</div>}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/publications" element={<Publication />} />
        <Route path="/articles" element={<Article />} />
        <Route path="/workshops" element={<Workshop />} />
        {/* <Route path="/patents" element={<Register />} /> */}
        <Route path="/profile" element={<Dashboard />}>
          <Route path="" element={<ProfileDetails />} />
          <Route path="publication" element={<UserPublication />} />
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
// const App = () => {
//   {
//     /* #DF71FA  #cecece*/
//   }
//   return (
//     <div className="min-h-screen bg-[#fbf0ff]">
//       <Header />
//       <Body />
//       <HomeCard />
//       <RecentPublication />
//       <Footer />
//     </div>
//   );
// };

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <Error />,
//     // children: [
//     //   {
//     //     path: "/",
//     //     element: <Body />,
//     //     errorElement: <Error />,
//     //   },
//     //   {
//     //     path: "/about",
//     //     element: <About />,
//     //     children: [
//     //       {
//     //         //     don't have to add '/' -- parentPath/{path} ==> localhost:1234/about/profile
//     //         path: "profile",
//     //         element: <Profile />,
//     //       },
//     //     ],
//   },
//   {
//     path: "/login",
//     element: <Login />,
//     errorElement: <Error />,
//   },
//   {
//     path: "/register",
//     element: <Register />,
//     errorElement: <Error />,
//   },
//   {
//     path: "/dashboard",
//     element: <Dashboard />,
//     children: [
//       {
//         path: "publication",
//         element: <UserPublication />,
//         errorElement: <Error />,
//       },
//       {
//         path: "article",
//         element: <Article />,
//         errorElement: <Error />,
//       },
//     ],
//   },
//   {
//     path: "/publication",
//     element: <Publication />,
//     errorElement: <Error />,
//   },
//   {
//     path: "/article",
//     element: <Article />,
//     errorElement: <Error />,
//   },
//   {
//     path: "/workshop",
//     element: <Workshop />,
//     errorElement: <Error />,
//   },
//   {
//     path: "/patent",
//     element: <Patent />,
//     errorElement: <Error />,
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<RouterProvider router={appRouter} />);

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
