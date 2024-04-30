import Picture from "../Components/Picture/Picture";
import PictureDetails from "../Components/PictureDetails/PictureDetails";
import PictureFrame from "../Components/PictureFrame/PictureFrame";
import { Routes , Route } from "react-router-dom";
function CustomRoutes(){
    return(
    
        <Routes>
            
                <Route path="/" element={<PictureFrame />}></Route>
                <Route path="/photos/:id" element={<PictureDetails />}></Route>
            
        </Routes>
        
    )
}
export default CustomRoutes;