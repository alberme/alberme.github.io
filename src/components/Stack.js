import tw from 'tailwind-styled-components';

const StackLayout = tw.div`
  flex
  flex-col
  justify-between
  m-auto
  bg-orange-100
`

const StackMain = tw.main`
  flex
  flex-col
  justify-center
  items-center
  max-w-7xl
  m-auto
  pb-16
`

const StackSection = tw.section`
  ${(p) => (p.row ? "flex-row" : "flex-col")}
  flex
  flex-wrap
  justify-center
  items-center
  my-4
`

export { StackLayout, StackMain, StackSection, };