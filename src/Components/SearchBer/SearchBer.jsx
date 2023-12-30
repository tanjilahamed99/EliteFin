import { IoSearch } from "react-icons/io5";


const SearchBer = () => {
    return (
        <div className="mt-10 text-center">
            <h2 className="text-3xl font-bold mb-3">EliteFin Blog</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

            <div className="mt-7">
                <div className="relative w-[40%] mx-auto">
                    <input type="text" placeholder="Search our blog by typing or keyboard" className="input px-11  w-full  bg-slate-100" />
                    <IoSearch className="absolute top-3 left-3 text-2xl font-bold"></IoSearch>
                </div>
            </div>

        </div>
    );
};

export default SearchBer;