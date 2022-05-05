import tw from 'tailwind-styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const Toggle = tw.button`
  transition
  duration-500
  ease-in-out
  rounded-full
  p-2
  text-gray-500
  dark:text-slate-100
  text-2xl
  cursor-pointer
`

export default function ThemeToggle() {
  const { activeTheme, setActiveTheme } = useContext(ThemeContext);

  return (
    <Toggle
      onClick={() => setActiveTheme(activeTheme === 'light' ? 'dark' : 'light')}
    >
      { activeTheme === 'light' ? <FaMoon />: <FaSun /> }
    </Toggle>
  );
};
