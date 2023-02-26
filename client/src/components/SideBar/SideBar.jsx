import './SideBar.css'
import logo from './Group.svg'

const SideBar = () => {
    return (
        <div className="sidebar-full">
            <div className='main-logo'>
                <img src={logo}></img>
                <p className='logo-text'>Sound4Life</p>
            </div>
            <nav>
                <ul className='uk-nav-bar'>
                   <li className='menu-option'>Cock</li>
                   <li className='menu-option'>Cock</li>
                   <li className='menu-option'>Cock</li>
                   <li className='menu-option'>Cock</li>
                   <li className='menu-option'>Cock</li>
                    
                </ul>
            </nav>
        </div>
    )
}

export { SideBar }