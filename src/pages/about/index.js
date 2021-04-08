import React from 'react';
import { useState, useEffect } from 'react';

import "./index.scss";

import Bubble from '../../components/item-bubble/index';
import MeJPG from "../../assets/images/me.jpg";

import { skills } from '../../helper/skills';

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      // Add event listener
      window.addEventListener("resize", handleResize);
      
      // Call handler right away so state gets updated with initial window size
      handleResize();
      
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
  
    return windowSize;
}

function About(){

  const windowSize = useWindowSize();

    return(
        <div className="page-container">
            <section className="about-section">
                <div className="about-section-image animated animatedFadeInUp fadeInUp">
                    <img src={MeJPG}/>
                </div>
                <div className="about-section-text animated animatedFadeInUp fadeInUp">
                    <h1 className="about-header">
                        I’m Azrie, a fullstack developer who is 
                        currently working for ServiceRocket
                        as a software engineer in Kuala Lumpur, Malaysia.
                    </h1>
                    <div className="about-subheader">
                        I’ve spent the past 3 years+ working accross different areas of system development; 
                        front-end development for most part, mainly using Reactjs, back-end development with 
                        Nodejs/Express, databases as well with CI/CD. 
                    </div>
                    <div className="about-subheader">
                        Out of work hours, you’ll find me dreaming of bouldering and rock climbing, 
                        coding for fun, take photos here and there and picking up skills that would 
                        make me a better developer.
                    </div>
                </div>
            </section>
            <section className="history-section">
                <h1 className="history-section-title">
                    A brief history
                </h1>
                <div className="history-section-container">
                    <Bubble 
                        windowSize={{height: windowSize.height, width:windowSize.width}}
                        header="Multimedia University"
                        subheader="Bachelor of Computer Science"
                        yearFrom={12}
                        yearTo={17}
                        grid={{row:1, column:1, span:5}}
                    />
                    <Bubble 
                        windowSize={{height: windowSize.height, width:windowSize.width}}
                        header="Megasap"
                        subheader="Android Developer (Intern)"
                        yearFrom={16}
                        yearTo={17}
                        grid={{row:2, column:2, span:4}}
                    />
                    <Bubble 
                        windowSize={{height: windowSize.height, width:windowSize.width}}
                        header="Avanade"
                        subheader="Senior Analyst, Fullstack Dev"
                        yearFrom={17}
                        yearTo={20}
                        grid={{row:3, column:6, span:4}}
                    />
                    <Bubble 
                        windowSize={{height: windowSize.height, width:windowSize.width}}
                        header="ServiceRocket"
                        subheader="Software Engineer"
                        yearFrom={20}
                        yearTo={null}
                        grid={{row:4, column:10, span:3}}
                    />
                </div>
            </section>
            <section className="technical-section">
                <h1 className="technical-section-title">
                    Technology stack
                </h1>
                <div className="technical-section-container">
                {
                    Object.values(skills).map(val => {
                        return (
                            <Bubble 
                                windowSize={{height: windowSize.height, width:windowSize.width}}
                                header={val.header}
                                subheader={null}
                                yearFrom={null}
                                yearTo={null}
                                icon={val.icon}
                            />
                        )
                    })
                }

                </div>
            </section>
        </div>
    );
}

export default About;