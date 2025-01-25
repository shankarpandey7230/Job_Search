import NavBar from "./shared/NavBar";
import Hero from "./Hero";
import CategoryCarousel from "./CategoryCarousel";
import LatestJobs from "./LatestJobs";
import Footer from "./shared/Footer";
const Home = () => {
  return (
    <div className="p-5 sm:p-3">
      <NavBar />
      <Hero />
      <CategoryCarousel />
      <LatestJobs />
      <Footer />
    </div>
  );
};

export default Home;
