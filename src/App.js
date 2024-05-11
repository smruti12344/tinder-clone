

import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import SwipeButtonComponent from './Components/SwipeButtonComponent';
import Tindercard from './Components/TinderCard';

function App() {
  return (
    <div className="App">
       {/* <h1>Lets build the MERN Tinder Clone</h1> */}
       {/* Header */}
       <HeaderComponent/>
       {/* TinderCards */}
       <Tindercard/>
       {/* SwipeButtons */}
       <SwipeButtonComponent/>
       
    </div>
  );
}

export default App;
