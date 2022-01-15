import {useState} from 'react';
import SortingVisualizer from "./component/SortingVisualizer";
import MainScreen from './component/MainScreen';

function App() {

  const [enter, setEnter] = useState(false);

  return (
    <div>
      {!enter ? <MainScreen setEnter={setEnter} /> : ""}
      <SortingVisualizer />
    </div>
  );
}

export default App;
