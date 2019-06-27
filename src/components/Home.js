import React from 'react';
import { Jumbo } from './Jumbo';
import { Showcase } from './Showcase';
import myhead from '../images/myhead.jpg';
import stewie from '../images/stewie.jpg';


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

    const stewieProps = {
        image: stewie,
        heading: "Stewie the cat",
        attributes: ["Adopted by Frank at the age of 6 weeks", "Pooped on the floor only once", "Will bite your ass off", "Still an absolute cutie", `Has his own page on my website`]
    }

    //Render
    return(
        <div>
            <Showcase {...showcaseProps}/>
            <Jumbo {...jumboProps}/>
            <Showcase {...stewieProps} />
        </div>
    )
}