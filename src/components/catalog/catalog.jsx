import right from '../catalog/catalog_image/1.png'
import './main_catalog.scss'
import Catalog_item from './catalog_item';
import { catalog_data } from './catalog_data';

let catalog 
function Main_catalog(rix) {

     
 
  return (
    <section>
        <div className='container catalog'>
            <h1 className='desctop_h1'>
                Каталог
            </h1>
            <div className='catalog_all'>
                  {catalog = catalog_data.map(rop =>
                <Catalog_item
                name={rop.name}
                photo = {rop.photo}
                size = {rop.size}
                
                />
            )}
            </div>
          
        </div>
   
    </section>
  );
}

export default Main_catalog;