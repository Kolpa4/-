import posed from 'react-pose'

const Appear = posed.div({
  hoverable: true,
  enter: {
    left: 0,
    opacity: 1,
    scale: 1,
    duration: 400,
  },
  hover: {
    scale: 1.2,
  },
  exit: {
    left: ({ direction }) =>
      direction === 'right' ? 300 : direction === 'left' ? -300 : 0,
    opacity: 0,
    duration: 400,
  },
})

export default Appear
