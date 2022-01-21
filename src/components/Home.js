import { Container, Row, Col, Image } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';
import headshotImg from '../assets/headshot.jpeg';
import styled from 'styled-components';

import ecard from '../assets/ecard.jpg';
import decidr from '../assets/decidr.png';
import todolist from '../assets/todolist.png';

const StyledImage = styled(Image)`
  border: 1px solid gray;
  height: 200px;
}
` 
const cardList = [
  ['Todo-List', 'My first dive into React Native featuring a todo-list app', 'https://github.com/alberme/todolist-expo-app', todolist],
  ['Decidr', 'Roll the dice and select a random item from your list!', 'https://alberme.github.io/decidr', decidr],
  ['E-card', 'A reshareable digital holiday card. Customize and share with your loved ones!', 'https://alberme.github.io/ecard/', ecard]
]

export default function Home () {
  return (
    <Container className="p-4 flex-grow-1" style={{backgroundColor: "whitesmoke"}} fluid>
      <Row className='justify-content-md-evenly justify-content-sm-center'>
        <Col className="p-4 text-center" xs={12} sm={6} md={4} lg={2}>
          <StyledImage src={headshotImg} roundedCircle/>
        </Col>
        <Col className='mt-4 p-4' xs={12} sm={6} md={8}>
          <h1>Hi 👋 I'm Albert</h1>
          <h4>A passionate web &amp; mobile app developer</h4>
          <h4>based in California</h4>
        </Col>
      </Row>
      <Row>
        <Col className="mt-4 mb-4 text-center" xs={12}>
          <hr />
          <h2>Featured Projects</h2>
        </Col>
      </Row>
      <Row className='justify-content-evenly'>
          {
            cardList.map(([ title, description, link, img ], i) => (
              <ProjectCard key={i} title={title} description={description} link={link} img={img} />
            ))
          }
      </Row>
    </Container>
  );
}