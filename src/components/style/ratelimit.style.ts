const ratelimit = `
  fixed
  w-10
  h-10
  border-[40px]
  border-t-blue
  border-l-blue
  border-b-black
  border-r-black
`;

const limitCount = `
  text-white
  text-[10px]
  font-bold
  absolute
  rotate-[313deg]
  -top-6
  -left-9
`;

const limitText = `
  text-off-white
  text-[10px]
  font-semibold
  text-center
  absolute
  rotate-[314deg]
  w-[68px]
  -top-4
  -left-10
`;

const style = {
  ratelimit,
  limitCount,
  limitText
};

export default style;