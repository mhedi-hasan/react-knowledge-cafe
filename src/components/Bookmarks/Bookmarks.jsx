import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="lg:w-1/3 w-full">
            <h2 className="text-2xl font-semibold mb-20">BookMarked Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark =><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks: PropTypes.array
}
export default Bookmarks;