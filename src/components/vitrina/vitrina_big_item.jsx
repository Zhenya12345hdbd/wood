import './vitrina.scss'
import { vitrina_nemu } from './vitrina_menu_data';
import dor1 from '../vitrina/vitrina_image/dor1.png'
import { vitrina_all_dors } from './vitrina_all_items_data';
import { vitrina_all_mebel } from './vitrina_all_items_mebel';
import Vitrina_item from './vitrina_item';

import { useState , useRef , useEffect } from 'react';



let vitriva_menu
let vitriva_item
let dveri
let slize


function Vitrina_big_item(rix) {
    
    const [tor , setTor] = useState("dveri");
    const [tor1 , setTor1] = useState(false);
    const [render , setRender] = useState(false)
    console.log(render)

    
  

    
     

    
    
    if (tor == String('mebel')){
        slize = vitrina_all_mebel.slice(0,9)
        
       

    }
     if (render== true){
            slize = vitrina_all_mebel 
            
            
    } 

    if (tor == String('dveri') ){

        slize = vitrina_all_dors.slice(0,9)
         if (render == true){
            slize = vitrina_all_dors
            
         
        }
        
        
    }
    function net(){
            setRender(!render) 
    }

   
  return (

            <div className='vitrina_items'>
                {vitriva_item = slize.map(vitr =>
                    <Vitrina_item
                    firm = {vitr.firm}
                    model = {vitr.model}
                    photo = {vitr.photo}
                    price = {vitr.price}
                    sale = {vitr.sale}  
                    color = {vitr.color}                  />
                )}
                     <div className='button button_down' onClick={net}>
                    Показать все
                    </div>
            </div>
            
 
  );
}

export default Vitrina_big_item;