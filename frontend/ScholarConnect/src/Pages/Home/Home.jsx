import Header from "../../components/Header";
import Body from "../../components/Body";
import Footer from "../../components/Footer";
import HomeCard from "../../components/HomeCard";
import RecentPublication from "../../components/RecentPublication";

const Home = () => {
  return (
    <>
      {/* #DF71FA #fbf0ff  #cecece*/}
      <div className="min-h-screen bg-[#fbf0ff]">
        {/* <Header /> */}
        <Body />
        <HomeCard />
        <RecentPublication />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Home;
