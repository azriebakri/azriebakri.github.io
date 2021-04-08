import React from "react";
import './index.scss';

import {Link, useLocation } from "react-router-dom";

import {  ReactComponent as GithubIcon } from "../../assets/icons/github.svg";
import {  ReactComponent as LinkedInIcon }  from "../../assets/icons/linkedin.svg";

const Selected = (path) => { 
    
    // let check = true; 
    let check = !!(useLocation().pathname === path); 
    let iconPath = check ? "span-selected" : "span-default";
  
    return iconPath
}

function Topbar (){
    return(
    <div className="container-topbar">
        <div className="container-navigation">
            <div className="container-navigation-item">
                <Link to="/work">
                    <span className={Selected("/work")}>
                        Work
                    </span>
                </Link>
            </div>
            <div className="container-navigation-item">
                <Link to="/about">
                <span className={Selected("/about")}>
                        About
                    </span>
                </Link>
            </div>
            <div className="container-navigation-item">
                <a href="#" onClick={(e) => {
                    if(window.tidioChatApi){
                        window.tidioChatApi.open();
                    } else {
                        console.log("chat not yet ready");
                    }
                }}>
                    <span className="span-default"> 
                        Contact
                    </span>
                </a>
            </div>
        </div>
        <div className="container-links">
            <div className="container-links-item" onClick={() => window.open('https://www.linkedin.com/in/azriebakri/', "_blank") || window.location.replace('https://www.linkedin.com/in/azriebakri/')}>
                <LinkedInIcon/>
            </div>
            <div className="container-links-item" onClick={() => window.open('https://github.com/azriebakri', "_blank") || window.location.replace('https://www.instagram.com/_azriebakri/')}>
                <GithubIcon/>
            </div>
        </div>
    </div>
    )
}

export default Topbar;