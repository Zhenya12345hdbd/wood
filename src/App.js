import './remove.scss'
import './main.scss'
import './variables.scss'
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';

import Header from './components/header/header';
import Vitrina from './components/vitrina/vitrina';
import Main from './pages/main';
import Vitrina_item from './components/vitrina/vitrina_item';
import Footer from './components/footer/footer';
import Catalog from './pages/catalog';

function App() {
 
  return (
    <div>
      <Header/>
       <Routes>
          <Route  path="/" element={<Main />}/> 
          <Route  path="/catalog" element={<Catalog />}/> 
        </Routes>

       <Footer/>
      
    </div>
  );
}

export default App;
