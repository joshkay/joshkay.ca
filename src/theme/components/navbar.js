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
    logo: {
      position: "absolute",
      top: ["30px",, "150px"],
      left: ["13px",, "65px"],
      width: ["5px",, "30px"],
    }
  }),
  variants: {
    
  },
  defaultProps: {
  }
}

export default Navbar;