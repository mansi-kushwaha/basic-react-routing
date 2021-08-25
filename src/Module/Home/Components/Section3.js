import React, { useState, memo } from "react";
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
        title: " What is Lorem Ipsum?",
        content: `Ipsum is simplyLorem dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
           It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
           and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`


    },
    {
        id: 4,
        title: "What is Lorem Ipsum?",
        content: `Ipsum is simplyLorem dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
           It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
           and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`


    },

];
const Section3 = () => {
    const [content, setContent] = useState(data);
    console.log("Section3");

    const coloumns = content.map(({ id, title, content }) => (
        <Col md={3} key={id}>
            <h2>{title}</h2>
            <p>{content}</p>
        </Col>
    ))
    return (
        <section>
            <Container>
                <Row>

                    {coloumns}
                </Row>
            </Container>
        </section>
    )
}

export default memo(Section3)
