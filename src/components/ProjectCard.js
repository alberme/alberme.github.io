import placeholder from '../assets/placeholder.png';

export default function ProjectCard ({ title, description, link, img }) {
  return (
    <div className='max-w-xs rounded-xl mx-4 my-4 overflow-hidden shadow-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-amber-100 duration-300'>
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