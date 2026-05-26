import './header.scss'
import logo from '../img/header/logo.png'
import { list } from './list';
import phone from '../img/header/phone.png'
import { useState } from 'react';
import All_button from './all_button';
import { NavLink, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



let menu_list
let style_on

function Header() {
 style_on = {
    background: '#A9845C',
}
const location = useLocation();
console.log(location.pathname)
if(location.pathname === '/catalog'){
  style_on = {
    background: "#3B3937",
    color: '#A9845C'
}
}
    
    const [isOpen , setOpen] = useState();
    const [mine , setMine] = useState(style_on);
    window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) { // Условие для скрытия меню при прокрутке вниз
    setOpen(false)
  } 
});



function atb() {
    setMine(style_on = {
    background: "#3B3937",
    color: '#A9845C'
})  
      
}
function atx() {
        setMine(  style_on = {
        background: '#A9845C',
        })  
       
}
console.log(mine)
   



    
  return (
      <header>
        <div className='container' >
            <Link to={'/'} onClick={atx}><img src={logo} className='header_logo' alt="" /></Link>
            <ul className={isOpen ? "active" : ""}>
                {menu_list=list.map(list =>
                <li className='.body_m'>
                <a href='#' onClick={() => setOpen(!isOpen)}>{list}</a>   
                </li>

                )}
                <div className='header_text'>
                    <p className='body_m' > 
                    support@sofiadoors.com
                </p>
                <h3 className='desctop_h5'> 
                    8 (800) 550-81-79
                </h3>
                </div>
                
                
            </ul>
                <Link to={'/catalog'} onClick={atb}><All_button
                style = {mine}
                text={'Каталог'} 
                /></Link>
                <img src={phone} className='phone' alt=''/>
                <div className={`line ${isOpen ? "active" : ""}`} onClick={() => setOpen(!isOpen)}>
                    <div className={`line_1 ${isOpen ? "active" : ""}`}>
                    </div>
                    <div className={`line_2 ${isOpen ? "active" : ""}`}>
                    </div>
                </div>

        </div>
        
          
      </header>
    
  );
}

export default Header;