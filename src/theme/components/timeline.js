const Timeline = {
  parts: ["base", "item"],
  baseStyle: ({ colorMode }) => ({
    base: {
      alignItems: 'flex-start',
      direction: 'column'
    },
    item: {
      listStyleType: "none",
      pb: 3,
      mb: 1,
      position: "relative",
      _last: {
        mb: 0,
        pb: 0,
        _before: {
          borderLeftColor: "transparent",
        }
      },
      _before: {
        top: 6,
        bottom: 0,
        width: "100%",
        borderLeft: `1px dashed ${colorMode === 'dark' ? 'white' : 'black'}`,
        content: '" "',
        position: "absolute",
      }
    },
    dot: {
      position: "relative",
      ps: 6,
      _before: {
        height: "20px",
        width: "20px",
        position: "absolute",
        borderRadius: "500%",
        content: '" "',
        background: "primary",
        transform: "translateX(-33.7px)",
        border: `4px solid ${colorMode === 'dark' ? 'white' : 'black'}`
      }
    }
  }),
  // Two variants: outline and solid
  variants: {
    primary: {
      backgroundColor: "primary",
      color: "white",
      _hover: {
        bg: "lochmara.300"
      },
      _active: {
        bg: "lochmara.500"
      }
    },
  },
  // The default size and variant values
  defaultProps: {
  },
}

export default Timeline;