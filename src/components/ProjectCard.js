import tw from 'tailwind-styled-components';

import placeholder from '../assets/placeholder.png';

const Card = tw.div`
  mx-4
  my-4
  max-w-xs
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