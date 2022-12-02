import { useState } from 'react';
import { MoreVert } from '@material-ui/icons';
import Images from '../../Images';
import { Users } from '../../dummyData';
import './post.css';

export default function Post({ post }) {
    const [like, setLike] = useState(post.like);
    const username = Users.filter((user) => user.id === post.id)[0].username;
    const profilePic = Users.filter((user) => user.id === post.id)[0].profilePicture;

    const toggleLike = () => {
        like === post.like ? setLike(post.like + 1) : setLike(post.like)
    };

    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img alt='' src={profilePic} className='postProfileImg' />
                        <span className="postUsername">{username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img alt='' src={post.photo} className='postImg' />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img alt='' src={Images.like} className='likeIcon' onClick={toggleLike} />
                        <img alt='' src={Images.heart} className='likeIcon' onClick={toggleLike} />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
