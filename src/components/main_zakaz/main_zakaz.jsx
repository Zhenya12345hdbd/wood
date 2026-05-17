import './main_zakaz.scss'
import first from '../main_zakaz/main_zakaz_image/1.jpg'
import { zakaz } from './main_zakaz_data';
import Zakaz_item from './zakaz_item';

let zakaz_data

function Main_zakaz() {
 
  return (
    <section >
        <div className='container zakaz'>
            {zakaz_data = zakaz.map(zak =>
                <Zakaz_item
                h1={zak.h1}
                text_p={zak.text_p}
                text_h3={zak.text_h3}
                photo={zak.photo}
                />

            )}
          
        </div>
    </section>
  );
}

export default Main_zakaz;