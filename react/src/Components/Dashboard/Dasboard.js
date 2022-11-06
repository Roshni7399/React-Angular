import React from 'react'
import { useSelector } from "react-redux";
import '../Dashboard/Dashboard.css'


export default function Dasboard() {
    const userdata = useSelector((state) => state.auth);

    return (
        <>
            <br /><br />
            <div class="container">
                <span class="mytext1">Welcome back !!!</span>
                <span class="mytext2"> {userdata.data.payload.result.firstname} </span>
            </div>
        </>
    )
}
