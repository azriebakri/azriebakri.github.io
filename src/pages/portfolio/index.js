import React, { useState, useEffect } from 'react';
import './index.scss';

import Animation from '../../components/svg-animation/index';
import Slider from '../../components/portfolio-slider/index';
import portfolio from './portfolio-list';


function Portfolio() {

    const [clickedImage, setClickedImage] = useState(null);

    useEffect(()=>{

        let modal = document.getElementById("modal");

        if(clickedImage !== null){
            modal.style.display = "block";
        } else {
            modal.style.display = "none";
        }
        
    }, [clickedImage])

    return(
        <div className="page-container">
            <section className="portfolio-section">
                <div className="portfolio-section-text animated animatedFadeInUp fadeInUp">
                    <h1 className="portfolio-header">
                        Portfolio
                    </h1>
                    <div className="portfolio-subheader">
                        A collection of previous projects designs and outputs.
                    </div>
                </div>
                <div className="portfolio-section-animation animated animatedFadeInUp fadeInUp">
                    <div className="animation-container">
                        <Animation/>
                    </div>
                </div>
            </section>
            {
                portfolio.map( e => {
                    return (<section className="portfolio-section">
                        <div className="portfolio-section-text animated animatedFadeInUp fadeInUp">
                            <h1 className="portfolio-header">
                                {e.name}
                            </h1>
                            <div className="portfolio-subheader">
                                {e.summary}
                            </div>
                            <h3>
                                Responsibilities
                            </h3>
                            <div className="portfolio-res">
                                {e.res}
                            </div>
                        </div>
                        <div className="portfolio-section-animation animated animatedFadeInUp fadeInUp">
                            <div className="slider-container">
                                <Slider images={e.images} setClickedImage={setClickedImage}/>
                            </div>
                        </div>
                    </section>)
                })
            }
            <div id="modal" class="modal">
                <span class="close" onClick={()=>{setClickedImage(null)}}>&times;</span>
                <img class="modal-content" src={clickedImage}/>
                <div id="caption"></div>
            </div>
        </div>
    )
}

export default Portfolio;