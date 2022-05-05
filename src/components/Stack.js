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
  text-slate-800
  dark:text-slate-300
`

const Section = tw.section`
  ${(p) => (p.row ? "flex-row" : "flex-col")}
  flex
  flex-wrap
  justify-center
  items-center
  my-4
`

export { Main, Section, };