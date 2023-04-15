import tw from 'tailwind-styled-components';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { Container } from 'common/styles/page';

const StyledFooter = tw.footer`
  py-4
  w-full
`;
const SocialIcon = tw.a`
  mx-4
  text-4xl
  text-gray-500
  dark:text-slate-100
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Container $row $center>
        <SocialIcon href='https://github.com/alberme'>
          <FaGithub />
        </SocialIcon>
        <SocialIcon href='https://linkedin.com/in/albermj'>
          <FaLinkedinIn />
        </SocialIcon>
      </Container>
    </StyledFooter>
  );
}
