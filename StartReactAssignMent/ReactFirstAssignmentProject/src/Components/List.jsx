import React from "react";

function List({items}){
    return(
        <>
        <ul className="text-center text-2xl text-green-400 hover:cursor-pointer hover:text-yellow-500 duration-200"> {items}
            <li>1.Mumbai</li>
            <li>2.Delhi</li>
            <li>3.Kolkata</li>
            <li>4.Chennai</li>
        </ul>
        </>
    )
}

export default List