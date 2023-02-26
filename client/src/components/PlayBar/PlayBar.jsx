import './PlayBar.css'
import  play from './resources/play.svg'
import label from './resources/TestLabel.jpg'

const PlayBar = () => {
    return (
            <footer className="player-footer">
                <div className='footer-track-info'>
                    <img src={label} className='label-img-footer'></img>
                    <div className='song-name-footer'>
                    <p>Test</p>
                    <p>Suck</p>
                    </div>
                    
                </div>
                <div className='music-player-middle'>
                    <div className='player-control-buttons'>
                        <button className='left-switch-track-button'></button>
                        <button className='play-track-button'></button>
                        <button className='right-switch-track-button'></button>   
                    </div>
                <div class="music-slide-container">
                    <input type="range" min="1" max="100" value="50" class="mus-slider" id="musicSlider"></input>
                </div>
                </div>
                <div class="volume-slide-container">
                    <input type="range" min="1" max="100" value="50" class="vol-slider" id="volumeSlider"></input>
                </div>

            </footer>
    )
}

export { PlayBar }