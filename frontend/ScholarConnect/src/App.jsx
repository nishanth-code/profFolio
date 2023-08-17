import { React, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Login Register ForgotPassword OTP
import Login from "./components/Login";
import Home from "./Pages/Home/Home";
import Register from "./components/Register";
import ForgotPassword from "./Pages/ForgotPasswordPage/ForgotPassword";
import Error from "./components/Error";
import Publication from "./Pages/Publication/Publication";
import Article from "./Pages/Article/Article";
import Workshop from "./Pages/Workshop/Workshop";
// import { ErrorBoundary } from "react-error-boundary";
import Dashboard from "./components/Dashboard";
import UserPublication from "./Profile/UserPublication/UserPublication";
import EditPublication from "./Profile/UserPublication/EditPublication";
import PublicationPage from "./components/PublicationPage";
import UserArticles from "./Profile/UserArticle/UserArticles";
import UserWorkshop from "./Profile/UserWorkshop/UserWorkshop";
import PageLayout from "./components/PageLayout";
import AddPublication from "./Profile/UserPublication/AddPublication";
import PublicationLayout from "./Profile/UserPublication/PublicationLayout";
import ArticleLayout from "./Profile/UserArticle/ArticleLayout";
import AddArticle from "./Profile/UserArticle/AddArticle";
import EditArticle from "./Profile/UserArticle/EditArticle";
import WorkshopLayout from "./Profile/UserWorkshop/WorkshopLayout";
import AddWorkshop from "./Profile/UserWorkshop/AddWorkshop";
import EditWorkshop from "./Profile/UserWorkshop/EditWorkshop";
import OTP from "./Pages/ForgotPasswordPage/OTP";
import ChangePassword from "./Pages/ForgotPasswordPage/ChangePassword";
import ForgotPasswordLayout from "./Pages/ForgotPasswordPage/ForgotPasswordLayout";
// Profile imports
import ProfileDetails from "./Profile/ProfileDetails";
import AddProfile from "./Profile/AddProfile";
import EditProfile from "./Profile/EditProfile";
import ProfileLayout from "./Profile/ProfileLayout";
import PatentLayout from "./Profile/Patent/PatentLayout";
import AddPatent from "./Profile/Patent/AddPatent";
import Patent from "./Profile/Patent/Patent";

function App() {
  function NotFound() {
    return <Error message="Page not found." />;
  }
  return (
    // <ErrorBoundary fallback={<div>Something went wrong</div>}>
    <Router>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="" element={<Home />} />
          <Route path="/publications" element={<Publication />} />
          <Route path="/articles" element={<Article />} />
          <Route path="/workshops" element={<Workshop />} />
          {/* <Route path="/patents" element={<Register />} /> */}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPasswordLayout />}>
          {/* create route for otp */}
          <Route path="" element={<ForgotPassword />} />
          <Route path="otp/:id" element={<OTP />} />
          <Route path="changepassword/:id" element={<ChangePassword />} />
        </Route>
        {/* Create route for change password */}
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Dashboard />}>
          <Route path="" element={<ProfileLayout />}>
            <Route path="" element={<ProfileDetails />} />
            {/* <Route path="add" element={<AddProfile />} /> */}
            <Route path="edit/:id" element={<EditProfile />} />
          </Route>

          <Route path="publication" element={<PublicationLayout />}>
            <Route path="" element={<UserPublication />} />
            <Route path="add" element={<AddPublication />} />
            <Route path="edit/:id" element={<EditPublication />} />
          </Route>
          <Route path="article" element={<ArticleLayout />}>
            <Route path="" element={<UserArticles />} />
            <Route path="add" element={<AddArticle />} />
            <Route path="edit/:id" element={<EditArticle />} />
          </Route>
          <Route path="workshop" element={<WorkshopLayout />}>
            <Route path="" element={<UserWorkshop />} />
            <Route path="add" element={<AddWorkshop />} />
            <Route path="edit/:id" element={<EditWorkshop />} />
          </Route>

          <Route path="patent" element={<PatentLayout />}>
            <Route path="" element={<Patent />} />
            <Route path="add" element={<AddPatent />} />
          </Route>
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
