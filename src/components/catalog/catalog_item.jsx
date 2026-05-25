import right from '../catalog/catalog_image/1.png'


function Catalog_item(rix) {

     
 
  return (
    
            <div className={`catalog_item ${rix.size} ${rix.photo}`}>
                <h2 className='desctop_h4'>
                    {rix.name}
                </h2>
                <div className='img'></div>
            </div>
 
  );
}

export default Catalog_item;