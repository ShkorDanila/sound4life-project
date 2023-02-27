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
        <div className="sidebar-flex">
            <div className='sidebar-logo'>
                <img src={MainLogo}></img>
                <p className='logo-text'>Sound4Life</p>
            </div>
            <nav>
                <ul className='nav-side-bar'>
                    <li><IconText text='Главная' url={HomeLogo}></IconText></li>
                    <li><IconText text='Поиск' url={LoopaLogo}></IconText></li>
                    <li><IconText text='Медиатека' url={MediaLogo}></IconText></li>
                    <li><IconText text='Главная' url={PlusLogo}></IconText></li>
                    <li><IconText text='Главная' url={LikeLogo}></IconText></li>
                </ul>
            </nav>
        </div>
    )
}

export { SideBar }