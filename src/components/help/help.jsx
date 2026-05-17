import './help.scss'
import help from ".//help_image/help.png"
import All_button from '../header/all_button';


function Help(rix) {
    
   
 
  return (

           <section >
        <div className='container help'>
            <img src={help} alt=''/>     
            <div className='help_text'>
                <h1 className='desctop_h1'>
                    Нужна помощь с выбором?
                </h1>
                <h3 className='desctop_h6'>
                    Наши специалисты с радостью помогут Вам, оставьте свой номер телефона!
                </h3>
                <div className='help_form'>
                    <input type='text' className='body_l' placeholder='Как вас зовут?'/>
                    
                    <input type='text' className='body_l' placeholder='Ваш телефон'/>
                    <All_button
                    text={'Связаться с нами'}
                    />
                </div>
                
            </div>      
        </div>
    </section>
            
 
  );
}

export default Help;