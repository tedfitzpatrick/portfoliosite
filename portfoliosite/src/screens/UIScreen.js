import React from "react";

import ImgPubsWide from './../assets/screen-wide-pubs.png';
import ImgPubsSmall from './../assets/screen-small-pubs.png';
import ImgAccordion from './../assets/screen-accordion.png';
import ImgToggle from './../assets/uitoggle.png';





const UIScreen = () => {

    return (
        <div className="tf-mainwrapper">
        <h2>User Interface</h2>
        <p>Featuring a publications browser, an accordion widget, and a toggle control.</p>
        <div className="tf-contentblocks">
        <div className="tf-contentblock">
         <h3>Publications</h3>
         <p><a href="https://post.ca.gov/Publication-List">https://post.ca.gov/Publication-List</a></p>
         <p>The Commission on POST's publications were listed online with an outdated carousel widget, and no cover image preview. I proposed an improved version via visual designs. Upon stakeholder buy-in, I made front-end modules using Javscript, React, and CSS. The result was a more usable, responsive, and accessible carousel widget and publications listing.</p>  
         <div className="tf-contentblockimages">
        <div className="tf-contentblockimage"><img src={ImgPubsWide} alt='' /><p>The new publications listing features React-powered controls: sorting, revealing, sharing.</p></div>
        <div className="tf-contentblockimage"><img src={ImgPubsSmall} alt='' /><p>The responsive small screen view, with revealed publication details.</p></div>
        </div>
        </div>  
        <div className="tf-contentblock">
         <h3>Accordion Widget</h3>
         <p><a href="https://post.ca.gov/Monthly-Reports">https://post.ca.gov/Monthly-Reports</a></p>
         <p>POST's accordion widgets were hard to maintain and didn't meet WCAG accessibility standards. Using Javascript, React, and CSS I made a front-end module that transformed simpler HTML (with data-attributes for configuration) into accessible accordions. The result was easier maintenance and compliance with WCAG accessibility standards.</p>
         <div className="tf-contentblockimages">
        <div className="tf-contentblockimage"><img src={ImgAccordion} alt='' /><p>The new accordion widget uses a configured heading level in its toggle controls, and is keyboard-navigable.</p></div>
        </div>
        </div> 
        <div className="tf-contentblock">
         <h3>Toggle Control</h3>
         <p>The State of California's design system didn't have a toggle control, yet a toggle would be the best control for a binary state. A toggle needed to be made. Using React and CSS, I made a WCAG-compliant toggle module and deployed it in a user settings module.</p>
         <div className="tf-contentblockimages">
        <div className="tf-contentblockimage"><img src={ImgToggle} alt='' /><p>Mobile platforms made the toggle control ubiquitous for settings.</p></div>
        </div>
        </div>    
        </div>
        </div>
    );
    }

export default UIScreen;    