import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import PublicationCard from "./PublicationCard";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-black">
        <Header />
        <Body />
        <PublicationCard />
        <Footer />
      </div>
    </>
  );
};

export default Home;
