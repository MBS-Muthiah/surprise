import logo from './logo.svg';
import Greeting from './greeting';
import Celebration from './celebration';
import Cake from './cakeanimation';
import Surprise from './suprise';
import './App.css';

const App=()=> {
  return (
    <div>
      <Celebration/>
      <Greeting />
      <Cake/>
      <Surprise/>
    </div>
  );
}

export default App;
