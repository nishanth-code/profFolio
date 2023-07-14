import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import HomeCard from "./HomeCard";
import RecentPublicationCard from "./RecentPublicationCard";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-black">
        <Header />
        <Body />
        <HomeCard />
        <RecentPublicationCard />
        <Footer />
      </div>
    </>
  );
};

export default Home;
