import Container from 'react-bootstrap/Container';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 1.5rem;
  width: 100%;
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,135,70,1) 0%, rgba(130,234,255,1) 100%);
`

export default function Footer() {
  return (
    <StyledFooter>
      <Container className="social-icons w-25 d-flex justify-content-evenly align-items-center">
        <a href="https://github.com/alberme">
          <FaGithub className='icon' />
        </a>
        <a href="https://linkedin.com/in/albermj">
          <FaLinkedinIn className='icon' />
        </a>
      </Container>
    </StyledFooter>
  ); 
}
