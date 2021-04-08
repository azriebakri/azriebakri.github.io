import React from 'react';
import './index.scss'

import { useState, useEffect } from 'react';

function Bubble(props) {
    const [windowSize, setWindowSize] =   useState(props.windowSize);

    useEffect(() => {
        setWindowSize(props.windowSize);
        console.log("useEffect Triggered");
    }, [props.windowSize]);

    const checkProps = () => {

        let textDisplay = props.subheader !== null ? 
                <div className="text-container">
                    <div className="header-main"> {props.header} </div>
                    <div className="subheader-main"> {props.subheader} </div>
                </div> : 
                <h1 className="header-main-solo"> {props.header} </h1>

        let sideDisplay = props.yearFrom !== null ? 
                <h1 className="side-container"> {props.yearTo !== null ? `${props.yearFrom}-${props.yearTo}`:`${props.yearFrom}~`} </h1>
                :
                <img className="side-image" src={props.icon}/>
                    

        let element = 
            <>
                <>
                    {textDisplay}
                </>
                <>
                    {sideDisplay}
                </>
            </>

            return element;
    }

    const setGrid = () => {

        let temp = {...props.grid};
        let minWidth = "190px";

        if(windowSize.width <= 800){
            temp.span = 12;
            temp.column = 1
        }

        if(temp.row === undefined) {

            if(windowSize.width <= 511){
                return { width:"100%", minHeight:"42px", margin: "0 4px 9px 4px"};
            } else {
                return { minWidth:"230px", minHeight:"42px", margin: "0 4px 9px 4px"};
            }
        } else {
            return {gridColumn:`${temp.column}/span ${temp.span}`, gridRow:`${temp.row}`};
        }
    }

    return (
        <div className="bubble-container" style={setGrid()}>
            {checkProps()}
        </div>
    );
}

export default Bubble;