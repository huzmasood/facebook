import {
    RssFeed,
    Chat,
    PlayCircleFilledOutlined,
    Group,
    Bookmark,
    HelpOutline,
    WorkOutline,
    Event,
    School
} from '@material-ui/icons';
import CloseFriends from '../closeFriends/CloseFriends';
import './sidebar.css';

const items = [
    {
        component: <RssFeed className='sidebarIcon' />,
        text: 'Feed'
    },
    {
        component: <Chat className='sidebarIcon' />,
        text: 'Chats'
    },
    {
        component: <PlayCircleFilledOutlined className='sidebarIcon' />,
        text: 'Videos'
    },
    {
        component: <Group className='sidebarIcon' />,
        text: 'Groups'
    },
    {
        component: <Bookmark className='sidebarIcon' />,
        text: 'Bookmarks'
    },
    {
        component: <HelpOutline className='sidebarIcon' />,
        text: 'Questions'
    },
    {
        component: <WorkOutline className='sidebarIcon' />,
        text: 'Jobs'
    },
    {
        component: <Event className='sidebarIcon' />,
        text: 'Events'
    },
    {
        component: <School className='sidebarIcon' />,
        text: 'Courses'
    }
]

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <ul className='sidebarList'>
                    {items.map((item) => {
                        return (
                            <li key={item.text} className='sidebarListItem'>
                                {item.component}
                                <span className='sidebarListItemText'>{item.text}</span>
                            </li>
                        )
                    })}
                </ul>
                <button className='sidebarButton'>Show More</button>
                <hr className='sidebarHr' />
                <CloseFriends />
            </div>
        </div>
    );
}
