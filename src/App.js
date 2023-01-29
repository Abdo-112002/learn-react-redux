
import { useSelector } from 'react-redux';
import './App.css';
import QuantityBtn from './component/QuantityBtn';

function App() {

  const globalState = useSelector((state) => state);
  console.log(globalState)

  
  return (
    <div className="App">
        <QuantityBtn>
           hello redux counter value : {globalState.value}
        </QuantityBtn>

        

        
    </div>
  );
}

export default App;
