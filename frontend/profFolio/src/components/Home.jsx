import { useState } from "react";
import Header from "./Header";
function Home() {
  return (
    <>
      <div className="home">
        <Header />
        <h2>Home</h2>
        <a href="/login">Login</a>
      </div>
    </>
  );
}

export default Home;
