import useWidth from "./useWith"

export const useMobile = () => {
  const screenWidth = useWidth()
  return screenWidth < 1000
}

export default useMobile
