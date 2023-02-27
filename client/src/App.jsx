import './App.css';
import { SideBar } from './components/SideBar/SideBar';
import { PlayBar } from './components/PlayBar/PlayBar';
import { IconText } from './components/IconText/IconText';

function App() {
  return (
    <div>
      <div class="wrapper">

        <div class="content">
          <SideBar></SideBar>
        </div>

        <div class="footer"></div>
          <PlayBar></PlayBar>
      </div>
    </div>
  );
}

export default App;
