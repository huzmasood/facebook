import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons';
import { PersonImages } from '../../Images';
import './share.css';

const shareoptions = [
    {
        component: <PermMedia htmlColor='tomato' className='shareIcon' />,
        text: 'Photo or Video'
    },
    {
        component: <Label htmlColor='blue' className='shareIcon' />,
        text: 'Tag'
    },
    {
        component: <Room htmlColor='green' className='shareIcon' />,
        text: 'Location'
    },
    {
        component: <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />,
        text: 'Feelings'
    }
]

export default function Share() {
    return (
        <div className='share'>
            <div className='shareWrapper'>
                <div className='shareTop'>
                    <img alt='' src={PersonImages.person1} className='shareProfileImg'/>
                    <input placeholder="What's on your mind?" className='shareInput' />
                </div>
                <hr className='shareHr' />
                <div className='shareBottom'>
                    <div className='shareOptions'>
                        {shareoptions.map((opt) => {
                            return (
                                <div key={opt.text} className='shareOption'>
                                    {opt.component}
                                    <span className='shareOptionText'>{opt.text}</span>
                                </div>
                            )
                        })}
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    );
}
