import { Container } from './Stack';

export default function About () {
  return (
      <Container className="px-4">
      <h2>About</h2>
      <p>
        I am a <strong>passionate</strong>, <strong>dedicated</strong> &amp; <strong>self-taught</strong> developer with the goal of pursuing a
        career in professional software development. I am always improving myself via coding
        challenges, reading Medium and dev.to articles, and contributing to the success of my colleagues.
      </p>
      <p>
        Back in the undergraduate university days, coding was a hobby that I enjoyed in my free time. 
        The satisfaction of creating cool features and solving problems with code is euphoric. 
        Then one day, I decided it's time to turn my hobby into a career. 
        I grew a passion for modern web development - both backend and frontend - after I learned 
        JavaScript, React, NodeJS, and the various innovative libraries that supplement these development technologies. 
        In the future, I will expand my passion to native mobile apps and beyond once I get the proper development hardware to do so.
      </p>
      <p>
        Currently, I am in an apprenticeship program at Alpha Works Tech - Bitwise Industries where I collaborate with a team to build and deploy React and React Native applications.
        Our team follows the agile methodology, where we perform daily standups, utilize GitHub Projects as a Kanban-style board, create pull requests and perform code reviews, write commit messages
        based on the Karma Runner convention, and run a weekly sprint demo and retrospective.
      </p>
      <p>
        When I am not at my computer, I am either enjoying nature, caring for my pets, working out at a gym, or listening to indie music.
      </p>
      </Container>
  );
}