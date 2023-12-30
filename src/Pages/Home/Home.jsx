import Banner from "../../Components/Banner/Banner";
import Blogs from "../../Components/Blogs/Blogs";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import SearchBer from "../../Components/Searchber/Searchber";

const Home = () => {
    return (
        <div className="container mx-auto">
           <Navbar></Navbar>
           <SearchBer></SearchBer>
           <Banner></Banner>
           <Blogs></Blogs>
           <Footer></Footer>
        </div>
    );
};

export default Home;