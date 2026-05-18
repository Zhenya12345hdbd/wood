import All_button from '../header/all_button';
import './new_statia.scss'
import first from '../new_statia/statia_image/1.png'
import { staia_items_data } from './new_statia_data';
import New_statia_item from './new_statia_item';

let statia

function New_statia(rix) {
 
  return (
    <section >
        <div className='container new'>
            <div className='new_text'>
                 <h1 className='desctop_h1'>
                     Новые статьи
                </h1>
                <a>Все статьи</a>
            </div>
            <div className='container main'>
               {statia = staia_items_data.map(nex => 

                <New_statia_item
                photo={nex.photo}
                text_bold={nex.text_bold}
                text_thin={nex.text1_thin}
                date={nex.date}

                
                
                />
               )}
                
            </div>
       
           
        </div>
   
    </section>
  );
}

export default New_statia;