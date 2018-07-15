import React from "react";

import "../../assets/css/headerCardStyle.css"

const HeaderCard = ({ ...props }) => {
    
  const {
    orgName,
    orgUrl,
    orgLocation,
    avatarUrl,
  } = props;

  return (

    <div className="wrapper">

        <div className="rowGroup">

            <div className="aside" >            
                <img src={ avatarUrl } alt="{ orgName }" className="logo"/>
            </div>

            <div className="info">
                <div>
                    <h2> { orgName } </h2>
                </div>
                <div>
                    <icon className="ic-loc ic"></icon> <span className="location" > { orgLocation } </span>
                </div>
                <div>
                    <icon className="ic-url ic"></icon> <a href={ orgUrl }> { orgUrl } </a>
                </div>                
            </div>

        </div>
        
    </div>
  );
}

export default (HeaderCard);
