import { transparentize } from "@chakra-ui/theme-tools";

const Navbar = {
  parts: ["base", "image"],
  baseStyle: ({ colorMode }) => ({
    image: {
      boxSize: ["40px",, "200px"],
      borderWidth: ['1px',, '4px'],
      borderStyle: "solid",
      borderColor: transparentize("white", 0.3),
      borderRadius: "full"
    },
  }),
  variants: {
    
  },
  defaultProps: {
  }
}

export default Navbar;