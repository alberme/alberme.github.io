import tw from 'tailwind-styled-components';

const TimelineCardContainer = tw.div`
  flex
  justify-between
  items-center
  h-50
  w-3/4
  shadow-md
  dark:bg-slate-700
  p-2
  m-2
`

// const TimelineDivider = styled.hr`
//   height: 100%;
//   width: 1.5px;
//   border: none;
//   color: var(--color-text-accent);
//   background-color: var(--color-text-accent);
//   @media (max-width: 1024px) {
//     height: 1.5px;
//     width: 100%;
//   }
// `

export default function TimelineCard({ event }) {
  return (
    <TimelineCardContainer>
      <div className="min-w-[16rem] p-3">
        <strong className='tracking-wider'>{event.title}</strong>
        <br />
        <p>📍&nbsp;{event.location}</p>
        <p>{event.date}</p>
      </div>
      {/* <TimelineDivider /> */}
      <div className='mr-auto p-3'>
        <p>{event.description}</p>
      </div>
    </TimelineCardContainer>
  )
}