




function Vitrina_item(vit) {
 
  return (  
        <div className='item' style={vit.width}>
            <h3 className='body_l'>
                      {vit.firm} {vit.model}
                    </h3>
                    <h4 className={`body_l_bold`}  style={{color: vit.color}}>
                        {vit.price} ₽ <span>{vit.sale}</span>
                    </h4>
                    <img src={vit.photo} alt="" />
                    <div className='bottom'>
                        <div class="controls">
                        <span class="btn"></span>
                        <span class="btn"></span>
                        <span class="btn"></span>
                        <span class="btn"></span>
                        <span class="btn"></span>
                        </div>
                        <a href="#" >КУПИТЬ</a>
                    </div>
        </div>
    
  );
}

export default Vitrina_item;