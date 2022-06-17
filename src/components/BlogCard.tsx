import './BlogCard.scss';
// import PropTypes, { InferProps } from "prop-types";

function BlogCard({blog}: {blog: any}) {

    const months: string[] = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    function getAuthorInfo() {
        return blog._embedded.author[0];
    }

    function getBlogDate() {
        const postDate = new Date(blog.date_gmt);
        return `${postDate.getDate()} ${months[postDate.getMonth()] } ${postDate.getFullYear()}`;
    }

    function getCategoryName() {
        // category's term index is 0
        return blog._embedded["wp:term"][0][0].name;
    }

    function getTopicName() {
        // topic's term index is 2 but since some elements don't seem to have this I default to the post_tag name
        return blog._embedded["wp:term"][2][0] ? blog._embedded["wp:term"][2][0].name : blog._embedded["wp:term"][1][0].name;
    }

    return (
        <div className='col-4 p-card blog-card'>
            <header className='blog-header'>
                {getTopicName()}
            </header>
            <div className='blog-content'>
                <div className='u-crop--16-9'>
                    <a href={blog.link} target='_blank' rel="noreferrer">
                        <img className='p-card__image' src={blog.featured_media} alt="blog-img" />
                    </a>
                </div>
                <h4>
                    <a href={blog.link} target='_blank' rel="noreferrer">
                        {blog.title.rendered}
                    </a>
                </h4>
                <p>
                    <em>
                        By {' '}
                        <a href={getAuthorInfo().link} target='_blank' rel="noreferrer">
                            {getAuthorInfo().name}
                        </a>
                        {' '} at {getBlogDate()}
                    </em>
                </p>
            </div>
            <footer className='blog-footer'>
                {getCategoryName()}
            </footer>
        </div>
    );
}

export default BlogCard