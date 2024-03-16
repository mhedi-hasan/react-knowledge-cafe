import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="lg:w-1/3 w-full">
            <div>
                <h3 className='text-2xl border-[#7f6bee] border-[1.5px] lg:mt-0 mt-14 bg-[#ddd8f5] py-5 px-4 text-[#7f6bee] mb-5 rounded-xl font-semibold'>Time on read : {readingTime}min </h3>
            </div>
            <div className='bg-slate-300 py-6 px-4 rounded-xl'>
            <h2 className="text-2xl font-semibold mb-3">BookMarked Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark =><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;