import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import placeholder from '../assets/placeholder.png';

const StyledCard = styled(Card)`
  width: 18rem;
  padding: 0;
  margin: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);
  animation-duration: 0.75s;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;

  &:hover {
    animation-name: bounce;
  }
`

export default function ProjectCard ({ title, description, link, img }) {
  return (
    <div className='max-w-xs rounded-xl mx-4 my-4 overflow-hidden shadow-lg'>
      <img
        className="w-full"
        alt={`${title} preview`}
        src={img || placeholder}
      />
      <div className="px-6 py-4">
        <h4 className="font-bold text-xl mb-2">{title}</h4>
        <p className="text-gray-700 text-base">{description}</p>
        <a target="_blank" rel="noreferrer" href={link}>Visit this project</a>
      </div>
    </div>
  );
}