import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({blog,handleAddToBookmark}) => {
    const {title,cover, author, author_img, reading_time,posted_date,hashtags}=blog;
    return (
        <div className='space-y-2'>
            <img className='h-96 mt-20 w-full rounded-lg' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <img className='h-16 w-16 rounded-full' src={author_img} alt="" />
                    <dir>
                        <h1>{author}</h1>
                        <p>{posted_date}</p>
                    </dir>
                </div>
                <div className='flex gap-2'>
                    <span>{reading_time} {`min read`}</span>
                    <button onClick={()=>handleAddToBookmark(blog)} className='text-[19px'><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) => <span key={idx}>  <a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};
Blog.prototypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
}
export default Blog;