import { Users } from '../../dummyData';
import './online.css';

export default function Online() {
    return (
        <>
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendlist">
                {Users.map((user) => {
                    return (
                        <li key={user.id} className="rightbarFriend">
                            <div className="rightbarProfileImgContainer">
                                <img
                                    src={user.profilePicture}
                                    alt=""
                                    className="rightbarProfileImg"
                                />
                                <span className="rightbarOnline"></span>
                            </div>
                            <span className="rightbarUsername">{user.username}</span>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
