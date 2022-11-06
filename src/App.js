import './App.css';
import { getAuth } from "firebase/auth";
import app from '../src/firebase/firebase.init'
import RegisterReactBootstrap from './components/RegisterReactBootstrap';

function App() {
  return (
    <div>
      <RegisterReactBootstrap></RegisterReactBootstrap>
    </div>
  );
}

export default App;
