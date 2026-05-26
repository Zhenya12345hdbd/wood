import './all_items_page.scss'
import Vitrina_item from '../vitrina/vitrina_item';
import { vitrina_all_dors } from '../vitrina/vitrina_all_items_data';


let items
const width = {
  width : '290px'
}

function All_items_page(tic) {

    
  return (
    <section>
      <div className='container all_cat'>
          <h1 className='desctop_h1'>{tic.name}</h1>
          <div className='full'>
            <div className='all_left'>

            </div>
            <div className='all_right'>
             {items = vitrina_all_dors.map(nuy =>
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