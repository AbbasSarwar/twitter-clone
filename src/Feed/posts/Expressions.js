import { FaArrowUpFromBracket } from 'react-icons/fa6';
import { IoStatsChart } from 'react-icons/io5';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRetweet } from 'react-icons/fa6';
import { FaRegComment } from 'react-icons/fa6';

const Expressions = ({impressions}) => {
    return (
        <div className='impressions d-flex flex-row'>
            <div className='btns'><span className='posticon p1'><FaRegComment /> </span> <span className='post-dgt'>{impressions.tweets[0].impressions[0]}k</span></div>
            <div className='btns'><span className='posticon p2'><FaRetweet /> </span> <span className='post-dgt'>{impressions.tweets[0].impressions[1]}k</span></div>
            <div className='btns'><span className='posticon p3'><AiOutlineHeart /> </span> <span className='post-dgt'>{impressions.tweets[0].impressions[2]}k</span></div>
            <div className='btns'><span className='posticon p4'><IoStatsChart /> </span><span className='post-dgt'>{impressions.tweets[0].impressions[3]}k</span></div>
            <div className='share-btns'><span className='posticon p5 px-1'>{<FaArrowUpFromBracket />}</span></div>
        </div>
    )
}

export default Expressions;