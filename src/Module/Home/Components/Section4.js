import React, { useState, memo } from 'react'
import { Container, Row, Col } from "react-bootstrap";


const data = [
    {
        id: 1,
        title: "What is Lorem Ipsum?",
        content: `Ipsum is simplyLorem dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

    },
    {
        id: 2,
        title: "What is Lorem Ipsum?",
        content: `Ipsum is simplyLorem dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

    },
    {
        id: 3,
        title: "What is Lorem Ipsum?",
        content: `Ipsum is simplyLorem dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

    }
]

const Section4 = () => {

    const [content, setContent] = useState(data);

    console.log("Section4");

    return (
        <section>
            <Container>
                <Row>
                    {content.map((dataValue) => {
                        const { id, title, content } = dataValue
                        return (
                            <Col md={4} key={id}>
                                <h2>
                                    {title}
                                </h2>
                                <p>{content}</p>
                            </Col>
                        )
                    }

                    )}




                </Row>
            </Container>
        </section>
    )
}

export default memo(Section4)
