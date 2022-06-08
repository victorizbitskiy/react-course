export const getPageCount = (totalCount, limits) => {
  return Math.ceil(totalCount / limits)
}