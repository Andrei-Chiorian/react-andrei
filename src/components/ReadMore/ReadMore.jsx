import React, { useState } from "react";
import './ReadMore.css'
 
const ReadMore = (descText) => {
    const text = descText.descText;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
        
    };    
    return (
        <p className="text">
            {isReadMore ? text.slice(0, 120) : text}
            <span
                onClick={toggleReadMore}
                className="read-or-hide"
                style={{ color: "green" }}
            >
                <br />{isReadMore ? " ...read more" : " show less"}
            </span>
        </p>
    );
};
 
const DescContent = (desc) => {    
    return (
        <div className="desc-container">
            {/* <h2> */}
                <ReadMore descText = {desc.desc}/>         
            {/* </h2> */}
        </div>
    );
};
 
export default DescContent;