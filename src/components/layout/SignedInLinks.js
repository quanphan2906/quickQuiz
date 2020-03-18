import React from "react"
import { NavLink } from "react-router-dom"

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li> <NavLink to="/create"> New Quiz </NavLink> </li>
            <li> <NavLink to="/"> Quiz Market </NavLink> </li>
            <li> <NavLink to="/" className="btn btn-floating green darken-2"> BP </NavLink> </li>
        </ul>
    )
}

export default SignedInLinks