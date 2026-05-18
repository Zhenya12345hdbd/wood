import All_button from '../header/all_button';
import './new_statia.scss'
import first from '../new_statia/statia_image/1.png'
import { staia_items_data } from './new_statia_data';



function New_statia_item(rix) {
 
  return (
            
                <div className='new_item'>
                    <img src={rix.photo}/>
                        <div className='item_text'>
                            <h3 className='desctop_h5'>
                            {rix.text_bold}
                        </h3>
                        <p className='body_xs'>
                            {rix.text_thin}    </p>
                        <div className='new_low'>
                            <a className='body_xs_bold'>Читать далее</a>
                            <h4 className='body_xs'>
                                {rix.date}
                            </h4>
                        </div>
                    </div>
                </div>
                
    
  );
}

export default New_statia_item;