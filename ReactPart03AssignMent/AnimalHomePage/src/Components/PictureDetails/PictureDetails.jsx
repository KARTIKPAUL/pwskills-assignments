import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
function PictureDetails(){

    const{id} = useParams();
    console.log(id);
    const[picture,setPicture] = useState({});
    const PICTURE_URL = `https://api.slingacademy.com/v1/sample-data/photos/${id}`;
    async function downLoadPicture(){
        const responce = await axios.get(PICTURE_URL);
        const data = responce.data;
        console.log(data);

            setPicture({
                id: data.photo.id,
                title: data.photo.title,
                image: data.photo.url,
                des: data.photo.description
            })
    }
    useEffect(() =>{
        downLoadPicture();
    },[PICTURE_URL]);

    return(

        <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg p-6">
        <img src={picture.image} alt="" className="w-full h-auto mb-4 rounded-lg" />
        <div className="text-gray-800">
          <div className="font-bold mb-2"><span className="font-bold">Id:</span> {picture.id}</div>
          <div className="mb-2"><span className="font-bold">Title:</span> {picture.title}</div>
          <div className=""><span className="font-bold">Description:</span> {picture.des}</div>
        </div>
      </div>
      
    )
}

export default PictureDetails;

