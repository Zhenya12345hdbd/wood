import './all_items_page.scss'
import Vitrina_item from '../vitrina/vitrina_item';
import { vitrina_all_dors } from '../vitrina/vitrina_all_items_data';
import { vitrina_all_mebel } from '../vitrina/vitrina_all_items_mebel';
import { vitrina_nemu } from '../vitrina/vitrina_menu_data';
import { useState } from 'react';
let vitriva_menu


let items
let slize
const width = {
  width : '290px'
}

function All_items_page(tic) {

     const [tor , setTor] = useState(tic.ler);
     const [tor1 , setTor1] = useState(tic.name);
      const [render , setRender] = useState(false)
      const ery = Math.max(document.documentElement.clientWidth)
     
     if(ery <= 390){
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
     
      
    
    // Состояние: текущая выбранная категория
    
   
     const handleCategoryClick1 = (vit) => {
      setTor(vit.path);
      setTor1(vit.type)
      
      
      
    };

    
  return (
    <section>
      <div className='container all_cat'>
          <h1 className='desctop_h1'>{tor1}</h1>
          <div className='full'>
            <div className='all_left'>
              <div className='menu_all_cat'>
                {vitriva_menu = vitrina_nemu.map(vit =>
                                    <a  className={tor === vit.path ? "active2" : ""} onClick={() => handleCategoryClick1(vit)  } >{vit.type}</a>
                                )}

              </div>
              <div className='all_price'>
                <h3 className='desctop_l_bold'>
                  Ценовой диапазон
                </h3>
                <div className='pole'>
                  <input type="text" />
                  <input type="text" />

                </div>
                <input type="range" />

              </div>

            </div>
            <div className='all_right'>
             {items = slize.map(nuy =>
                <Vitrina_item
                  firm = {nuy.firm}
                    model = {nuy.model}
                    photo = {nuy.photo}
                    price = {nuy.price}
                    sale = {nuy.sale}  
                    color = {nuy.color}
                    width = {width}
                />

             )}

            </div>

          </div>
      </div>
        

       
    </section>
  );
}

export default All_items_page;