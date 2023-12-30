import { BiSupport } from "react-icons/bi";


const Footer = () => {
    return (
        <footer>
            <div className="footer py-20 px-10 bg-neutral text-neutral-content items-center justify-between">
                <aside className="space-y-2">
                    <h2 className="text-xl font-medium"><span className="text-cyan-500">Elite</span>Fin</h2>
                    <p className="text-xl font-bold">Get started to grow up your business <br /> with personal lead manager</p>
                    <h4 className="text-sm font-bold ">EliteFin, 2023</h4>
                </aside>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <button className="btn border-none rounded-3xl bg-cyan-500  text-white">Try EliteFin</button>
                        <button className="btn  rounded-3xl btn-outline text-white"><BiSupport className="text-xl"></BiSupport>Support</button>
                    </div>
                </nav>

            </div>
            <div className="footer items-center px-10 py-5 bg-cyan-600 justify-between">
                <aside className="items-center grid-flow-col">
                    <p className="text-white text-sm">@ EliteFin Inc. All right reserved</p>
                </aside>
                <nav className="flex flex-col  font-medium md:flex-row text-white md:gap-1 lg:gap-10">
                    <h2>Delete Account</h2>
                    <h2>Terms of Service</h2>
                    <h2>Condition & Refund Policy</h2>
                    <h2>Privacy Policy</h2>
                </nav>
            </div>
        </footer>

    );
};

export default Footer;