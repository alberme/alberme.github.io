import tw from 'tailwind-styled-components';

const TimelineCardContainer = tw.div`
  flex
  flex-col
  md:flex-row
  justify-between
  items-center
  h-50
  w-3/4
  shadow-md
  dark:bg-slate-700
  p-2
  m-2
`

export default function TimelineCard({ event }) {
  return (
    <TimelineCardContainer>
      <div className="min-w-[16rem] max-w-[16rem] p-3 self-start">
        <strong className='tracking-wider'>{event.title}</strong>
        <br />
        <p>📍&nbsp;{event.location}</p>
        <p>{event.date}</p>
      </div>
      <div className='mr-auto p-3'>
        <p>{event.description}</p>
      </div>
    </TimelineCardContainer>
  )
}