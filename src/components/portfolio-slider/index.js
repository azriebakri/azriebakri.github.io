import React, { useState, useEffect, props } from 'react';
import './index.scss';

import SimpleImageSlider from "react-simple-image-slider";

const Slider = (props) => {


    return(
        <div className="container">
                <SimpleImageSlider
                    images={props.images}
                    showBullets={true}
                    onClick={(idx, event) => { 
                        props.setClickedImage(props.images[idx].url);
                    }}
                />
        </div>

    );
}

export default Slider;