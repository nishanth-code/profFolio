import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import HomeCard from "./HomeCard";
import RecentPublication from "./RecentPublication";

const Home = () => {
  return (
    <>
      {/* #DF71FA  #cecece*/}
      <div className="min-h-screen bg-[#f9e1ff]">
        <Header />
        <Body />
        <HomeCard />
        <RecentPublication />
        <Footer />
      </div>
    </>
  );
};

export default Home;
