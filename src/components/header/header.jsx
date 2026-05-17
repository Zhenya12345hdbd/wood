import './header.scss'
import logo from '../img/header/logo.png'
import { list } from './list';
import phone from '../img/header/phone.png'
import { useState } from 'react';
import All_button from './all_button';


let menu_list


function Header() {
    const [isOpen , setOpen] = useState();
    window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) { // Условие для скрытия меню при прокрутке вниз
    setOpen(false)
  } 
});


    
  return (
      <header>
        <div className='container' >
            <img src={logo} className='header_logo' alt="" />
            <ul className={isOpen ? "active" : ""}>
                {menu_list=list.map(list =>
                <li className='.body_m'>
                <a href='#' onClick={() => setOpen(!isOpen)}>{list}</a>   
                </li>

                )}
                <div className='header_text'>
                    <p className='body_m'> 
                    support@sofiadoors.com
                </p>
                <h3 className='desctop_h5'> 
                    8 (800) 550-81-79
                </h3>
                </div>
                
                
            </ul>
                <All_button
                text={'Каталог'}
                />
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