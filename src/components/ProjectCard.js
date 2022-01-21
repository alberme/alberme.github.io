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
    <StyledCard bg="light">
      <StyledCard.Img
        variant="top"
        src={img || placeholder}
        style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", objectFit: "cover" }}
      />
      <StyledCard.Body>
        <StyledCard.Title>{title}</StyledCard.Title>
        <StyledCard.Text>{description}</StyledCard.Text>
        <a target="_blank" rel="noreferrer" href={link}>Visit this project</a>
      </StyledCard.Body>
    </StyledCard>
  );
}