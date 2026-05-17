import './vitrina.scss'
import { vitrina_nemu } from './vitrina_menu_data';
import dor1 from '../vitrina/vitrina_image/dor1.png'
import { vitrina_all_dors } from './vitrina_all_items_data';
import { vitrina_all_mebel } from './vitrina_all_items_mebel';
import Vitrina_item from './vitrina_item';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useState , useRef , useEffect } from 'react';



let vitriva_menu
let vitriva_item
let dveri
let slize


function Vitrina(rix) {
    const [tor , setTor] = useState("dveri");
    const [render , setRender] = useState(false)
    const ery = Math.max(document.documentElement.clientWidth)
   
   if(ery <= 390){
    console.log(390)
        if (tor == String('dveri')){
            slize = vitrina_all_dors.slice(0,4)
            if (render == true){
                slize = vitrina_all_dors
            } 
                
        }
        if (tor == String('mebel')){
            slize = vitrina_all_mebel.slice(0,4)
            if (render== true){
                slize = vitrina_all_mebel  
            } 
        }
    }else{
        if (tor == String('mebel')){
            slize = vitrina_all_mebel.slice(0,9)
            if (render == true){
                slize = vitrina_all_mebel  
            } 
        }
            if (tor == String('dveri')){
                slize = vitrina_all_dors.slice(0,9)
                if (render == true){
                    slize = vitrina_all_dors   
                }  
            }
        
   }
   
    function net(){
            setRender(true)
               
    }
  
  // Состояние: текущая выбранная категория
  
 
   const handleCategoryClick1 = (vit) => {
    setTor(vit.path);
    setRender(false);
     // Сбрасываем показ всех элементов при смене категории
  };
  return (
    <section >
        <div className='container vitrina'>
            <h1 className='desctop_h1'>
                Витрина товаров
            </h1>
            <div className='vitrina_menu'>
                {vitriva_menu = vitrina_nemu.map(vit =>
                    <a  className={tor === vit.path ? "active" : ""} onClick={() => handleCategoryClick1(vit)  } >{vit.type}</a>
                )}
            </div>
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
                {!render && (<div className='button button_down' onClick={net }>
                    Показать все
            </div>
        )}
            </div>
           
        </div>
    </section>
  );
}

export default Vitrina;