import tw from 'tailwind-styled-components';

const TimelineItem = tw.div`
  flex
  justify-center
  h-50
  w-3/4
`

const Divider = tw.hr`
  h-100
`

export default function Timeline({ timeline }) {
  return timeline.map((entry, i) => (
    <div className="flex justify-center h-50 w-3/4" key={i}>
      <div className="w-2/3">
        <strong className='tracking-wider'>{entry.title}</strong>
        <br />
        <p>📍&nbsp;{entry.location}</p>
        <p>{entry.date}</p>
      </div>
      <hr />
      <div>
        <p>{entry.description}</p>
      </div>
    </div>
  ));
}