import React from 'react';
import { Jumbo } from './Jumbo';
import { Showcase } from './Showcase';
import myhead from '../images/myhead.jpg'
export const Home = () => {
    
    //Set of props that can be easily modified to populate the components
    const jumboProps = {
        title: "Coffee.",
        subtext: "I love coffee. Hence the coffee-ish colour theme. I'm working on a personal coffee profile app, hopefully it's linked, maybe not, still working on it.",
        buttonLink: "",
        buttonText: "Learn More"
    }

    const showcaseProps = {
        image: myhead,
        heading: "Frank Li",
        attributes: ["Vice-Chancellor's Scholar at QUT", "CS/Stats - GPA 6.5", "React-Express-Node-Mongo Stack", "Strong stats background", "Interest in Machine Learning/AI"]
    }

    //Render
    return(
        <div>
            <Showcase {...showcaseProps}/>
            <Jumbo {...jumboProps}/>
        </div>
    )
}