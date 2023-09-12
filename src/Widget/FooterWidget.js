import { FiMoreHorizontal } from "react-icons/fi";
const FooterWidget = () => {
    return (
        <div className="wfooter d-flex flex-column p-2">
            <div className="f1 d-flex flex-row gap-3 p-0 m-0 flex-wrap">
                <span>Terms of Service</span>
                <span>Privacy Policy</span>
                <span>Cookie Policy</span>
            </div>
            <div className="f2 d-flex flex-row gap-3 flex-wrap">
                <span>Accessibility</span>
                <span>Ads info</span>
                <span>More<FiMoreHorizontal /></span>
                <p>© 2023 X Corp.</p>
            </div>
        </div>
    )
}

export default FooterWidget;