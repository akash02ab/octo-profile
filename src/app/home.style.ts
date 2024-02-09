const container = `
  min-h-screen
  flex
  flex-col
  items-center
  justify-between
  p-10
  xs:p-24
  bg-black
`;

const form = `
  flex
  flex-col
  items-center
  gap-8
`;

const svg = `
  w-16
  h-16
`;

const label = `
  font-inter
  font-semibold
  text-xl
  xxs:text-2xl
  xs:text-3xl
  sm:text-4xl
  text-off-white
`;

const input = `
  font-mono
  bg-dark-grey
  text-light-blue
  xxs:text-lg
  xs:text-xl
  sm:text-2xl
  text-center
  w-full
  sm:w-96
  p-2
  sm:p-4
  outline-none
  border-0
  placeholder:off-white
  placeholder:opacity-10
  focus:outline-2
  focus:outline-blue
`;

const style = {
  container,
  form,
  svg,
  label,
  input
};

export default style;