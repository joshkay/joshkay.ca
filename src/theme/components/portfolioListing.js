const PortfolioListing = {
  parts: ["base", "image"],
  baseStyle: ({ colorMode }) => ({
    base: {
      direction: "column",
      borderRadius: 10,
      bgColor: colorMode === "dark" ? "gray.700" : "gray.200",
      padding: 4,
    },
    image: {
      borderRadius: 10,
      border: "2px solid",
      borderColor: "white.900",
      mb: 4,
    }
  }),
  variants: {
    
  },
  defaultProps: {
  }
}

export default PortfolioListing;