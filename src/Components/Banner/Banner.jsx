const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row gap-10 items-center my-20 px-5">
            <div className="md:w-1/2 w-full">
                <img className="w-full" src="https://i.ibb.co/HnBPvKm/images-19.jpg" alt="" />
            </div>
            <div className="md:w-1/2 w-full">
                <h2 className="text-xl mb-3 font-bold">Social Media</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi porro illo unde. Omnis ipsa ex doloribus earum nisi maxime, ullam reiciendis ipsum amet nulla repellat commodi tenetur, similique consectetur quidem!</p>
                <div className="flex lg:mt-10 mt-4 gap-4">
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center text-lg font-bold gap-2">
                        <h2>Sagor Alies Jacky</h2>
                        <hr className="w-1 border-2 hidden md:flex border-black"/>
                        <p>14 Jun,2023</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;