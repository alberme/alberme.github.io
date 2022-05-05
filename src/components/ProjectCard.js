import tw from 'tailwind-styled-components';

import placeholder from '../assets/placeholder.png';

const Card = tw.div`
  flex
  flex-col
  justify-between  
  mx-4
  my-4
  max-w-[18rem]
  min-h-[24rem]
  md:max-w-[20rem]
  md:min-h-[26rem]
  rounded-xl
  overflow-hidden
  shadow-lg
  transition
  duration-300
  ease-in-out
  hover:translate-y-1
  hover:scale-110
  hover:bg-white
`
const Pill = tw.div`
  w-4
  h-2
  px-4
  py-2
  rounded-full
  bg-red-300
`

const getPillColor = (type) => {
  switch(type) {
    case 'next.js':
      return '#333333'
    case 'node':
      return '#539e43'
    case 'react':
      return '#61dafb'
    case 'video':
      return 'var(--color-orange)'
    default:
      return 'var(--color-red)'
  }
}

export default function ProjectCard ({ title, description, link, img }) {
  return (
    <Card>
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
    </Card>
  );
}