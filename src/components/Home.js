import React from 'react';
import { Jumbo } from './Jumbo';
import { Showcase } from './Showcase';
import myhead from '../images/myhead.jpg'
export const Home = (props) => {
    
    //Set of props that can be easily modified to populate the components
    const jumboProps = {
        title: "Coffee.",
        subtext: "I love coffee. Hence the coffee-ish colour theme. I'm working on a personal coffee profile app, hopefully it's linked, maybe not, still working on it.",
        buttonLink: "",
        buttonText: "Learn More"
    }

    const showcaseProps = {
        image: myhead,
        heading: "I'm Frank Li",
        text: "Vice-Chancellor's Scholar at QUT, studying a double degree in Computer Science and Statistics. I'm graduating in 2021. Currently have a GPA of 6.5"
    }

    //Render
    return(
        <div>
            <Jumbo {...jumboProps}/>
            <Showcase {...showcaseProps}/>
        </div>
    )
}