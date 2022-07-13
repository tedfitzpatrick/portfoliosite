import React from "react";

import SvgIconMapPointer from './../assets/svgiconmappointer';
import ImgHonorDisplay from './../assets/honordisplay.jpg';
import ImgScreenSmallPubs from './../assets/screen-small-pubs.png';
import ImgCode from './../assets/screen-code.png';
import ImgTed from './../assets/me3.jpg';

const HomeScreen = () => {

    return (
        
        <>
        <div className="tf-homedelivering"><p><SvgIconMapPointer /> Delivering prime UI</p></div>
        <div className="tf-mainwrapper">    
        <div className="tf-hero tf-herohome">
        <div className="tf-heroinner tf-heroinnerhome">
        <div className="tf-herotext">
        <h2>Portfolio showcase</h2>
        <h3>Featuring visuals, UI, and code</h3>
        </div>
        </div>
        </div>
        <div className="tf-cardsscroller">
        <div className="tf-cards">
        <div className="tf-card"><a href="/visuals">
            <h4>Visuals</h4>
            <div className="tf-cardimgwrapper"><img src={ImgHonorDisplay} alt="visuals" /></div>
            </a></div>
        <div className="tf-card"><a href="/ui">
            <h4>UI</h4>
            <div className="tf-cardimgwrapper"><img src={ImgScreenSmallPubs} alt="ui" /></div>
            </a></div>
        <div className="tf-card"><a href="/code">
            <h4>Code</h4>
            <div className="tf-cardimgwrapper"><img src={ImgCode} alt="code" /></div>
            </a></div>
        <div className="tf-card"><a href="/about">
            <h4>About</h4>
            <div className="tf-cardimgwrapper"><img src={ImgTed} alt="about" /></div>
            </a></div>
        </div>
        </div>
        </div>
        </>
        
        
    );
    }

export default HomeScreen;    