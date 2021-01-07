export const getSearchParams = (refData, list) => {
  let searchList = {}
  for (let i = 0; i < list.length; i++) {
    searchList[list[i]] = refData.getFieldValue(list[i])
  }
  return searchList
}