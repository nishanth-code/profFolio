import { React, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./Pages/Home/Home";
import Register from "./components/Register";
import ProfileDetails from "./components/ProfileDetails";
import ForgotPassword from "./components/ForgotPassword";
import Error from "./components/Error";
import Publication from "./Pages/Publication/Publication";
import Article from "./Pages/Article/Article";
import Workshop from "./Pages/Workshop/Workshop";
import Patent from "./Profile/Patent/Patent";
// import { ErrorBoundary } from "react-error-boundary";
import Dashboard from "./components/Dashboard";
import UserPublication from "./Profile/UserPublication/UserPublication";
import EditPublication from "./Profile/UserPublication/EditPublication";
import PublicationPage from "./components/PublicationPage";
import UserArticles from "./Profile/UserArticle/UserArticles";
import UserWorkshop from "./Profile/UserWorkshop/UserWorkshop";
import MenuLayout from "./components/PageLayout";
import AddPublication from "./Profile/UserPublication/AddPublication";
import PublicationLayout from "./Profile/UserPublication/PublicationLayout";

function App() {
  function NotFound() {
    return <Error message="Page not found." />;
  }
  return (
    // <ErrorBoundary fallback={<div>Something went wrong</div>}>
    <Router>
      <Routes>
        <Route path="/" element={<MenuLayout />}>
          <Route path="" element={<Home />} />
          <Route path="/publications" element={<Publication />} />
          <Route path="/articles" element={<Article />} />
          <Route path="/workshops" element={<Workshop />} />
          {/* <Route path="/patents" element={<Register />} /> */}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />}>
          {/* create route for otp */}
          <Route path="otp" element={<Login />} />
        </Route>
        {/* Create route for change password */}
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Dashboard />}>
          <Route path="" element={<ProfileDetails />} />
          <Route path="publication" element={<PublicationLayout />}>
            <Route path="" element={<UserPublication />} />
            <Route path="add" element={<AddPublication />} />
            <Route path="edit/:id" element={<EditPublication />} />
          </Route>
          <Route path="article" element={<UserArticles />} />
          <Route path="workshop" element={<UserWorkshop />} />
          <Route path="patent" element={<Patent />} />
        </Route>
        {/* <Route
          path="/profile/publication/edit/:id"
          element={<EditPublication />}
        /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    // </ErrorBoundary>
    // <Route path="edit/:id" element={<EditPublication />} />
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
