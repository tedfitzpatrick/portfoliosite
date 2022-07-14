import React from "react";

import ImgEntry from './../assets/code-bundle-entry.png';
import ImgGoogle from './../assets/code-bundle-google.png';
import ImgOptional from './../assets/code-bundle-optional.png';
import ImgPhases from './../assets/code-bundle-phases.png';
import ImgTemplate from './../assets/code-bundle-template.png';
import ImgUtils from './../assets/code-bundle-utils.png';
import ImgReact from './../assets/code-react.png';
import ImgWebpackMagic from './../assets/code-webpackmagic.png';
import ImgWebpackSplitChunks from './../assets/code-webpacksplitchunks.png';

const CodeScreen = () => {

    return (
        <div className="tf-mainwrapper">
        <h2>Code</h2>
        <p>Featuring a more powerful, state-driven UI system.</p>
        <div className="tf-contentblocks">
        <div className="tf-contentblock tf-contentblocksingleton">
         <h3>Modularized template for https://post.ca.gov</h3>
         <p>The front-end template for POST's main website couldn't style all UI output by the CMS and server modules. The template made it difficult for non-technical content maintainers to author sophisticated, WCAG-compliant content. There was no standardized way to quickly make and deploy new UI features.</p><p>The task was to engineer a front-end template to address these issues.</p><p>I made a UI template system based upon Webpack modules that transpiled into small, independently cacheable bundles. All of these modules use ES6 Javascript, many use React and SASS to render UI elements. Some modules are global, many are dynamically downloaded at runtime if they're required.</p><p>The result was a UI system that:</p>
         <ul>
            <li>Standardized feature creation structures, enabling faster development</li>
            <li>Implemented a facade layer to translate CMS output and "easy authoring html" into standardized and WCAG-compliant UI components</li>
            <li>Improved caching by splitting features into independently deployable module bundles</li>
            </ul>  
         <div className="tf-contentblockimages">
        <div className="tf-contentblockimage"><img src={ImgEntry} alt='' /><p>"Entry" is the Webpack name for the main script and module loader.</p></div>
        <div className="tf-contentblockimage"><img src={ImgOptional} alt='' /><p>I made a module that determines which optional modules to load.</p></div>
        <div className="tf-contentblockimage"><img src={ImgWebpackMagic} alt='' /><p>Webpack provides a "magic comments" syntax to configure optionally loaded modules.</p></div>
        <div className="tf-contentblockimage"><img src={ImgTemplate} alt='' /><p>One kind of optional module is for the screen's layout.</p></div>
        <div className="tf-contentblockimage"><img src={ImgGoogle} alt='' /><p>Some modules make calls to external APIs.</p></div>
        <div className="tf-contentblockimage"><img src={ImgWebpackSplitChunks} alt='' /><p>Some modules are global via splitchunks in webpack.config.</p></div>
        <div className="tf-contentblockimage"><img src={ImgPhases} alt='' /><p>My UI system uses Event Emitters and Promises to establish loading phases: for example to transform DOM elements into structures expected by the main design system before main runs.</p></div>
        <div className="tf-contentblockimage"><img src={ImgReact} alt='' /><p>I used React for many modules.</p></div>
        </div>
        </div>     
        </div>
        </div>
    );
    }

export default CodeScreen;    