import posed from 'react-pose'

export const RoutesAnimation = posed.div({
  enter: {
    opacity: 1,
    delay: 200,
    beforeChildren: true,
  },
  exit: {
    delay: 200,
    opacity: 0,
  },
})

export const RoutesStyle = {
  zIndex: 119,
  position: 'relative',
  display: 'flex',
  height: '100%',
  width: '100%',
  // boxSizing: "border-box",
  // borderStyle: "solid",
  // borderColor: "#ffffff",
  // borderWidth: 1
}
