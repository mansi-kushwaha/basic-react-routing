import React from 'react';
import image from "./page_not_found.svg"

const Error = () => {
    return (

        <>
            <h1>Error</h1>
            <p>OOps! Page not found</p>
            <img src={image} alt="page not found" />

        </>

    )
}

export default Error