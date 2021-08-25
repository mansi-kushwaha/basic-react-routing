import React, { useState } from "react"
import { Button } from 'react-bootstrap';
import Section2 from "./Components/Section2";
// import Layout from "../../layout/layout";
import Layout from "../../layout/layout"



const About = () => {

    const [name, setName] = useState("About page");

    const onAction = () => setName("Updated About page")

    return (
        <Layout>
            <h1>
                {name}

            </h1>

            <Button onClick={onAction} variant="outline-primary">click</Button>
            <Section2 name={name} />
        </Layout>
    )

}

export default About;