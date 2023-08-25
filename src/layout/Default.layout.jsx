import React from "react";
import Navbar from "../components/Navbar/Navbar.Component";

// ... Spread Opaertor
const DefaultLayoutHoc = (Component) => 
    ({...props}) =>{
    return( 
    <div>
        <Navbar />
        <Component {...props} />
        <div>Footer</div>
    </div>)
};


export default DefaultLayoutHoc;