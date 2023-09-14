import { IoCloseOutline } from 'react-icons/io5';
import { BiWorld } from 'react-icons/bi';
import { PiCaretDown } from 'react-icons/pi';
import data from '../Data.json';
import ComposeBottom from './ComposeBottom.js';
const Compose = () => {
    const { profile } = data;
    return (
        <section className='compose'>
        <div className="compose-card">
            <div className='d-flex align-items-center justify-content-between'>
                <span className='fs-4 p-0 m-0'><IoCloseOutline /></span>
                <span className='fs-5 m-0 p-0'>Drafts</span>
            </div>
            <div className='d-flex flex-column'>
                <div className='d-flex flex-row'>
                    <div className='pe-3'>
                        <span className='img'><img src={profile.person1.img} alt="" /></span>
                    </div>
                    <div className='d-flex flex-column w-100'>
                        <span>Everyone <PiCaretDown/></span>
                        <textarea name="" id="" cols="30" rows="10" placeholder='What is happening?!'></textarea>
                    </div>
                </div>
                <span><BiWorld /> Everyone can reply</span>
            </div>
            <ComposeBottom />
        </div>
        </section>
    )
}
export default Compose;