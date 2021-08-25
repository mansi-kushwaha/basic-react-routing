import React, { useState, memo } from 'react'
import { Container, Row, Col } from "react-bootstrap";

import data from '../cms2';

const Section5 = () => {
    const [content, setContent] = useState(data);
    const { colOne, colTwo } = content;


    console.log("Section5");

    return (
        <section>
            <Container>
                <Row>
                    {/* {content.map((dataValue) => {
                        const { id, title, content } = dataValue
                        return (
                            <Col md={8} key={id}>
                                <h2>
                                    {title}
                                </h2>
                                <p>{content}</p>
                            </Col>
                        )
                    }

                    )} */}
                    <Col md={8} key={colOne.id}>
                        <h2>
                            {colOne.title}
                        </h2>
                        <p>{colOne.content}</p>
                    </Col>
                    <Col md={4} key={colTwo.id}>
                        <h2>
                            {colTwo.title}
                        </h2>
                        <p>{colTwo.content}</p>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default memo(Section5);
