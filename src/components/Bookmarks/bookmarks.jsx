import Bookmark from "../Bookmark";


const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3  rounded-xl ml-2 p-2 bg-gray-300">
            <h2 className="text-3xl font-bold">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark id={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;