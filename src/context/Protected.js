import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "./AuthContext";

const Protected = ({children}) =>{
    const {user} = UserAuth()
    if(user == null){
        return <Navigate to='/loginpage' />;
    }
    return children
}
export default Protected;