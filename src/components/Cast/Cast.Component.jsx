import React from "react";

const Cast = (props) => {
    return<div>
        <div className="flex flex-col items-center">
            <div className="w-32 h-32">
                {/* <h1>hey test</h1> */}
                <img src={`https://image.tmdb.org/t/p/original${props.image}`} alt="cast n crew" className="w-full h-full rounded-full object-center" />
            </div>
            <h1 className="text-xl text-gray-800">{props.castName}</h1>
            <h5 className="text-sm text-gray-500"> as {props.role}</h5>
        </div>
    </div>
};

export default Cast;