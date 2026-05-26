import right from '../catalog/catalog_image/1.png'
import { Link } from 'react-router-dom';


function Catalog_item(rix) {

     
 
  return (
    
            <Link to={`/${rix.link}`}><div className={`catalog_item ${rix.size} ${rix.photo}`}>
                <h2 className='desctop_h4'>
                    {rix.name}
                </h2>
                <div className='img'></div>
            </div></Link>
 
  );
}

export default Catalog_item;