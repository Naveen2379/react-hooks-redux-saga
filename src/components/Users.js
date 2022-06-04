import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { requestAPIData } from "../actions";

export const Users = () => {
    const msg = useSelector((state) => state.usersInfo.payload.msg)
    const dispatch = useDispatch()

    fetchUsers = () => {
        dispatch(requestAPIData());
    }

    return (
        <div>
            <h1>{msg}</h1>
            <Button onClick={fetchUsers}>List Users</Button>
        </div>
    )
}


