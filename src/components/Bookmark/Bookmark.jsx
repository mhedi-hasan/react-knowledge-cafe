import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
    const {title}=bookmark
    return (
        <div className='bg-slate-100 py-5 px-3 my-2 rounded-lg'>
            <h3 className='text-2xl font-semibold'>{title}</h3>
        </div>
    );
};
Bookmark.prototypes = {
    bookmark: PropTypes.object
}
export default Bookmark;