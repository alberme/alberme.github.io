import tw from 'tailwind-styled-components';

// const Layout = tw.div`
//   flex
//   flex-col
//   justify-between
//   m-auto
//   bg-orange-100
// `

const Main = tw.main`
  flex
  flex-col
  justify-center
  items-center
  lg:max-w-[90vw]
  m-auto
  pb-16
`

const Section = tw.section`
  ${(p) => (p.$row ? "flex-row" : "flex-col")}
  flex
  flex-wrap
  justify-center
  items-center
  my-4
`

const Container = tw.div`
  flex
  flex-wrap
  ${(p) => (p.$row ? "flex-row" : "flex-col")}
  ${(p) => (p.$center && 'justify-center items-center')}
  p-2
  w-full
`

export { Main, Section, Container };