
import './footer.scss'
import vk from './/footer_image/vk.png'
import det from './/footer_image/d.png'
import telegram from './/footer_image/telegram.png'
import logo from '../img/header/logo.png'



function Footer(rix) {
 
  return (
    <section >
        <div className='container footer'>
            <div className='footer_first'>
                <img src={logo} alt="" />
                <p className='desctop_body_l'>
                    Фабрика G&G. 2022
                </p>
                <p className='desctop_body_l'>
                    © Все права защищены
                </p>
            </div>
            <div className='footer_first'>
                <h4 className='desctop_h4 white'>
                    8 (800) 550-81-79
                </h4>
                <p className='desctop_body_l'>
                    м. Полежаевская
                </p>
                <p className='desctop_body_l'>
                   123154, г. Москва, пр-т. Маршала Жукова, д. 52, "Мебельный Центр"
                </p>
                <p className='desctop_body_l'>
                   support@sofiadoors.com
                </p>
            </div>
            <div className='footer_first none'>
                
                <p className='desctop_body_l'>
                    Межкомнатные двери
                </p>
                <p className='desctop_body_l'>
                    Мебель
                </p>
                <p className='desctop_body_l'>
                    Стеновые панели «Буазери»
                </p>
                <p className='desctop_body_l'>
                    Лестницы
                </p>
                <p className='desctop_body_l'>
                    Мебельные фасады
                </p>
            </div>
            <div className='footer_first none'>
                
                <p className='desctop_body_l'>
                    Доставка
                </p>
                <p className='desctop_body_l'>
                    Статьи
                </p>
                <p className='desctop_body_l'>
                    О нас
                </p>
                <p className='desctop_body_l'>
                               
                </p>
                <p className='desctop_body_l'>
                    Политика конфиденциальности
                </p>

            </div>
            <div className='footer_soc'>
                <img src={vk} alt="" />
                <img src={det} alt="" />
                <img src={telegram} alt="" />

            </div>
            </div>
    </section>
  );
}

export default Footer;