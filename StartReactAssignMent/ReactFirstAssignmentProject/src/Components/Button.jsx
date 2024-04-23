import React from "react";

function Button({text="Click Here" , onClick}){
    return(
        <>
        <div className="flex justify-center my-10">
        <button className="border bg-black text-white px-5 py-2 text-xl rounded hover:bg-green-300 hover:text-black w-fit" onClick={onClick}>{text}</button>
        </div>
        </>
    )
}

export default Button