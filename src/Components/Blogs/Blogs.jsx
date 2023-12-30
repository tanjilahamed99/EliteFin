
import blogData from './../../../public/blog.json'

const Blogs = () => {
    return (
        <div className='my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5'>
                {
                    blogData.map((i, idx) => <div className=" border-b-2" key={idx}>
                        <img className='w-full rounded-2xl h-[300px]' src={i.image} alt="Shoes" />
                        <div className="py-5 space-y-3">
                            <h2 className="card-title">{i.title}</h2>
                            <p>{i.desc}</p>
                            <div className="pt-10 flex items-center gap-3">
                                <div className="avatar">
                                    <div className="w-14 rounded-full">
                                        <img src={i.authorImg} />
                                    </div>
                                </div>
                                <div>
                                    <h2 className='text-lg font-bold'>{i.author}</h2>
                                    <h2 className='text-sm font-bold'>{i.position}</h2>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Blogs;



