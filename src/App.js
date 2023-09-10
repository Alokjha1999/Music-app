import './App.css';
import {Header} from './Components/Header';
import {Block} from './Components/Block';
import { Player } from './Components/Player';

function App() {
  return (
    <div className="App">
     <Header />
     <div className="blockbody">
        <Block />
     </div>
      <Player />
    </div>
  );
}

export default App;
