import React, { useState, useEffect } from 'react';
// import { Button } from 'react-bootstrap';

import { Section1, Section5, Section3, Section4 } from "./Components";
// import Layout from '../../layout/layout';
import Layout from "../../layout/layout"


const Home = () => {

    console.log("Home");
    const [count, setCount] = useState(0);


    const upDateCount = () => setCount(count + 1);
    const mySisName = ['mansi', 'devanshi', 'kamini', 'rani'];
    // const newArr = []
    const newArr = mySisName.map((element, index) => {
        return (<p><strong>{element}</strong></p>)
    })

    return (
        <Layout>
            <h3>count : {count}</h3>
            {newArr}
            {/* <button onClick={upDateCount}>parent Click</button> */}
            {/* <button onClick={() => setCount(count + 1)}>Click</button> */}
            <Section1 setCount={setCount} count={count} upDateCount1={upDateCount} />
            <Section3 />
            <Section4 />
            <Section5 />
        </Layout>
    )
}

export default Home