import { Container, Row, Col, Image } from 'react-bootstrap';
import Projects from './Projects';
import Timeline from './Timeline';
import { Section, Main } from './Stack';
import headshot from '../assets/bitmoji.png';
import styled from 'styled-components';

import ecard from '../assets/ecard.jpg';
import decidr from '../assets/decidr.png';
import todolist from '../assets/todolist.png';

const StyledImage = styled(Image)`
  border: 1px solid gray;
  height: 200px;
}
`
const description = "I am a web developer with experience across the web stack. My expertise lies primarily in the Javascript ecosystem";
const description2= "\nI'm currently in a React Native apprenticeship at Alpha Works Tech - Bitwise Industries, where I collaborate with React and React Native projects";

const projectList = [
  ['Todo-List', 'My first dive into React Native featuring a todo-list app', 'https://github.com/alberme/todolist-expo-app', todolist],
  ['Decidr', 'Roll the dice and select a random item from your list!', 'https://alberme.github.io/decidr', decidr],
  ['E-card', 'A reshareable digital holiday card. Customize and share with your loved ones!', 'https://alberme.github.io/ecard/', ecard]
]

const timelineEvents = [
  { title: 'React Native Apprentice', location: 'Alpha Works - Bitwise Industries', date: 'Sept 2021 - current',
   description: 'Currently working on a team to learn web and native app development using React Native, agile methodology, and GitHub Projects.'
  },
  { title: 'STEM Tutor', location: 'Bakersfield College', date: 'Oct 2019 - current',
  description: 'Tutored CS students on demand based on a data structures and computer architecture course'
  },
  { title: 'Supplemental Instruction Leader', location: 'Bakersfield College', date: 'Oct 2019 - current',
  description: 'Hosted regularly scheduled discussions about CS fundamentals in Java and data structures and algorithms in C++. Taught and guided students in the right direction towards success'
  },
  { title: 'Volunteer', location: 'Adventist Health', date: 'August 2011',
  description: 'Assist with office chores such as organizing paperwork. Perform chores such as delivering equipment to various departments'
  },
];

export default function Home () {
  return (
    <Main>
      <Section>
        <img src={headshot} alt="Alberts Headshot" style={{ width: '25%' }}/>
        <Col className='mt-4 text-center'>
          <h1>Hi 👋 I'm Albert</h1>
          <p>{description}</p>
          <p>{description2}</p>
        </Col>
      </Section>
      <hr />
      <Section>
        <h2>Featured Projects</h2>
        <Projects projects={projectList} />
      </Section>
      
      <hr />
      <Section>
        <h2 className='mb-4'>Personal Timeline</h2>
        <Timeline timeline={timelineEvents} />
      </Section>
    </Main>
  );
}