import React, { useState } from 'react';
import '../../css/resume.css';
import Spinner from 'react-bootstrap/Spinner';

export const Resume = () => {
    const [loading, setLoading] = useState(true);

    return (
        <div className="resumecont">
            {loading ? <Spinner animation="grow" variant="info" /> : null}
            <iframe 
            title="resume"
            className="resume" 
            src="https://drive.google.com/file/d/19e-k77LrI3G7BZDhujwrUHEqApRjN4hs/preview" 
            onLoad={() => setLoading(false)}
            ></iframe>
        </div>
    )
}
