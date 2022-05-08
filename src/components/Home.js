import tw from 'tailwind-styled-components';
import Projects from './Projects';
import Timeline from './Timeline';
import { Section, Main } from './Stack';
import headshot from '../assets/bitmoji.png';

import ecard from '../assets/ecard.jpg';
import decidr from '../assets/decidr.png';
import triviaAndChill from '../assets/triviaAndChill.png';

const projectList = [
  ['Trivia & Chill', 'Test your movie knowledge in this trivia game! Featuring a beautiful deco-art theme and challenging questions.', 'https://luceroweb.github.io/trivia-and-chill', triviaAndChill],
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

const Intro = tw.div`
  max-w-[80%]
  mx-auto
  mt-4
  text-center
`

const Avatar = tw.img`
  max-w-[12rem]
  sm:max-w-[16rem]
`

export default function Home () {
  return (
    <>
      <Section>
        <Avatar 
          src={headshot}
          alt="Alberts Headshot"
        />
        <Intro>
          <h1 className="font-bold">Hi 👋 I'm Albert</h1>
          <p>
            I am a web and native app developer with experience across various modern web technologies.
            My expertise lies primarily in the Javascript ecosystem,
            specifically with React, React Native, and the MERN (MongoDB, Express, React, Node) stack
          </p>
          <p>
            I am currently in an apprenticeship program at Alpha Works Tech - Bitwise Industries,
            where I collaborate with my team or various teams to design, prototype, build, and deploy
            functional apps to production.
          </p>
        </Intro>
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
    </>
  );
}