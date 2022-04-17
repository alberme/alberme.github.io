import tw from 'tailwind-styled-components';

const Layout = tw.div`
  flex
  flex-col
  justify-between
  m-auto
  bg-orange-100
`

const Main = tw.main`
  flex
  flex-col
  justify-center
  items-center
  max-w-7xl
  m-auto
  pb-16
`

const Section = tw.section`
  ${(p) => (p.row ? "flex-row" : "flex-col")}
  flex
  flex-wrap
  justify-center
  items-center
  my-4
`

export { Layout, Main, Section, };