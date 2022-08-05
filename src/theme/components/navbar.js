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
      top: ["29px",, "150px"],
      left: ["22px",, "110px"],
      width: ["3px",, "15px"],
      opacity: '40%'
    }
  }),
  variants: {
    
  },
  defaultProps: {
  }
}

export default Navbar;