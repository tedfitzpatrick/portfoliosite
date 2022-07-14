import React from "react";

import ImgTed from './../assets/me3.jpg';

const AboutScreen = () => {

    return (
        <div className="tf-mainwrapper">
        <h2>About Me</h2>
        <div className="tf-contentblocks">
        <div className="tf-contentblock">
         <p>I'm a dad and love dad jokes. I live in northern California and I enjoy cooking, exercise, and all things geeky / nerdy.</p>  
         <div className="tf-contentblockimages">
        <div className="tf-contentblockimage"><img src={ImgTed} alt='' /></div>
        </div>
        </div>  
        </div>
        </div>
    );
    }

export default AboutScreen;    