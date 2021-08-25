import React, { useState, memo } from "react";
import { Container, Row, Col } from "react-bootstrap";

import data from '../cms';

const Section1 = (props) => {
    const [content, setContent] = useState(data);
    const { upDateCount1 } = props;

    const coloumns = content.map(({ id, title, content }) => (
        <Col md={6} key={id}>
            <h2>{title}</h2>
            <p>{content}</p>
        </Col>
    ))

    console.log("Section1");
    // const updateCount = () => setCount(count + 1);

    return (
        <section>
            <Container>
                <button onClick={upDateCount1}> child button</button>
                <Row>
                    {/* {content.map((dataValue) => {
                        const {id, title, content} = dataValue;
                        return (
                            <Col md={6} key={id}>
                                <h2>{title}</h2>
                                <p>{content}</p>
                            </Col>
                        )
                    })} */}

                    {/* {content.map((dataValue) => (
                        <Col md={6} key={dataValue.id}>
                            <h2>{dataValue.title}</h2>
                            <p>{dataValue.content}</p>
                        </Col>
                    )
                    )} */}

                    {/* {content.map(({ id, title, content }) => (
                        <Col md={6} key={id}>
                            <h2>{title}</h2>
                            <p>{content}</p>
                        </Col>
                    )
                    )} */}
                    {coloumns}
                </Row>
            </Container>
        </section>
    )
}

export default memo(Section1);