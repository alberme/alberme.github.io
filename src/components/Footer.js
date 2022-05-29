import tw from 'tailwind-styled-components';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { Section } from './Stack';


const StyledFooter = tw.footer`
  p-2
  w-full
`
const SocialIcon = tw.a`
  mx-4
`

export default function Footer() {
  return (
    <StyledFooter>
      <Section $row>
        <SocialIcon href="https://github.com/alberme">
          <FaGithub className='icon' />
        </SocialIcon>
        <SocialIcon href="https://linkedin.com/in/albermj">
          <FaLinkedinIn className='icon' />
        </SocialIcon>
      </Section>
    </StyledFooter>
  ); 
}
