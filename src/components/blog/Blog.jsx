
const Blog = ({blog,handleAddToBookmarks}) => {
    const {title,cover,author,author_image,reading_time,posted_date,hashtags} = blog;
    return (
        <div className="mb-20">
            <img class='max-w-full max-h-[700px] mb-8' src={blog.cover} alt={`cover picture of the title ${title}`}></img> 
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
                    <button className="text- border-teal-100 text-orange-600" onClick={() => handleAddToBookmarks(blog)}>Bookmark</button>
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