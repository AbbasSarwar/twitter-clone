import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { setFocus } from "../reducer/focusReducer";
import Home from "./Home";
import Progress from "./progress";

const Feed = () => {
    const dispatch = useDispatch();

    return (
        <section className="feed col-md-6 col-xxl-5 border" onClick={() => dispatch(setFocus(false))}>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/search' element={<Progress />} />
                <Route path='/notifications' element={<Progress />} />
                <Route path='/lists' element={<Progress />} />
                <Route path='/messages' element={<Progress />} />
                <Route path='/communities' element={<Progress />} />
                <Route path='/profile' element={<Progress />} />
                <Route path='/more' element={<Progress />} />
                <Route path='/verified-choose' element={<Progress />} />
                <Route path='/tweet' element={<Progress />} />
            </Routes>
        </section>
    )
}

export default Feed;