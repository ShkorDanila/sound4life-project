import './PlayBar.css'
import  play from './resources/play.svg'
import label from './resources/TestLabel.jpg'

const PlayBar = () => {
    return (
           <footer className='footer-layout'>
            <div className='playing-song-info'>
                <img src={label} className='label-img'></img>
            </div>
            
           </footer>
    )
}

export { PlayBar }