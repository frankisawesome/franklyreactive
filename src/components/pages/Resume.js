import React from 'react';
import { Document, Page } from "react-pdf";
import file from '../../images/Resume.pdf'

export const Resume = (props) => {
    return (
        <div>
            <Document file={file}>
                <Page pageNumber={1} width='600px'/>
            </Document>
        </div>
    )
}