import React from "react";
function Person({name="Dummy" , age=null}){
    return(
        <>
           <p className="text-2xl text-green-400 hover:cursor-pointer hover:text-yellow-500 duration-200 font-bold text-center my-10">Name is : {name}, And Age is : {age}</p> 
        </>
    )
}

export default Person;