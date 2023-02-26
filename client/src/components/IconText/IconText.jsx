import './IconText.css'

const IconText = ({text, url}) => {
    return (
        <div className="logo">
            <img src={url}></img>
            <p className="logo-text-style">{text}</p>
        </div>
    )
}

export { IconText }