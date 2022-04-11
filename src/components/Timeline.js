import tw from 'tailwind-styled-components';
import styled from 'styled-components';

const TimelineItem = tw.div`
  flex
  justify-center
  items-center
  h-50
  w-3/4
  drop-shadow-lg
  bg-orange-200
  p-2
  m-2
`
const Divider = tw.hr`
  h-100
  w-0.5
`
const TimelineDivider = styled.hr`
  height: 100%;
  width: 1.5px;
  border: none;
  color: var(--color-text-accent);
  background-color: var(--color-text-accent);
  @media (max-width: 1024px) {
    height: 1.5px;
    width: 100%;
  }
`


export default function Timeline({ timeline }) {
  return timeline.map((entry, i) => (
    <TimelineItem key={i} >
      <div className="w-2/3 p-3">
        <strong className='tracking-wider'>{entry.title}</strong>
        <br />
        <p>📍&nbsp;{entry.location}</p>
        <p>{entry.date}</p>
      </div>
      <TimelineDivider />
      <div className='p-3'>
        <p>{entry.description}</p>
      </div>
    </TimelineItem>
  ));
}