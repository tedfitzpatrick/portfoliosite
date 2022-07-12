import React from "react";

import SvgIconMapPointer from './../assets/svgiconmappointer';

const HomeScreen = () => {

    return (
        
        <>
        <div className="tf-homedelivering"><p><SvgIconMapPointer /> Delivering prime UI</p></div>
        <div className="tf-mainwrapper">    
        <div className="tf-hero tf-herohome">
        <h1>Home Screen</h1>
        </div>
        <div className="tf-cards">
        <div className="tf-card">Visuals</div>
        <div className="tf-card">UI</div>
        <div className="tf-card">Code</div>
        <div className="tf-card">About</div>
        </div>
        </div>
        </>
        
        
    );
    }

export default HomeScreen;    