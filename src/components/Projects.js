import { StackSection } from "./Stack"
import ProjectCard from "./ProjectCard"

export default function Projects({ projects }) {
  return (
    <StackSection row>
      {
        projects.map(([ title, description, link, img ], i) => (
          <ProjectCard key={i} title={title} description={description} link={link} img={img} />
        ))
      }
    </StackSection>
  )
}