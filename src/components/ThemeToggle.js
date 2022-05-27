import tw from 'tailwind-styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const Toggle = tw.button`
  ${p => p.$shrink ? 'text-lg' : 'text-2xl'}
  transition-all
  ease-in-out
  rounded-full
  p-2
  text-gray-500
  dark:text-slate-100

  cursor-pointer
`

export default function ThemeToggle({ shrink }) {
  const { activeTheme, setActiveTheme } = useContext(ThemeContext);

  return (
    <Toggle
      onClick={() => setActiveTheme(activeTheme === 'light' ? 'dark' : 'light')}
      $shrink={shrink}
    >
      { activeTheme === 'light' ? <FaMoon />: <FaSun /> }
    </Toggle>
  );
};
