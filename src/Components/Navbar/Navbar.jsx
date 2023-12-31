const Navbar = () => {

    const ulLinks = <>
        <li><a>Home</a></li>
        <li><a>Features</a></li>
        <li><a>User Guide</a></li>
        <li className="text-cyan-400"><a>Blogs</a></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold">
                        {
                            ulLinks
                        }
                        <button className="btn my-2">Connect with us</button>
                    </ul>
                </div>
                <a className="text-xl font-bold"><span className="text-cyan-400">Elite</span>Fin</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold">
                    {
                        ulLinks
                    }
                </ul>
            </div>
            <div className="navbar-end gap-3  ">
                <button className="btn hidden md:flex">Connect with us</button>
                <button className="btn bg-cyan-400 text-white">Sign in / Register</button>
            </div>
        </div>
    );
};

export default Navbar;