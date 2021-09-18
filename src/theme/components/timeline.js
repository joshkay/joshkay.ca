const Timeline = {
  parts: ["base", "item", "dot"],
  baseStyle: ({ colorMode }) => ({
    base: {
      alignItems: 'flex-start',
      direction: 'column'
    },
    item: {
      listStyleType: "none",
      pb: 3,
      mb: "2px",
      position: "relative",
      _last: {
        mb: 0,
        pb: 0,
        _before: {
          borderLeftColor: "transparent",
        }
      },
      _before: {
        marginTop: "28px",
        top: 0,
        bottom: 0,
        width: "100%",
        borderLeft: "1px dashed",
        borderColor: colorMode === 'dark' ? 'white' : 'gray.500',
        content: '" "',
        position: "absolute",
      }
    },
    dot: {
      position: "relative",
      ps: 6,
      _before: {
        top: "3px",
        height: "20px",
        width: "20px",
        position: "absolute",
        borderRadius: "500%",
        content: '" "',
        background: "primary",
        transform: "translateX(-33.7px)",
        border: "4px solid",
        borderColor: colorMode === 'dark' ? 'white' : 'gray.300'
      }
    }
  }),
  variants: {
  },
  defaultProps: {
  },
}

export default Timeline;