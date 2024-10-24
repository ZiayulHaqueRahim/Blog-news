
const Blog = ({blog}) => {
    const {title,cover,author,author_image,reading_time,posted_date,hashtags} = blog;
    return (
        <div>
            <img src={blog.cover} alt={`cover picture of the title ${title}`}></img> 
            <div className="flex justify-between ">
                <div className="flex ">
                    <img  className="w-14 rounded-full py-3" src={author_image} ></img>
                    <div className="flex ml-6 flex-col ">
                        <h3 className="text-2xl font-bold">{author}</h3>
                        <p className="text-lg text-gray-400">{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className="text-gray-500">{reading_time} min read</span>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p className="text-gray-400 py-2  text-sm">
               {
                hashtags.map( (hash, idx) => <span key={idx}><a href=''>#{hashtags}</a></span>)
               }
            </p>
        </div>
    );
};

export default Blog;