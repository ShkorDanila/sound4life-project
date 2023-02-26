import './App.css';
import { SideBar } from './components/SideBar/SideBar';
import { PlayBar } from './components/PlayBar/PlayBar';
import { IconText } from './components/IconText/IconText';

function App() {
  return (
    <div className="vertical-layer-1">
      <div>
        <SideBar></SideBar>

      </div>
      <PlayBar></PlayBar>
    </div>
  );
}

export default App;
