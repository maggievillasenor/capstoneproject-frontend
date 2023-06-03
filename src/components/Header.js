import PropTypes from "prop-types";
import { Avatar, Box, Button } from "@mui/material";

const Header = ({ src, title, children }) => {
  return (
    <header>
      <Button id="logo"
        href="/"
        size="large"
        startIcon={<Avatar alt="logo" src={"https://i.ibb.co/j6dwctx/logo-macherie.png"} />}
        sx={{
          fontSize: "1.1rem"
        }}
      >
        {title}
      </Button>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        {children}
      </Box>
    </header>
  );
};

Header.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Header;