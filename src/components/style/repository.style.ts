const repoSection = `
  flex
  flex-col
  items-center
  xxs:items-stretch
  space-y-12
`;

const repoHeader = `
  flex
  items-end
  space-x-4
`;

const repoTitle = `
  text-xl
  xxs:text-2xl
  xs:text-3xl
  sm:text-4xl
  text-off-white
  font-bold
  underline
  decoration-2
  decoration-dashed
  decoration-grey
`;

const repoSubtext = `
  text-xs
  xxs:text-sm
  xs:text-base
  sm:text-lg
  text-grey
`;

const repos = `
  w-auto
  grid
  grid-cols-[repeat(auto-fit,minmax(300px,1fr))]
  gap-5
`;

const repo = `
  w-full
  h-full
  p-4
  xxs:p-8
  flex
  flex-col
  justify-between
  space-y-8
  bg-dark-grey
  text-white
  rounded
`;

const repoTop = `
  flex
  flex-col
  space-y-2
`;

const repoHead = `
  flex
  items-center
  space-x-2
`;

const repoName = `
  font-semibold
  text-off-white
  text-sm
  xxs:text-base
  xs:text-lg
  sm:text-xl
  text-ellipsis
  whitespace-nowrap
  overflow-hidden
`;

const repoDesc = `
  font-light
  text-xs
  xxs:text-sm
  xs:text-base
  text-lightest-blue
`;

const repoBottom = `
  flex
  flex-wrap
  items-center
  justify-between
`;

const repoLeft = `
  flex
  items-center
  space-x-3
`;

const langCircle = `
  inline-block
  w-3
  h-3
  rounded-full
`;

const repoStat = `
  flex
  items-center
  space-x-1
  text-xs
  text-slate
`;

const style = {
  repoSection,
  repoHeader,
  repoTitle,
  repoSubtext,
  repos,
  repo,
  repoTop,
  repoHead,
  repoName,
  repoDesc,
  repoBottom,
  repoLeft,
  langCircle,
  repoStat
};

export default style;