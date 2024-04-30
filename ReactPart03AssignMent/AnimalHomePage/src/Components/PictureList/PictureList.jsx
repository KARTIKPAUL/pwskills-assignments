import { useEffect, useState } from "react";
import axios from 'axios'
import Picture from "../Picture/Picture";


function PictureList(){
    const [pictureList, setPictureList] = useState([]);
    const[isLoading,setIsLoading] = useState(true);
    const PICTURE_URL = 'https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20'
      async function downloadPicture(){
        setIsLoading(true);
        
          const response = await axios.get(PICTURE_URL);
          const picctureResults = response.data.photos;
          const res = picctureResults.map((picData) => {
            return{
              id: picData.id,
              title: picData.title,
              image: picData.url,
              des: picData.description
            } 
          }); 
          console.log(res);
          setPictureList(res);
          setIsLoading(false);
        }
        useEffect(() =>{
          downloadPicture();
        },[PICTURE_URL]);


    return (
        <div className='flex flex-wrap'>
        {(isLoading) ? "Loading...." : pictureList.map((p) => 
        <Picture title={p.title} image={p.image} key={p.id} id={p.id} des={p.des}/>)}
        </div>
    )
  }

export default PictureList;