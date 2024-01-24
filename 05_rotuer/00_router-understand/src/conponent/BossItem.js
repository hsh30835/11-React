import { Link } from "react-router-dom"

const PostItem = ({post}) => {
    return(
        <Link to={`/post/${post.postCode}`}>
            <div className={menuStyle.PostItem}>
                <h3>제목 : {post.postTitle}</h3>
                <h3>내용 : {post.postDetail}</h3>
            </div>
        </Link>
    )
}

export default PostItem;