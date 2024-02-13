const chartSection = `
  grid
  grid-cols-[repeat(auto-fill,minmax(300px,1fr))]
  justify-center
  items-center
  gap-5
`;

const chartWrapper = `
  p-8
  h-full
  flex
  flex-col
  space-y-8
  bg-dark-grey
  text-off-white
  rounded
`;

const chartTitle = `
  text-lg
  xxs:text-xl
  xs:text-2xl
  text-off-white
  font-bold
  underline
  decoration-2
  decoration-dashed
  decoration-grey
`;

const chart = `
  relative
  w-auto
`;

const style = {
  chartSection,
  chartWrapper,
  chartTitle,
  chart
};

export default style;