const pathName = 'website-system-path'

export const setPath = (value) => {
  return sessionStorage.setItem(`${pathName}`, value)
}

export const getPath = () => {
  return sessionStorage.getItem(`${pathName}`)
}

export const removePath = () => {
  return sessionStorage.removeItem(`${pathName}`)
}