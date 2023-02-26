import './App.css';
import { SideBar } from './components/SideBar/SideBar';
import { PlayBar } from './components/PlayBar';

function App() {
  return (
    <div className="vertical-layer-1">
      <div>
          <SideBar/>

          <div>

          </div>

      </div>
      <PlayBar></PlayBar>
    </div>
  );
}

export default App;
