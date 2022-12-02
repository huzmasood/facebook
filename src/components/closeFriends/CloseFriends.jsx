import { Users } from '../../dummyData';
import './closeFriends.css';

export default function CloseFriends() {
    return (
        <ul className='sidebarFriendList'>
            {Users.map((user) => {
                return (
                    <li key={user.id} className='sidebarFriend'>
                        <img alt='' src={user.profilePicture} className='sidebarFriendImg' />
                        <span className='sidebarFriendName'>{user.username}</span>
                    </li>
                )
            })}
        </ul>
    )
}
