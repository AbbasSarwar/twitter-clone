import { IoCloseOutline } from 'react-icons/io5';
import { BiWorld } from 'react-icons/bi';
import data from '../Data.json';
const Compose = () => {
    const { profile } = data;
    return (
        <section className="compose">
            <div className='d-flex justify-content-between'>
                <span><IoCloseOutline /></span>
                <span>Drafts</span>
            </div>
            <div>
                <div className='d-flex flex-row'>
                    <div>
                        <span className=''><img src={profile.person1.img} alt="" /></span>
                    </div>
                    <div className='d-flex flex-column'>
                        <span>Everyone <PiCaretDown/></span>
                        <textarea name="" id="" cols="30" rows="10" placeholder='What is happening?!'></textarea>
                    </div>
                </div>
                <span><BiWorld /> Everyone can reply</span>
            </div>
        </section>
    )
}