import React from "react";
import { useSelector } from "react-redux";

export const Users = () => {
    const msg = useSelector((state) => state.usersInfo.payload.msg)

    

    return (
        <div>
            <h1>{msg}</h1>
            
        </div>
    )
}


