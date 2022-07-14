import React from "react";


import ImgHonorDisplay from './../assets/honordisplay.jpg';
import ImgMemoriamSmall from './../assets/screen-small-memoriam.png';
import ImgMemoriamWide from './../assets/screen-wide-memoriam.png';
import ImgPMRWide from './../assets/screen-wide-pmr.png';
import ImgPMRSmall from './../assets/screen-small-pmr.png';
import ImgOrgWide from './../assets/screen-wide-org.png';
import ImgOrgSmall from './../assets/screen-small-org.png';

const VisualsScreen = () => {

    return (
        <div className="tf-mainwrapper">
        <h2>Visuals</h2>
        <p>Featuring three design-rich projects: a memorial, a newsletter, and an organizational chart.</p>
        <div className="tf-contentblocks">
        <div className="tf-contentblock">
         <h3>In Memoriam</h3>
         <p><a href="https://post.ca.gov/In-Memoriam">https://post.ca.gov/In-Memoriam</a></p>
         <p>The Commission on POST had a print-based memorial to fallen officers, and no sophisticated online memorial presentation. I proposed migrating to digital signage and a responsive online presence. Upon stakeholder buy-in, I researched systems and designed visual prototypes. Upon stakeholder approval, I worked with my colleagues to procure and deploy the physical signage components. I also developed two React-based presentations driven by a single JSON file: a responsive webpage with CSS3 animations and a fixed-layout format for signage. The result was a higher quality presentation of POST's memorials, and a more efficient process for doing so.</p>  
         <div className="tf-contentblockimages">
        <div className="tf-contentblockimage"><img src={ImgMemoriamWide} alt='' /><p>I used the IntersectionObserver API with animated CSS filters so that when an officer's portrait comes into view, it transitions from sepia-tone (tinted grayscale) to color, as if a memory returning.</p></div>
        <div className="tf-contentblockimage"><img src={ImgMemoriamSmall} alt='' /><p>The responsive small screen view.</p></div>
        <div className="tf-contentblockimage"><img src={ImgHonorDisplay} alt='' /><p>The digital signage is driven by the same JSON file as the webpage.</p></div>
        </div>
        </div>  
        <div className="tf-contentblock">
         <h3>POST Monthly Report</h3>
         <p><a href="https://post.ca.gov/June-2022-Report">https://post.ca.gov/June-2022-Report</a></p>
         <p>While this newsletter had migrated from print to digital several years before, it lacked an optimal responsive and semantic design as well as an easy editing experience for non-technical authors. I used Javascript, React, and SASS to transform "easy HTML" blocks into JSON then into a WCAG-compliant, more responsive layout. The result was easier maintenance, better accessibility, and nicer formatting.</p>
         <div className="tf-contentblockimages">
        <div className="tf-contentblockimage"><img src={ImgPMRWide} alt='' /><p>I used a background linear gradient and the "background clip" property to add subtle styling to the masthead branding.</p></div>
        <div className="tf-contentblockimage"><img src={ImgPMRSmall} alt='' /><p>The responsive small screen view.</p></div>
        </div>
        </div> 
        <div className="tf-contentblock">
         <h3>POST Organizational Chart</h3>
         <p><a href="https://post.ca.gov/org-structure">https://post.ca.gov/org-structure</a></p>
         <p>POST's organizational chart was published in the PDF format. Could it be made easier to edit and a better experience on mobile? Yes! I used Javascript, React, and CSS to generate a responsive, accessible presentation from simpler HTML. The result was faster maintenance and a nicer usear experience.</p>
         <div className="tf-contentblockimages">
        <div className="tf-contentblockimage"><img src={ImgOrgWide} alt='' /><p>I used CSS Flexbox extensively to make the chart web-native.</p></div>
        <div className="tf-contentblockimage"><img src={ImgOrgSmall} alt='' /><p>The responsive small screen view.</p></div>
        </div>
        </div>    
        </div>
        </div>
    );
    }

export default VisualsScreen;    