import React, { useState } from 'react';
import '../../css/resume.css';
import Spinner from 'react-bootstrap/Spinner';

export const Resume = () => {
    const [loading, setLoading] = useState(true);

    return (
        <div className="resumecont">
            {loading ? <Spinner animation="grow" variant="info" /> : null}
            <iframe 
            className="resume" 
            src="https://drive.google.com/file/d/1s1VLI_Pzyq_oIOG00_XD67PHonwo0qfH/preview"
            onLoad={() => setLoading(false)}
            ></iframe>
        </div>
    )
}
