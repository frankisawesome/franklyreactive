import React, { useState } from 'react';
import '../../css/resume.css'

export const Resume = () => {
    const [loading, setLoading] = useState(true);

    return (
        <div className="resumecont">
            {loading ? <h2>Loading</h2> : null}
            <iframe 
            className="resume" 
            src="https://docs.google.com/document/d/e/2PACX-1vRQlRAvm_tmqNBm9uew4acMjrlJlbQiI9jIcTMsqQQ0Z_3mdw1IGK8dwD8y5yNoBV2hUDkZuid3dMls/pub?embedded=true"
            onLoad={() => setLoading(false)}
            ></iframe>
        </div>
    )
}
