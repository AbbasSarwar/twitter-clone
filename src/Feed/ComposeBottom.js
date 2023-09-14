import { FiImage } from 'react-icons/fi';
import { MdOutlineGifBox } from 'react-icons/md';
import { CgPoll } from 'react-icons/cg';
import { BsEmojiSmile } from 'react-icons/bs';
import { AiOutlineSchedule } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const ComposeBottom = ({text}) => {
    return (
        <div className='d-flex flex-row align-items-center justify-content-between border-top border-1 border-info py-2 m-0'>
            <div className='d-flex flex-row gap-1'>
            <span className='rounded-bar rounded-bar-icon'><FiImage /></span>
            <span className='rounded-bar rounded-bar-icon'><MdOutlineGifBox /></span>
            <span className='rounded-bar rounded-bar-icon'><CgPoll /></span>
            <span className='rounded-bar rounded-bar-icon'><BsEmojiSmile /></span>
            <span className='rounded-bar rounded-bar-icon'><AiOutlineSchedule /></span>
            <span className='rounded-bar'><HiOutlineLocationMarker /></span>
            </div>
            <button className={`m-0 rounded-4 px-3 py-1 text-light fw-semibold border-0 ${text.length > 1? 'bg-primary' : 'bg-info'}`}>Post</button>
        </div>
    )
}
export default ComposeBottom;