
import Main_catalog from "../components/catalog/catalog";
import { useParams } from "react-router-dom";
import All_items_page from "../components/all_items_page/all_items_pages";
import { catalog_data } from "../components/catalog/catalog_data";

function Catalog_big() {

  const { link } = useParams()
  
  const user1 = catalog_data.find((user1) => user1.link === String(link));
  
  
  
  return (
    <div>
         <All_items_page
         name = {user1.name}
         />

    </div>
    
  );
}

export default Catalog_big;