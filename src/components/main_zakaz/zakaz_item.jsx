

function Zakaz_item(zakaz) {
 
  return (
            <div className='main_item'>
                <img src={zakaz.photo} alt="" />
                <h1 className='desctop_h3'>
                    {zakaz.h1}
                </h1>
                <p className='body_m'>
                    {zakaz.text_p}
                </p>
                <a href="#" className='button'>
                   {zakaz.text_h3}
                </a>
            </div>
           
  );
}

export default Zakaz_item;