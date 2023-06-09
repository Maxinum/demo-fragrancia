import React from "react";
import './style.css'
const Loader = () => {

    return (
        <div className='bodyLoader'>
            <div className="loader">
                <div className="cell d-0"></div>
                <div className="cell d-1"></div>
                <div className="cell d-2"></div>
                <div className="cell d-1"></div>
                <div className="cell d-2"></div>
                <div className="cell d-2"></div>
                <div className="cell d-3"></div>
                <div className="cell d-3"></div>
                <div className="cell d-4"></div>
            </div>
        </div>
    )
}

export default Loader;