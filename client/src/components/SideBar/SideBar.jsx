import './SideBar.css'
import MainLogo from './icons/MainLogo.svg'
import HomeLogo from './icons/Home.svg'
import LikeLogo from './icons/Like.svg'
import LoopaLogo from './icons/Loopa.svg'
import MediaLogo from './icons/Media.svg'
import PlusLogo from './icons/Plus.svg'
import { IconText } from '../IconText/IconText'


const SideBar = () => {
    return (
        <div className="sidebar-full">
            <div className='main-logo'>
                <img src={MainLogo}></img>
                <p className='logo-text'>Sound4Life</p>
            </div>
            <div className='navbar-left'>
            <IconText text="Главная" url={HomeLogo}></IconText>
            <IconText text="Поиск" url={LoopaLogo}></IconText>
            <IconText text="Медиатека" url={MediaLogo}></IconText>
            <hr className='line'></hr>
            <IconText text="Создать плейлись" url={PlusLogo}></IconText>
            <IconText text="Любимые треки" url={LikeLogo}></IconText>
            </div>
        </div>
    )
}

export { SideBar }