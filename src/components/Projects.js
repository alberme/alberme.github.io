import { Section } from "./Stack"
import ProjectCard from "./ProjectCard"

export default function Projects({ projects }) {
  return (
    <Section row>
      {
        projects.map(([ title, description, link, img ], i) => (
          <ProjectCard key={i} title={title} description={description} link={link} img={img} />
        ))
      }
    </Section>
  )
}