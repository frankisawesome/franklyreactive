import React from 'react';
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import '../css/footer.css'

export const Footer = (props) => {
    return (
        <footer className="footer">
            <p>Frank Li 2019 Powered by React</p>
            <a href="https://github.com/frankisawesome"><GoMarkGithub /></a>
            <a href="https://www.linkedin.com/in/frank-l-a89288116/"><FaLinkedin /></a>
        </footer>
    )
}