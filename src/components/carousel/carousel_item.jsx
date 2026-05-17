import All_button from "../header/all_button";



function Carousel_item(item) {
    
    
  return (
    
            <div className='all' id={item.id}>
                <h2 className='desctop_h3'>
                Classic Wood Stile
            </h2>
            <h4 className='desctop_h5'>
                enterior-exterior
            </h4>
            <p className='body_m_bold'>
                {item.text1}
            </p>
            <All_button
                text={'ПОДРОБНЕЕ'}
            />
            </div>
           
 
  );
}

export default Carousel_item;