import React from "react";

function Header({title="dummy title"}){
    return (
        <>
        <h1 className="text-4xl text-green-400 hover:cursor-pointer hover:text-yellow-500 duration-200 font-bold text-center my-10">{title}</h1>
        </>
    )
}

export default Header;