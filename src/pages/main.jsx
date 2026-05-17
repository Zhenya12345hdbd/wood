import Carousel from "../components/carousel/carousel";
import Main_zakaz from "../components/main_zakaz/main_zakaz";
import Vitrina from "../components/vitrina/vitrina";
import { useParams } from "react-router-dom";
import { vitrina_all_dors } from "../components/vitrina/vitrina_all_items_data";
import Help from "../components/help/help";
let user

function Main() {
  
  
  
  
  
  return (
    <div>
        <Carousel/>
        <Main_zakaz/>
        <Vitrina />
        <Help/>

    </div>
    
  );
}

export default Main;