import { Container } from 'react-bootstrap';

export default function About () {
  return (
    <Container className="p-4" fluid>
      <h2>About</h2>
      <p>
        I am a <strong>passionate</strong>, <strong>self-disciplined</strong>, <strong>dedicated</strong> &amp; <strong>self-taught</strong> developer with the goal of pursuing a
        career in professional software development. I am always improving myself via coding
        challenges, reading Medium and dev.to articles, and contributing to the success of my colleagues.
      </p>

      <hr />
      <h2>Skills</h2>
      <ul>
        <li>
          React &amp; React Native
        </li>
        <li>
          GitHub &amp; Gitflow
        </li>
        <li>
          JavaScript
        </li>
        <li>
          HTML/HTML5
        </li>
        <li>
          CSS/CSS5
        </li>
        <li>
          Rapid Prototyping with Bootstrap
        </li>
        <li>
          NodeJS/ExpressJS
        </li>
        <li>Google Cloud Platform</li>
      </ul>

      <hr />
      <h2>Experience</h2>

      <h4>
        React Native Apprentice
      </h4>
      <p>
        Alpha Works - Bitwise Industries Apprenticeship Program
        2021-2022
      </p>
      <ul>
        <li>
        Worked on a team to learn web and mobile app development and create functional projects
        </li>
        <li>
        Followed the agile methodology to construct user stories
        </li>
      </ul>


      <h4>
        Supplemental Instruction Leader
      </h4>
      <p>
        Bakersfield College
        2015 – 2016
      </p>
      <ul>
        <li>
        Hosted regularly scheduled discussions about CS fundamentals in Java and data structures
        and algorithms in C++
        </li>
        <li>
        Taught and guided students in the right direction towards success
        </li>
        <li>
        Helped professor with assisting students on in-class programming assignments
        </li>
      </ul>

      <h4>
        STEM Assistant
      </h4>
      <p>
        Bakersfield College
        2017-2018
      </p>
      <ul>
        <li>
        Tutored students on demand with the data structures and computer architecture course
        </li>
        <li>
        Relayed feedback and suggestions to professors on improving their teaching style 
        </li>
      </ul>

      <hr />
      <h2>Education</h2>
      <h4>Bakersfield College</h4>
      <p>
        2015 – 2017
      </p>
      <ul>
        <li>
          Completed 75 credits towards a Computer Science degree
        </li>
        <li>
          GPA: 3.12
        </li>
      </ul>
    </Container>
  );
}