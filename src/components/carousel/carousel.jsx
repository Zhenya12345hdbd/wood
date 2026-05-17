import './carousel.scss'
import carousel from '../carousel/carousel_image/carousel.jpg'
import All_button from '../header/all_button';
import { carousel_data } from './carousel_data';
import Carousel_item from './carousel_item';
import { useState , useRef, useEffect } from 'react';

let carousel_all

function Carousel() {
  const boxRef = useRef();
  const [width, setWidth] = useState(0);
  const elemCount = document.querySelectorAll("div.all").length;
  useEffect(() => {
    setWidth(boxRef.current.getBoundingClientRect().width);
  },); // пустой массив зависимостей, выполняется один раз при монтировании 
    let all_block = document.querySelector('.Carousel_text')
    const [count , setCount] = useState(1)
      function click_right(){
        setCount(count+1)
    let all_block = document.querySelector('.Carousel_text')
     
       all_block.scrollBy({
            left: width,
            behavior:"smooth"
        })  
        if(count >= elemCount){
          setCount(count - elemCount +1)
            all_block.scrollBy({
            left: -width * elemCount,
            behavior:"smooth"
        })  
        }
        
 }
   function click_left(){
        setCount(count-1)
    let all_block = document.querySelector('.Carousel_text')
       all_block.scrollBy({
            left: -width,
            behavior:"smooth"
        })
        if(count <= 1){
          setCount(count + elemCount -1 )
            all_block.scrollBy({
            left: width * elemCount,
            behavior:"smooth"
        })  
    }
  }
     
     
          
        
    
    
  return (
    <section className='carousel'>
        <div className='Carousel_text' ref={boxRef}> 
            {carousel_all = carousel_data.map(car =>
                <Carousel_item
                    id ={car.id}
                    text={'ПОДРОБНЕЕ'}
                    text1={car.text1}
            />
            )}
        </div>
        <div className='carousel_num'>
                <h4 className='body_m'>{count} - {elemCount}</h4>
                <div className='carousel_button'>
                    <div className='arrow left' onClick={click_left}>&larr;</div>
                    <div className='arrow right' onClick={click_right}>&rarr;</div>

                </div>

            </div>
        
       
    </section>
  );
}

export default Carousel;