import React from 'react';

//Reusable Components
import { Jumbo } from '../reusables/Jumbo';
import { Showcase } from '../reusables/Showcase';
import { Hero } from '../reusables/Hero';

//Photos
import myhead from '../../images/myhead.jpg';
import stewie from '../../images/stewie.jpg';

//The page uses simply two reusable components, the contents are easily modified via props variables declared below.
export const Home = () => {
    //Render
    return(
        <div>
            <Hero />
            <Showcase {...showcaseProps}/>
            <Jumbo {...jumboProps}/>
            <Showcase {...stewieProps} />
            <Jumbo {...projectProps} />
        </div>
    )
}

//Set of props that can be easily modified to populate the components
const jumboProps = {
    title: "Coffee.",
    subtext: "I love coffee. Hence the coffee-ish colour theme. I'm working on a personal coffee profile app that allows every user to keep track of their favourite way of brewing coffee. Currently a big work in progress and the link probably won't work till early works are deployed.",
    buttonLink: "",
    buttonText: "Learn More"
}

const showcaseProps = {
    image: myhead,
    heading: "Frank Li",
    attributes: ["Vice-Chancellor's Scholar at QUT", 
    "CS/Stats - GPA 6.5", 
    "Full Stack Dev (MERN)", 
    "Strong stats background", 
    "Not particularly into front end design (evidently)"]
}

const stewieProps = {
    image: stewie,
    heading: "Stewie the cat",
    attributes: ["Adopted by me at the age of 6 weeks", 
    "Pooped on the floor only once", 
    "Will bite your ass off", 
    "Still an absolute cutie", 
    "Has his own gallery on my website"]
}

const projectProps = {
    title: "My Projects",
    subtext: "I've worked on a number of projects for university course work and just hobby. Please check them out, some of them are cool, well, most of them.",
    buttonLink: "/projects/",
    buttonText: "Learn More"
}