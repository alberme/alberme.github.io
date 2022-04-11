import { Container, Row, Col, Image } from 'react-bootstrap';
import Projects from './Projects';
import Timeline from './Timeline';
import { StackSection, StackRow } from './Stack';
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
const projectList = [
  ['Todo-List', 'My first dive into React Native featuring a todo-list app', 'https://github.com/alberme/todolist-expo-app', todolist],
  ['Decidr', 'Roll the dice and select a random item from your list!', 'https://alberme.github.io/decidr', decidr],
  ['E-card', 'A reshareable digital holiday card. Customize and share with your loved ones!', 'https://alberme.github.io/ecard/', ecard]
]

const timelineEvents = [
  { title: 'React Native Apprentice', location: 'Bitwise Industries', date: 'Sept 2021 - current',
   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero optio cumque, aliquam, ducimus quae quia fugit quo repudiandae expedita nam, iure assumenda pariatur rerum veritatis ab eum soluta praesentium autem.'
  },
  { title: 'STEM Tutor', location: 'Bakersfield College', date: 'Oct 2019 - current',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero optio cumque, aliquam, ducimus quae quia fugit quo repudiandae expedita nam, iure assumenda pariatur rerum veritatis ab eum soluta praesentium autem.'
  },
  { title: 'Supplemental Instruction Leader', location: 'Bakersfield College', date: 'Oct 2019 - current',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero optio cumque, aliquam, ducimus quae quia fugit quo repudiandae expedita nam, iure assumenda pariatur rerum veritatis ab eum soluta praesentium autem.'
  },
];

export default function Home () {
  return (
    <Container className="p-4 flex-grow-1" fluid>
      <StackSection row>
        <Col className="p-4 text-center" xs={12} sm={6} md={4} lg={2}>
          <StyledImage src={headshotImg} roundedCircle/>
        </Col>
        <Col className='mt-4 p-4' xs={12} sm={6} md={8}>
          <h1>Hi 👋 I'm Albert</h1>
          <h4>A passionate web &amp; mobile app developer</h4>
          <h4>based in California</h4>
        </Col>
      </StackSection>
      <hr />
      <StackSection>
        <h2>Featured Projects</h2>
        <Projects projects={projectList} />
      </StackSection>
      
      <hr />
      <StackSection>
        <h2 className='mb-4'>Personal Timeline</h2>
        <Timeline timeline={timelineEvents} />
      </StackSection>
    </Container>
  );
}