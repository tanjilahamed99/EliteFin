import Banner from "../../Components/Banner/Banner";
import Navbar from "../../Components/Navbar/Navbar";
import SearchBer from "../../Components/Searchber/Searchber";

const Home = () => {
    return (
        <div className="container mx-auto">
           <Navbar></Navbar>
           <SearchBer></SearchBer>
           <Banner></Banner>
        </div>
    );
};

export default Home;