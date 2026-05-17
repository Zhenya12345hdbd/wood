import './remove.scss'
import './main.scss'
import './variables.scss'
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';

import Header from './components/header/header';
import Vitrina from './components/vitrina/vitrina';
import Main from './pages/main';
import Vitrina_item from './components/vitrina/vitrina_item';

function App() {
 
  return (
    <div>
      <Header/>
       <Routes>
          
          <Route  path="/" element={<Main />}>
            
          </Route>
          
          
          

        </Routes>

       
      
    </div>
  );
}

export default App;
