const profileSection = `
  flex
  flex-col
  items-center
  space-y-4
`;

const avatar = `
  w-32
  h-32
  rounded-full
  border-8
  border-blue
`;

const picture = `
  w-full
  h-full
  rounded-full
  object-cover
`;

const name = `
  text-xl
  xxs:text-2xl
  xs:text-3xl
  sm:text-4xl
  text-off-white
`;

const id = `
  font-mono
  text-base
  xxs:text-lg
  xs:text-xl
  sm:text-2xl
  text-blue
`;

const infoWrapper = `
  flex
  flex-col
  sm:flex-row
  justify-between
  items-center
  gap-4
  sm:gap-8
`;

const info = `
  flex
  items-center
  text-xs
  xs:text-sm
  sm:text-base
  text-lightest-blue
  gap-2
`;

const info_icon = `
  w-4
  h-4
  fill-lightest-blue
`;

const statWrapper = `
  flex
  items-center
  justify-between
  gap-2
`;

const stat = `
  w-auto
  xs:w-32
  h-20
  p-2
  xs:p-4
  mt-4
  rounded
  bg-dark-grey
  flex
  flex-col
  items-center
  justify-center
  space-y-2
`;

const stat_num = `
  text-base
  xxs:text-lg
  xs:text-xl
  sm:text-2xl
  text-off-white
`;

const stat_text = `
  text-xs
  text-lightest-blue
  font-light
  uppercase
  xxs:tracking-widest
`;

const style = {
  profileSection,
  avatar,
  picture,
  name,
  id,
  infoWrapper,
  info,
  info_icon,
  statWrapper,
  stat,
  stat_num,
  stat_text
};

export default style;