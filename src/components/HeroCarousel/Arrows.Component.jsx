import React from "react";

export function NextArrow(props){
    return(
        <>
            <div className={props.className} style={{...props.style}} onClick={props.onClick}></div>        
        </>
    )
}

export function PrevArrow(props) {
{/* <div style={} className=""></div> */}
 return(
        <>
            <div className={props.className} style={{...props.style}} onClick={props.onClick}></div>        
        </>
    )
}