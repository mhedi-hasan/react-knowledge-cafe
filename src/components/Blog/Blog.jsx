import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {title,cover, author, author_img, reading_time,posted_date,hashtags}=blog;
    return (
        <div>
            <img className='h-96 mt-20 w-full rounded-md' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <img className='h-16 w-16 rounded-full' src={author_img} alt="" />
                    <dir>
                        <h1>{author}</h1>
                        <p>{posted_date}</p>
                    </dir>
                </div>
                <div>
                    <h4>{reading_time} {`min read`}</h4>
                </div>
            </div>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <h3>
                {
                    hashtags.map((hash,idx) => <span key={idx}>  <a href="">#{hash}</a></span>)
                }
            </h3>
        </div>
    );
};
Blog.prototypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;