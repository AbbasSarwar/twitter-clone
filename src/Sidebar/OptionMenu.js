const OptionMenu = ({dir, text, icon}) => {
    return (
        <a title={text} href={`${dir}`}>{icon}<span className="btn-text">{text}</span></a>
    )
}
export default OptionMenu;